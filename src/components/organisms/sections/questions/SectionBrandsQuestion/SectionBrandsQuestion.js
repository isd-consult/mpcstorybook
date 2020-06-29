import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { chunkArray } from 'utils'
import './SectionBrandsQuestion.scss'
import Text from 'components/atoms/common/Text'
import noimage from 'assets/images/noimage.png'

class BrandItem extends Component {
  render () {
    const {className, data, active, onClick} = this.props
    const Brand = `div`
    return (
      <Brand
        className={clsx(
          'brand-item',
          {[`brand-item--active`]: active},
          className
        )}
        onClick={onClick}
      >
        <div className="brand-item__overlay" />
        <img
          className="brand-item__image" 
          src={data.png_image}
          onError={
          (e)=>{
            e.target.onerror = null 
            e.target.src = noimage
          }
        }
          alt={data.value}
        />
      </Brand>
    )
  }
}

BrandItem.defaultProps = {
  className: '',
  data: null,
  active: false,
  onClick: null,
}

BrandItem.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

class SectionBrandsQuestion extends Component {
  
  constructor(props) {
    super(props)
    this.state = {selected: []}
    this.toggleItem = this.toggleItem.bind(this)
  }

  toggleItem(value) {
    const {selected} = this.state
    const {question, onChange} = this.props
    const pos = selected.indexOf(Number(value))
    if (pos < 0) {
      selected.push(Number(value))
    } else {
      selected.splice(pos, 1)
    }
    this.setState({selected})
    if (question && onChange && selected.length) {
      question.answer = selected
      onChange(question)
    }
  }

  render () {
    const {
      className,
      question
    } = this.props

    const {
      selected
    } = this.state

    let dividedOptions = null
    if (question && question.options) {
      dividedOptions = chunkArray(question.options, 3)
    }

    return (
      <div
        className={clsx(
          'section-brands-question',
          className
        )}
      >
        <Text
          className="pl-30 pr-30"
          size="h2"
          fw="bold"
        >
          What are your favourite brands?
        </Text>
        <Text
          className="mt-10 pl-30 pr-30"
          size="xxl"
          fw="bold"
        >
          Select as many as you like:
        </Text>
        <div style={{overflowX: `scroll`}}>
          <div
            className="section-brands-question__brands"
            style={{
              width: `${dividedOptions && dividedOptions.length * 160}px`,
              minWidth: `100%`
            }}
          >
            {
            dividedOptions && dividedOptions.map((group, index)=>(
              <div key={index.toString()} style={{display: 'inline-block'}}>
                {
                  group && group.map(option=>(
                    <BrandItem
                      className="mt-15 mb-15 ml-15"
                      key={option.id}
                      data={option}
                      active={selected.indexOf(option.id)>-1}
                      onClick={()=>this.toggleItem(option.id)}
                    />
                  ))
                }
              </div>
            )) 
          }
          </div>
        </div>
      </div>
    )
  }
}

SectionBrandsQuestion.defaultProps = {
  className: '',
  question: null,
  onChange: null
}

SectionBrandsQuestion.propTypes = {
  className: PropTypes.string,
  question: PropTypes.object,
  onChange: PropTypes.func
}

export default SectionBrandsQuestion
