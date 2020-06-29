import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import './SectionPayment.scss'
import StringUtils from 'utils/StringUtils'
import Text from 'components/atoms/common/Text'
import Button 
  from 'components/molecules/buttons/Button'
import CREDIT_IMG from 'assets/images/credits.png'
import {Link} from 'react-router-dom'
import RadioBox from 'components/molecules/forms/checkboxs/RadioBox'
import Divider from 'components/atoms/common/Divider'
import TextWithIcon from 'components/molecules/texts/TextWithIcon'
import Block from 'components/molecules/wrapers/Block'
import Icon from 'components/atoms/common/Icon'

class SectionPayment extends Component {

  constructor(props){
    super(props)
    this.state = {
      curPaymentMethod: null,
      curCreditCard: null,
      isPayLoading: false
    }
    this.selectPaymentMethod = this.selectPaymentMethod.bind(this)
    this.selectCreditCard = this.selectCreditCard.bind(this)
    this.getPayButtonTitle = this.getPayButtonTitle.bind(this)
    this.handleContinue = this.handleContinue.bind(this)
    this.approvalSubmit = React.createRef()
  }

  componentDidUpdate(prevProps) {
    const { cardApproval } = this.props
    if (cardApproval && JSON.stringify(cardApproval) 
      !== JSON.stringify(prevProps.cardApproval)) {
      this.approvalSubmit.current.click()
    }
  }

  getPayButtonTitle() {
    const {curPaymentMethod} = this.state
    if (curPaymentMethod === 'credit-cards') {
      return "PAY WITH CREDIT CARD"
    } if (curPaymentMethod === 'instant-eft') {
      return "PAY WITH INSTANT EFT"
    } if (curPaymentMethod === 'mobicred') {
      return "PAY WITH MOBICRED"
    } if (curPaymentMethod === 'regular-eft') {
      return "PAY WITH REGULAR EFT"
    } if (curPaymentMethod === 'rcs-card') {
      return "PAY WITH RCS CARD"
    } 
      return "CONTINUE"
  }
  
  async handleContinue() {
    const { handlePay} = this.props
    const {curPaymentMethod, curCreditCard} = this.state
    this.setState({isPayLoading: true})
    let params = null
    if (curPaymentMethod === "credit-cards") {
      params = {card_id: curCreditCard}
    }
    await handlePay(curPaymentMethod, params)
    this.setState({isPayLoading: false})
  }

  selectPaymentMethod(e) {
    this.setState({
      curPaymentMethod: e.target.value,
    })
  }

  selectCreditCard(e) {
    this.setState({
      curCreditCard: e.target.value,
    })
  }

  render () {
    const {
      className,
      creditCards,
      cardApproval,
      totalDue,
      dtd,
      theme,
      removeCard
    } = this.props

    const {
      isPayLoading,
      curPaymentMethod,
      curCreditCard,
    } = this.state
    return (
      <div
        className={clsx(
          'section-payment',
          className
        )}
      >
        <Block>
          <div className="section-payment__payment-option">
            <RadioBox 
              label="Credit or Debit Card"
              value="credit-cards"
              checked={curPaymentMethod === "credit-cards"}
              onChange={this.selectPaymentMethod}
              fw="light"
              disabled={!totalDue}
            />
            <img src={CREDIT_IMG} alt="credits" />
          </div>
          {!!totalDue && curPaymentMethod === 'credit-cards' && (
            <div className="section-payment__payment-detail">
              <Text size="normal">Pay with the saved card:</Text>
              {
              creditCards && creditCards.length 
                ? creditCards.map((card, index)=>(
                  <div
                    key={index.toString()}
                    className="section-payment__card-item"
                  >
                    <RadioBox 
                      id={card.id}
                      label={card.brand}
                      value={card.id}
                      checked={!!curCreditCard && curCreditCard === card.id}
                      onChange={this.selectCreditCard}
                      fw="light"
                    />
                    <div className="ml-10">
                      <Text className="credit-name">
                        {card.number_hidden}
                      </Text>
                      <Text>
                        {`Expires: ${card.expiry_month}/20${card.expiry_year}`}
                      </Text>
                    </div>
                    <Text 
                      className="section-payment__card-item-remove"
                      theme={theme}
                      onClick={()=>removeCard(card.id)}
                    >
                      Remove
                    </Text>
                  </div>
                ))
                : (
                  <div className="mt-10" style={{display: 'flex'}}>
                    <Icon name="credit-card" theme={theme} />
                    <Text className="ml-10 mt-5" category="grey">
                      You currently have no cards saved
                    </Text>
                  </div>
)
              }
              <Link to="/accounts/info/add/card">
                <Button className="section-payment__addCard" auto isSmall>
                  + Add new card
                </Button>
              </Link>
            </div>
          )}
          <Divider />
          <div className="section-payment__payment-option">
            <RadioBox 
              label="Regular EFT"
              value="regular-eft"
              checked={curPaymentMethod === "regular-eft"}
              onChange={this.selectPaymentMethod}
              fw="light"
              disabled={!totalDue}
            />
          </div>
          {!!totalDue && curPaymentMethod === 'regular-eft' && (
            <div className="section-payment__payment-detail">
              <Text lh="1-6">
                When you click on pay now you will 
                receive an email with our bank details.
                Please also ensure you upload your Proof 
                of Payment to our website within 2 hours
                to secure your order.
              </Text>
            </div>
          )}
        </Block>
        <Button
          className="mt-20"
          theme={theme}
          onClick={this.handleContinue}
          isLoading={isPayLoading}
        >
          {this.getPayButtonTitle()}
        </Button>
        {dtd && (
        <TextWithIcon
          className={clsx(
            'section-payment__dtd',
            className
          )}
          iconName="truck"
          iconSize={30}
          title="Estimated Delivery Time:"
          description={`${
            `${StringUtils.formatData1(dtd.date_from)}-${
            StringUtils.formatData2(dtd.date_to)}`
          }`}
        />
)}
        {/* Form for checking card */}
        {
          cardApproval && (
          <form action={cardApproval.url} method={cardApproval.method}>
            {
              cardApproval.parameters.map((param, index)=>(
                <input
                  key={index.toString()}
                  type="hidden"
                  name={param.name}
                  value={param.value}
                />
              ))
            }
            <button type="submit" ref={this.approvalSubmit} hidden>
              submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

SectionPayment.defaultProps = {
  className: '',
  theme: null,
  handlePay: null,
  removeCard: null,
  dtd: null,
  creditCards: null,
  cardApproval: null,
  totalDue: 0
}

SectionPayment.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  handlePay: PropTypes.func,
  removeCard: PropTypes.func,
  dtd: PropTypes.object,
  creditCards: PropTypes.array,
  cardApproval: PropTypes.object,
  totalDue: PropTypes.number
}

export default SectionPayment
