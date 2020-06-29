import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionQuestionLanding.scss'
import Button from 'components/molecules/buttons/Button'
import Text from 'components/atoms/common/Text'
import InputField from 'components/molecules/forms/inputs/InputField'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'

class SectionQuestionLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {name: ''}
    this.onChange = this.onChange.bind(this)
    this.getStarted = this.getStarted.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  getStarted() {
    const {question, answer, skip} = this.props
    const {name} = this.state
    if (question && name) {
      question.answer = [name]
      answer(question)
    }
    skip()
  }

  render () {
    const {name} = this.state
    const {
      className,
      question,
      skip,
    } = this.props
    return (
      <div
        className={clsx(
          'section-question-landing',
          className
        )}
      >
        <div className="section-question-landing__polygon" />
        <div className="section-question-landing__form">
          <Text className="section-question-landing__personalise-text">
            Personalise your experience
          </Text>
          <Text className="section-question-landing__r100-text">
            & get R100 off
          </Text>
          {question 
            ? (
              <InputField
                className="section-question-landing__name mt-30"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={this.onChange}
              />
)
            : (
              <Text className="mt-40" color="white" size="xl">
                Continue where you left off;
              </Text>
)
          }
          <Button
            className="section-question-landing__startbtn mt-20"
            icon="arrow"
            onClick={this.getStarted}
          >
            { question ? `GET STARTED` : `CONTINUE` }
          </Button>
          <Row className="mt-10">
            <Col>
              <Button
                className="section-question-landing__skipbtn"
                onClick={skip}
              >
                SKIP FOR NOW
              </Button>
            </Col>
            <Col>
              <Button
                className="section-question-landing__loginbtn"
                tag="a"
                href="/login"
              >
                LOGIN
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

SectionQuestionLanding.defaultProps = {
  className: '',
  question: null,
  skip: null,
  answer: null
}

SectionQuestionLanding.propTypes = {
  className: PropTypes.string,
  question: PropTypes.object,
  skip: PropTypes.func,
  answer: PropTypes.func
}

export default SectionQuestionLanding
