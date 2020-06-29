import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionsHome from 'components/templates/QuestionsHome'
import QuestionsQuiz from 'components/templates/QuestionsQuiz'
import QuestionsLoading from 'components/molecules/overlays/QuestionLoading'
import PropTypes from 'prop-types'
import { initAction, onPaging } from 'redux/modules/questions/actions'

class Questions extends Component {
  componentDidMount() {
    const { init } = this.props
    init()
  }

  pageSwitcher() {
    const {
      onSubmit,
      pagination,
      data,
      isLoadingQuiz,
      initialValues,
      theme,
    } = this.props
    const currentPaginationItem = pagination.find(item => item.isCurrent)
    let view = null

    const home = (
      <QuestionsHome
        data={data[0]}
        pagination={pagination}
        onSubmit={onSubmit}
        initialValues={initialValues}
      />
    )
    const quiz = (
      <QuestionsQuiz
        isLoading={isLoadingQuiz}
        onSubmit={onSubmit}
        pagination={pagination}
        data={data}
        initialValues={initialValues}
        theme={theme}
      />
    )

    switch (currentPaginationItem.label) {
      case 1:
      case null:
        view = home
        break
      default:
        view = quiz
        break
    }

    return view
  }

  render() {
    const { isLoading } = this.props
    return isLoading ? <QuestionsLoading /> : this.pageSwitcher()
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.questions.isLoading,
    data: state.questions.currentPageData,
    pagination: state.questions.pagination,
    isLoadingQuiz: state.questions.isLoadingQuiz,
    theme: state.questions.theme,
    initialValues: state.questions.initialValues
  }
}
const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(initAction()),
    onSubmit: data => dispatch(onPaging(data)),
  }
}
Questions.defaultProps = {
  onSubmit: null,
  pagination: [],
  init: null,
  isLoading: true,
  isLoadingQuiz: true,
  data: [],
  initialValues: {},
  theme: 0
}

Questions.propTypes = {
  init: PropTypes.func,
  onSubmit: PropTypes.func,
  data: PropTypes.array,
  pagination: PropTypes.array,
  isLoading: PropTypes.bool,
  isLoadingQuiz: PropTypes.bool,
  initialValues: PropTypes.object,
  theme: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
