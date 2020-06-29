import React, { Component } from 'react'
import { connect } from 'react-redux'
import Questions from 'components/templates/Questions'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import {
  fetchQuestionList,
  answerForQuestion
} from 'redux/modules/question/actions'

class QuestionsPage extends Component {

  componentDidMount() {
    const {getQuestionList} = this.props
    getQuestionList()
  }

  render() {
    const {
      theme,
      questionList,
      questionToAnswer,
      answeredName,
      user,
      ...others
    } = this.props
    
    const sorted = questionList && questionList.sort((a, b)=>{
      if (a.priority > b.priority) 
        return 1
      return -1
    })

    return (
      <Questions
        theme={theme}
        menuInfo={menuInfo}
        questions={sorted}
        questionToAnswer={questionToAnswer}
        name={answeredName || (user && user.name)}
        {...others}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    questionList: state.question.questionList,
    answeredName: state.question.name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuestionList:() => dispatch(fetchQuestionList()),
    questionToAnswer:(answer) => dispatch(answerForQuestion(answer))
  }
}

QuestionsPage.defaultProps = {
  history: null,
  theme: null,
  questionList: null,
  getQuestionList: null,
  questionToAnswer: null,
  answeredName: null,
  user: null,
}

QuestionsPage.propTypes = {
  history: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  questionList: PropTypes.array,
  getQuestionList: PropTypes.func,
  questionToAnswer: PropTypes.func,
  answeredName: PropTypes.string,
  user: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionsPage)