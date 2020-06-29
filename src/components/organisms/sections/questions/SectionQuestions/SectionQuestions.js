import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import './SectionQuestions.scss'

import StepText from 'components/molecules/texts/StepText'
import Button from 'components/molecules/buttons/Button'
import Text from 'components/atoms/common/Text'
import Icon from 'components/atoms/common/Icon'
import Step from 'components/molecules/panels/Step'
import Container from 'components/atoms/layout/Container'

import MultiBrandsSelect
  from 'components/molecules/forms/multiselects/MultiBrandsSelect'
import MultiCategoriesSelect
  from 'components/molecules/forms/multiselects/MultiCategoriesSelect'
import MultiGendersSelect
  from 'components/molecules/forms/multiselects/MultiGendersSelect'

import ArrayUtils from 'utils/ArrayUtils'

class SectionQuestions extends Component {
  constructor(props) {
    super(props)
    this.state={
      curStep: 0,
      selected: []
    }
    this.onChange = this.onChange.bind(this)
    this.nextBtn = this.nextBtn.bind(this)
    this.prevBtn = this.prevBtn.bind(this)
    this.skip = this.skip.bind(this)
  }

  onChange(data) {
    this.setState({selected: data.selected})
  }

  async nextBtn() {
    const {questions, questionToAnswer, startShop} = this.props
    const {curStep, selected} = this.state
    const question = questions[curStep]
    if (curStep<questions.length && selected.length>0){
      question.answer = ArrayUtils.convertToNumbers(selected)
      await questionToAnswer(question)
    } else if (curStep===questions.length) {
      startShop()
    }
    this.setState({
      curStep: curStep+1,
      selected: [],
    })
  }

  prevBtn() {
    const {curStep} = this.state
    this.setState({
      curStep:curStep-1,
      selected: [],
    })
  }

  skip() {
    const {history} = this.props
    history.push("/")
  }

  render () {
    const {
      className,
      user,
      questions,
      startShop
    } = this.props

    const {curStep, selected} = this.state
    const DIV = `div`
    const totalQuestions = questions.length
    const name = user && user.name
    return (
      <div
        className={clsx(
          'section-questions',
          className
        )}
      >
        {questions && questions.length>0 && questions.map((item, index)=>{
          const options = ArrayUtils.convertFilteredArray(
            item.options,
            [
              ["value", "name"], 
              ["value", "label"], 
              ["id", "value"], 
              ["png_image", "image"]
            ]
          )
          return (
            <Step key={index.toString()} active={curStep===index}>
              <DIV className="pl-40" style={{height: 38}}>
                <StepText
                  className="section-questions__step pt-10"
                  current={index+1}
                  total={questions.length}
                />
                <DIV className="section-questions__couponBtn">
                  <Text color="white">R 100 off awaits</Text>
                </DIV>
              </DIV>
              <DIV
                className="section-questions_question
                pl-40 pr-40 pt-20 pb-20"
              >
                <Text size="h2" fw="bold">{item.question}</Text>
              </DIV>
              <DIV className="section-questions__section">
                <DIV className="section-questions__brand">
                  {
                  (item.attribute.value==='brand')
                  && (
                  <MultiBrandsSelect
                    name={item.attribute.value}
                    options={options}
                    selected={selected}
                    onChange={this.onChange}
                  />
)
                }
                </DIV>
                <DIV className="section-questions__category">
                  {
                  (item.attribute.value==='producttype')
                  && (
                  <MultiCategoriesSelect
                    options={options}
                    name={item.attribute.value}
                    selected={selected}
                    onChange={this.onChange}
                  />
)
                }
                </DIV>
                <DIV className="section-questions__gender">
                  {
                  (item.attribute.value==='gender') 
                  && (
                  <MultiGendersSelect
                    options={options}
                    name={item.attribute.value}
                    selected={selected}
                    onChange={this.onChange}
                  />
)
                }
                </DIV>
              </DIV>
            </Step>
          )
        })}
        <Step active={totalQuestions>0 && curStep===totalQuestions}>
          <DIV className="section-questions__thanks pt-40 pl-20 pr-20">
            <Container>
              <Text className="pl-5 pr-5" size="h3" fw="bold">
                {`Thanks for sharing ${name}!`}
              </Text>
              <Text className="mt-40 pl-5 pr-5" size="xl" fw="bold">
                {'Here\'s your R100 off coupon:'}
              </Text>
              <DIV
                className="mt-20 pt-20 pl-30 pr-30 pb-20" 
                style={{backgroundColor: 'white', textAlign: 'center'}}
              >
                <Text size="xxl">
                  R100 off your first order*
                </Text>
                <Text className="mt-15" size="small">
                  Your coupon has been added to your cart
                </Text>
                <Button
                  className="mt-20 mb-20"
                  fw="bold"
                  icon="arrow"
                  onClick={startShop}
                  auto
                  isCentered
                >
                  Start Shopping
                </Button>
                <Text size="small" align="center">
                  *Minimum spend: R400
                </Text>
              </DIV>
            </Container>
          </DIV>
          
        </Step>
        <DIV className="section-questions__footer">
          {
                (curStep>0) && (
                <Button 
                  className="ml-20"
                  auto 
                  icon="arrow"
                  category="tertiary"
                  leftIcon
                  isIconFilpH
                  onClick={this.prevBtn}
                >
                  Back
                </Button>
)}
          <Button
            className="section-questions__nextBtn"
            onClick={this.nextBtn}
          >
            <Icon className="section-questions__nextIcon" name="arrow" />
          </Button>
          <Text
            className='section-questions__footerdesc'
            fw='light'
            color='silver'
            align='center'
            size='xl'
            onClick={this.skip}
          >
            {'Skip | I don\'t want R100 anyway - Let\'s shop !'}
          </Text>
        </DIV>
      </div>
    )
  }
}

SectionQuestions.defaultProps = {
  className: '',
  history: null,
  user: null,
  questions: [],
  startShop: null,
  questionToAnswer: null,
}

SectionQuestions.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
  user: PropTypes.object,
  questions: PropTypes.array,
  startShop: PropTypes.func,
  questionToAnswer: PropTypes.func
}

export default SectionQuestions
