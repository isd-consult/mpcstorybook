import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionCashOut.scss'
import Text from 'components/atoms/common/Text'
import Block from 'components/molecules/wrapers/Block'
import { Link } from 'react-router-dom'
import Col from 'components/atoms/layout/Col'
import Row from 'components/atoms/layout/Row'
import RadioBox from 'components/molecules/forms/checkboxs/RadioBox'
import InputField from 'components/molecules/forms/inputs/InputField'
import Button from 'components/molecules/buttons/Button'
import Spinner from 'components/molecules/spinners/Spinner'

class SectionCashOut extends Component {
  constructor(props) {
    super(props)
    this.state={
      bank: 'actual_credit',
      detail: null,
      isRequestLoading: false,
    }
    this.onBankChange = this.onBankChange.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.creditCashOut = this.creditCashOut.bind(this)
  }

  onBankChange(e) {
    this.setState({
      bank: e.target.value
    })
  }

  onTextChange(e) {
    const {detail} = this.state
    this.setState({
      detail: {...detail, [e.target.name]: e.target.value}
    })
  }

  async creditCashOut() {
    const {creditCashOut, creditInfo} = this.props
    const {detail} = this.state
    this.setState({isRequestLoading: true})
    await creditCashOut({
      "amount": creditInfo.paid,
      "account_holder_name": detail.holderName,
      "account_number": detail.number,
      "branch_code": detail.branchCode
    })
    this.setState({isRequestLoading: false})
  }

  render () {
    const {
      className,
      creditInfo,
      isLoading,
      theme
    } = this.props
    const {
      bank, detail,
      isRequestLoading,
    } = this.state
    return (
      <div
        className={clsx(
          'section-cash-out',
          className
        )}
      >
        {
        isLoading
          ? <Spinner className="mt-20" isCentered theme={theme} />
        :
        (
          <div> 
            <Text className="section-cash-out__desc" size="normal">
              {'You received credit from an order refund. If you would ' 
          +'prefer to receive your refund as a bank transfer, please '
          +'add your back details below. \n\n'
          +'Note: You will not be paid out for any <regular credit> '
          +'you may have, only your <Cash Out>'}
            </Text>
            <Block className="mt-20 pt-15 pr-20 pb-15 pl-20">
              {creditInfo && (
              <Text size="normal">
                {`Credit available got cash ot: ${creditInfo.paid}`}
              </Text>
)}
              <Link className="section-cash-out__link" to="/">
                <Text className="mt-5" size="normal" theme={theme}>
                  View full breakdown
                </Text>
              </Link>
            </Block>
            <Text className="mt-20" size="xl" fw="bold">
              Your back details:
            </Text>
            <Row>
              <Col>
                <RadioBox
                  name="bank"
                  label="Actual Credit"
                  value="actual_credit"
                  checked={bank === 'actual_credit'}
                  onChange={this.onBankChange}
                />
              </Col>
              <Col>
                <RadioBox
                  name="bank"
                  label="Rewarded Credit"
                  value="rewarded_credit"
                  checked={bank === 'rewarded_credit'}
                  onChange={this.onBankChange}
                />
              </Col>
            </Row>
            <InputField
              theme={theme}
              label="Account Holder Name"
              required
              onChange={this.onTextChange}
              name="holderName"
              value={detail && detail.holderName}
            />
            <InputField
              theme={theme}
              label="Account Number"
              required
              onChange={this.onTextChange}
              name="number"
              value={detail && detail.number}
            />
            <InputField
              theme={theme}
              label="Branch Code"
              required
              onChange={this.onTextChange}
              name="branchCode"
              value={detail && detail.branchCode}
            />
            <Button
              className="mt-20 mb-20"
              theme={theme}
              isLoading={isRequestLoading}
              onClick={this.creditCashOut}
            >
              SEND
            </Button>
          </div>
        )
      }
      </div>
    )
  }
}

SectionCashOut.defaultProps = {
  className: '',
  creditCashOut: null,
  creditInfo: null,
  theme: null,
  isLoading: false,
}

SectionCashOut.propTypes = {
  className: PropTypes.string,
  creditCashOut: PropTypes.func,
  creditInfo: PropTypes.object,
  isLoading: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionCashOut
