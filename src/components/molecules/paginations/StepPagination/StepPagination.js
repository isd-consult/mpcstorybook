import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './StepPagination.scss'
import Icon from 'components/atoms/common/Icon'
import Text from 'components/atoms/common/Text'

class StepPagination extends Component {
  constructor(props) {
    super(props)
    this.state = {cur: -1}
  }

  componentDidMount() {
    const {cur} = this.props
    this.setState({cur})
  }

  componentWillReceiveProps(nextProps) {
    const {cur} = this.props
    if (cur !== nextProps.cur) {
      this.setState({cur: nextProps.cur})
    }
  }
  
  render () {
    const {
      className,
      total,
      nextStep,
      prevStep
    } = this.props
    const { cur } = this.state

    const steps = []
    for (let i = 1; i<total+1; i++) steps.push(i)

    return (
      <div
        className={clsx(
          'step-pagination',
          className
        )}
      >
        <Icon
          className="step-pagination__leftarrow"
          name="arrow-left"
          onClick={prevStep}
        />
        {
          steps && steps.map((step, index)=>(
            <div key={index.toString()} style={{textAlign: 'center'}}>
              {cur === step && <div className="step-pagination__triangle" />}
              <Text
                className={clsx(
                  'step-pagination__step',
                  {[`step-pagination__step--before`]: cur < step},
                  {[`step-pagination__step--cur`]: cur === step},
                  {[`step-pagination__step--after`]: cur > step}
                  )}
                size="xl"
              >
                {step}
              </Text>
            </div>
    ))
        }
        <div
          className={clsx(
            "step-pagination__r100",
            {[`step-pagination__r100--active`]: cur === total + 1}
          )} 
        >
          R100
        </div>
        <Icon
          className="step-pagination__rightarrow"
          name="arrow"
          onClick={nextStep}
        />
      </div>
    )
  }
}

StepPagination.defaultProps = {
  className: '',
  total: 0,
  cur: 0,
  nextStep: null,
  prevStep: null
}

StepPagination.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  cur: PropTypes.number,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
}

export default StepPagination
