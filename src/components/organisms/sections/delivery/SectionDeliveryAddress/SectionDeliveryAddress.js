import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import StringUtils from 'utils/StringUtils'
import './SectionDeliveryAddress.scss'
import Text from 'components/atoms/common/Text'
import Button 
  from 'components/molecules/buttons/Button'
import Block from 'components/molecules/wrapers/Block'
import Divider from 'components/atoms/common/Divider'
import Icon from 'components/atoms/common/Icon'
import { Link } from 'react-router-dom'
import TextWithIcon from 'components/molecules/texts/TextWithIcon'

class SectionDeliveryAddress extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      isLoading: false,
      address: null,
    }
    this.onChange = this.onChange.bind(this)
    this.setAddress = this.setAddress.bind(this)
  }

  componentDidMount() {
    const {addressInfos} = this.props
    if (addressInfos && addressInfos.length) {
      const shipping = addressInfos.find(address=>{
        return address.is_shipping
      })
      if (shipping) {
        this.setState({address: shipping.hash})
      } else {
        this.setState({address: addressInfos[0].hash})
      }
    }
  }

  onChange(e) {
    this.setState({
      address: e.target.value,
    })
  }
  
  async setAddress(){
    const {setAddress} = this.props
    const { address } = this.state 
    this.setState({isLoading: true})
    await setAddress(address)
    this.setState({isLoading: false})
  }

  render () {
    const {
      className,
      addressInfos,
      dtd,
      theme,
    } = this.props
    const {
       address,
       isLoading
    } = this.state

    return (
      <div
        className={clsx(
          'section-delivery-address',
          className
        )}
      >
        <Block className="section-delivery-address__confirm">
          <div style={{display: 'flex'}}>
            <Icon
              className="section-delivery-address__confirm-icon"
              name="place"
              size={20}
            />
            <Text
              className="section-delivery-address__confirm-text"
              size="xxl"
              fw="bold"
            >
              My address:
            </Text>
          </div>
          <Text className="mt-5" lh="1-6">
            {'Make sure you\'re available at your selected delivery '
            +'address during the estimated delivery timeframe to '
            +'avoid delays. Check if you have selected your HOME, '
            +'WORK or HOLIDAY address.'}
          </Text>
        </Block>
        <Link to="/checkout/delivery/add">
          <Button
            className="mt-20"
            category="grey"
          >
            + ADD NEW ADDRESS
          </Button>
        </Link>
        <Text className="mt-20 mb-20" size="xxl">
          Select delivery address:
        </Text>
        <Block>
          {addressInfos && addressInfos.map((item, index) => {
              return (
                <div key={index.toString()}>
                  <div className="section-delivery-address__address-type">
                    <label 
                      htmlFor={item.hash} 
                      className="address-label"
                    >
                      <input
                        type="radio"
                        id={item.hash}
                        name={item.hash}
                        value={item.hash}
                        onChange={this.onChange}
                        checked={
                          address
                          === item.hash
                        }
                      />
                      <span className="address-name">
                        {item.address_nickname}
                      </span>
                    </label>
                    {address 
                      === item.hash && (
                      <div className="address-edit">
                        <Link to={`/checkout/delivery/edit/${item.hash}`}>
                          Edit
                        </Link>
                      </div>
                        )}
                    <Text className="mt-10 ml-25">{item.street_address}</Text>
                  </div>
                  {addressInfos.length-1 > index && <Divider />}
                </div>
              )
            })}
        </Block>
        <Button
          className="mt-20"
          onClick={this.setAddress}
          theme={theme}
          isLoading={isLoading}
        >
          CONTINUE
        </Button>
        {dtd && (
        <TextWithIcon
          className="section-delivery-address__dtd"
          iconName="truck"
          iconSize={30}
          title="Estimated Delivery Time:"
          description={`${
            `${StringUtils.formatData1(dtd.date_from)}-${
            StringUtils.formatData2(dtd.date_to)}`
          }`}
        />
)}
      </div>
    )
  }
}

SectionDeliveryAddress.defaultProps = {
  className: '',
  addressInfos: null,
  theme: null,
  setAddress:null,
  dtd: null,
}

SectionDeliveryAddress.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  addressInfos: PropTypes.arrayOf(
    PropTypes.shape({
      addressNickname: PropTypes.string, 
      recipientName: PropTypes.string, 
      mobileNumber: PropTypes.string, 
      businessName: PropTypes.string, 
      complexBuilding: PropTypes.string, 
      streetAddress: PropTypes.string, 
      suburb: PropTypes.string,
      postalCode: PropTypes.string,
      city: PropTypes.string,
      province: PropTypes.string,
      specialInstructions: PropTypes.string,
      addressType: PropTypes.string,
      hash: PropTypes.string
    })
  ),
  setAddress: PropTypes.func,
  dtd: PropTypes.object
}

export default SectionDeliveryAddress
