import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionPreferencesQuestion.scss'
import Text from 'components/atoms/common/Text'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Switch from 'components/molecules/forms/Switch'

class SectionPreferencesQuestion extends Component {
  constructor(props) {
    super(props)
    this.onTextChange = this.onTextChange.bind(this)
    this.onSwitchChange = this.onSwitchChange.bind(this)
  }
  
  onSwitchChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const {
      className
    } = this.props
    const genders=['Just me', 'Men', 'Ladies', 'Girls', 'Boys']
    return (
      <div
        className={clsx(
          'section-preferences-question',
          className
        )}
      >
        <Text
          size="h2"
          fw="bold"
        >
          Do you shop for anyone else?
        </Text>
        <Text
          className="mt-10 mb-10"
          size="xxl"
          fw="bold"
        >
          You can select multiple:
        </Text>
        <div>
          {
              genders && genders.map((option, index)=>(
                <Row key={index.toString()} className="mt-10">
                  <Col xs={2}>
                    <Switch />
                  </Col>
                  <Col xs={10}>
                    <Text
                      size="xxl"
                      fw="bold"
                    >
                      {option}
                    </Text>
                  </Col>
                </Row>
              ))
            }
        </div>
      </div>
    )
  }
}

SectionPreferencesQuestion.defaultProps = {
  className: ''
}

SectionPreferencesQuestion.propTypes = {
  className: PropTypes.string
}

export default SectionPreferencesQuestion
