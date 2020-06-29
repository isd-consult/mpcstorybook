import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './PaymentMethods.scss'
import Select from 'components/molecules/forms/Select'
import InputField from 'components/molecules/forms/inputs/InputField'

class PaymentMethods extends Component {
  constructor(props) {
    super(props)
    this.state = {selected: null}
    this.onMethodChange = this.onMethodChange.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
  }
  
  onMethodChange(value) {
    const {onChange} = this.props
    const selected = {type: value, params: {}}
    this.setState({selected})
    if (onChange) onChange(selected)
  }

  onTextChange(e) {
    const { onChange } = this.props
    let { selected } = this.state
    selected = {
      ...selected,
      params: {
        ...selected.params,
        [e.target.name]: e.target.value
      }
    }
    this.setState({selected})
    if (onChange) onChange(selected)
  }

  render () {
    const {
      className,
      methods
    } = this.props

    const {
      selected
    } = this.state
    return (
      <div
        className={clsx(
          'payment-methods',
          className
        )}
      >
        <Select
          options={methods}
          onChange={this.onMethodChange}
        />
        {
          selected && selected.type === 'credit_card_eft' && (
          <>
            <InputField
              label="Account Holder Name"
              required
              onChange={this.onTextChange}
              name="account_holder_name"
              value={selected 
                && selected.params 
                && selected.params.account_holder_name
              }
            />
            <InputField
              label="Account Number"
              required
              onChange={this.onTextChange}
              name="account_number"
              value={selected 
                && selected.params 
                && selected.params.account_number
              }
            />
            <InputField
              label="Branch Code"
              required
              onChange={this.onTextChange}
              name="branch_code"
              value={selected 
                && selected.params 
                && selected.params.branch_code
              }
            />
          </>
        )}
      </div>
    )
  }
}

PaymentMethods.defaultProps = {
  className: '',
  methods: null,
  onChange: null
}

PaymentMethods.propTypes = {
  className: PropTypes.string,
  methods: PropTypes.array,
  onChange: PropTypes.func
}

export default PaymentMethods
