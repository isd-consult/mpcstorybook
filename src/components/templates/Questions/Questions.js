import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import './Questions.scss'
import Button from 'components/molecules/buttons/Button'
import StepPagination from 'components/molecules/paginations/StepPagination'
import SectionQuestionLanding
  from 'components/organisms/sections/questions/SectionQuestionLanding'
import SectionLangGenderQuestion
  from 'components/organisms/sections/questions/SectionLangGenderQuestion'
import SectionBrandsQuestion
  from 'components/organisms/sections/questions/SectionBrandsQuestion'
import SectionPreferencesQuestion
  from 'components/organisms/sections/questions/SectionPreferencesQuestion'
import SectionThanksQuestion
  from 'components/organisms/sections/questions/SectionThanksQuestion'

class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {step: 1, answer: null}
    this.onChange = this.onChange.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.prevStep = this.prevStep.bind(this)
  }

  onChange(answer) {
    this.setState({answer})
  }

  getQuestion(topic) {
    const {questions} = this.props
    let result = null
    if (questions) {
      questions.forEach(question => {
        if (question.attribute.value === topic) {
            result = question
        }
      })
    }
    return result
  }

  nextStep() {
    const {questionToAnswer, questions} = this.props
    const {step, answer} = this.state
    if (questions && step < questions.length) {
      if (answer && questionToAnswer) {
        questionToAnswer(answer)
      }
      this.setState({step: step + 1, answer: null})
    }
  }

  prevStep() {
    const {step} = this.state
    if (step > 1) {
      this.setState({step: step - 1})
    }
  }

  render () {
    const {
      className,
      name,
      questions,
      questionToAnswer,
    } = this.props
    const {
      step
    } = this.state
    let pos = 1
    return (
      <div className={clsx('questions', className)}>
        <Button
          className="questions__closebtn"
          icon="close"
          auto
          onClick={()=>window.location.href="/"}
        >
          EXIT
        </Button>
        {
          step === pos && (
          <SectionQuestionLanding
            skip={()=>this.setState({step: step + 1})}
            answer={questionToAnswer}
            question={this.getQuestion('name')}
          />
)}
        {
          questions && questions.map((question, index)=>{
            if (question.attribute.value === 'languages') {
              pos += 1
              return step === pos && (
              <SectionLangGenderQuestion
                key={index.toString()}
                question={this.getQuestion('languages')}
                onChange={this.onChange}
              />
)
            }if (question.attribute.value === 'brand') {
              pos += 1
              return step === pos && (
              <SectionBrandsQuestion
                key={index.toString()}
                question={this.getQuestion('brand')}
                onChange={this.onChange}
              />
)
            } 
              return <div key={index.toString()} />
            
          })
        }
        {
          step === pos + 1 && (
          <SectionPreferencesQuestion />
)}
        {
          step === pos + 2 && (
          <SectionThanksQuestion name={name} />
)}
        {
          step !== 1 && (
          <StepPagination
            className="questions__pagination"
            cur={step}
            total={questions?questions.length:0}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        )}
      </div>
    )
  }
}

Questions.defaultProps = {
  className: '',
  name: null,
  questions: [],
  questionToAnswer: null,
}

Questions.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  questions: PropTypes.array,
  questionToAnswer: PropTypes.func,
}

export default Questions
