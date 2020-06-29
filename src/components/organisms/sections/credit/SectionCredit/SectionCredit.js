import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionCredit.scss'
import Text from 'components/atoms/common/Text'
import Button from 'components/molecules/buttons/Button'
import Block from 'components/molecules/wrapers/Block'
import Icon from 'components/atoms/common/Icon'
import { Link } from 'react-router-dom'
import StringUtils from 'utils/StringUtils'

class FbuckItem extends Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
  }
 
  render () {
    const {className, data, theme}=this.props
    const {open} = this.state
    const DIV = 'div'
    return (
      <div
        className={clsx(
          'fbuck-item',
          {'fbuck-item--active': open},
          className
        )}
      >
        <DIV
          className="fbuck-item__body"
          onClick={()=>this.setState({open: !open})}
        >
          <Icon
            className="fbuck-item__body-icon"
            name={open? "arrow-up" : "arrow-down"}
            size={10}
          />
          <DIV className="fbuck-item__body-desc">
            <Text>
              {
              data.amount > 0 
                ? 'Rdeemed on order' 
                : 'Order cash back'
            }
            </Text>
            <Text theme={theme}>{data.changed_at}</Text>
          </DIV>
          <Text
            color={data.amount>0?'green':'red'}
            fw="bold"
            size="xl"
          >
            {`${StringUtils.formatPrice(data.amount, 2)}`}
          </Text>
        </DIV>
        <DIV className="fbuck-item__extra">
          <Text>Earned on</Text>
          <Text className="mt-5">
            {`Order number: ${data.order_number}`}
          </Text>
          <Text className="mt-5">
            {`Opening balance: ${200}`}
          </Text>
          <Text className="mt-5">
            {`Closing balance: ${300}`}
          </Text>
        </DIV>
      </div>
    )
  }
}

FbuckItem.defaultProps = {
  className: '',
  data: null,
  theme: null,
}

FbuckItem.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

class SectionCredit extends Component {
  render () {
    const {
      className,
      fbucksInfo,
      theme
    } = this.props

    return (
      <div
        className={clsx(
          'section-credit',
          className
        )}
      >
        { fbucksInfo && fbucksInfo.fbucks_amount > 0 && (
        <div style={{display: 'flex'}}>
          <Text className="mr-10" size="xxl" fw="bold">
            Fbucks balance: 
          </Text>
          <Text 
            size="xxl"
            fw="bold"
            color="green"
          >
            {fbucksInfo.fbucks_amount}
          </Text>
        </div>
      )}
        { fbucksInfo && fbucksInfo.fbucks_amount <= 0 && (
        <div>
          <Text size="xl" fw="bold">
            You do not quality for Fbucks yet!
          </Text>
          <Text size="normal" lh="1-6">
            Once you place your first order, you will be added
            to our Fbucks Rewards program.
          </Text>
          <Link to="/">
            <Button className="mt-10" category="grey">
              Shop Now
            </Button>
          </Link>
        </div>
)}
        <Block className="mt-15 pt-10 pr-10 pb-10 pl-10">
          <Text size="xl" fw="bold">
            What is Fbucks?
          </Text>
          <Text size="normal" lh="1-6">
            For every purchase you make, you get credit back to
            spend on your next order.
          </Text>
        </Block>
        <div className="section-credit__balance">
          <div style={{display: 'flex', marginTop: 3}}>
            <Text className="mr-10" size="xl" fw="bold">
              Cash out balance: 
            </Text>
            <Text
              size="xl"
              fw="bold"
              color="coral"
            >
              {fbucksInfo && fbucksInfo.cache_out_balance}
            </Text>
          </div>
          <Link to="/credit/cashout">
            <Button className="section-credit__cashout-btn" theme={theme}>
              Cashout
            </Button>
          </Link>
        </div>
        <Text className="mt-10 mb-10" size="normal">
          You can cash out this credit because it is from a refund
        </Text>
        {
        fbucksInfo && 
        fbucksInfo.fbucks_changes &&
        fbucksInfo.fbucks_changes.length > 0 && (
        <>
          <Text className="mt-10" size="xl" fw="bold">
            Fbucks History: 
          </Text>
          <Block className="pt-10 pr-10 pb-10 pl-10 mt-10 mb-10">
            <div className="section-credit__table-head">
              <Text className="section-credit__table-head-desc">
                Description
              </Text>
              <Text className="section-credit__table-head-amount">
                Fbucks amount
              </Text>
            </div>
            {fbucksInfo.fbucks_changes.map((fbuck, index)=>(
              <FbuckItem key={index.toString()} data={fbuck} theme={theme} />
              ))}
          </Block>
        </>
      )}
      </div>
    )
  }
}

SectionCredit.defaultProps = {
  className: '',
  fbucksInfo: null,
  theme: null,
}

SectionCredit.propTypes = {
  className: PropTypes.string,
  fbucksInfo: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionCredit
