import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionLangGenderQuestion.scss'
import Text from 'components/atoms/common/Text'
import SingleRangeInput
  from 'components/molecules/forms/sliders/SingleRangeInput'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'

class SectionLangGenderQuestion extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      lang: 1,
      gender: 1,
    }
    this.onChange = this.onChange.bind(this)
    this.onLangChange = this.onLangChange.bind(this)
    this.onGenderChange = this.onGenderChange.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name]: parseInt(e.target.value, 10)})
  }

  onLangChange(value) {
    this.setState({lang: value})
  }

  onGenderChange(value) {
    this.setState({gender: value})
  }

  render () {
    const {
      className,
      question
    } = this.props
    const {
      lang, gender
    } = this.state
    const genders = ['Female', 'Prefer not to say', 'Male']
    return (
      <div
        className={clsx(
          'section-lang-gender-question',
          className
        )}
      >
        <div className="section-lang-gender-question__lang">
          <Text
            size="h2"
            fw="bold"
          >
            What language would you like to use?
          </Text>
          <Text
            className="mt-10"
            size="xxl"
            fw="bold"
          >
            Choose a language for these questions:
          </Text>
          <Row className="section-lang-gender-question__lang-area mt-10">
            <Col xs={1}>
              <br />
              <br />
              <br />
              <br />
              <SingleRangeInput
                className="section-lang-gender-question__lang-range-input"
                minValue={0}
                maxValue={question && (question.options.length-1)}
                step={1}
                value={lang}
                orient="vertical"
                name="lang"
                onChange={this.onChange}
              />
            </Col>
            <Col
              className="section-lang-gender-question__lang-text-area"
              xs={11}
            >
              {question && question.options.map((option,index)=>(
                <Text
                  key={option.id}
                  className={clsx(
                  'section-lang-gender-question__lang-text'
                )}
                  size="xxl"
                  fw="bold"
                  color={lang===index?'white':null}
                  onClick={()=>this.setState({lang:index})}
                >
                  {option.value}
                </Text>
            ))}
            </Col>
           
          </Row>
        </div>
        <div className="section-lang-gender-question__gender">
          <Text size="h2" fw="bold">
            Select a gender you identify as:
          </Text>
          <div className="mt-10 pl-20 pr-20">
            <SingleRangeInput
              className="mt-20"
              minValue={0}
              maxValue={2}
              step={1}
              value={gender}
              name="gender"
              onChange={this.onChange}
            />
            <div
              className="mt-40"
              style={{display: 'flex', justifyContent: 'space-between'}}
            >
              {
                genders && genders.map((option, index)=>(
                  <Text
                    key={index.toString()}
                    className='section-lang-gender-question__lang-text'
                    size="xxl"
                    fw="bold"
                    color={gender===index?'white':null}
                    onClick={()=>this.setState({gender:index})}
                  >
                    {option}
                  </Text>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SectionLangGenderQuestion.defaultProps = {
  className: '',
  question: null,
}

SectionLangGenderQuestion.propTypes = {
  className: PropTypes.string,
  question: PropTypes.object
}

export default SectionLangGenderQuestion
