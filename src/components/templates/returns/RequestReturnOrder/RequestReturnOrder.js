import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './RequestReturnOrder.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Text from 'components/atoms/common/Text'
import Container from 'components/atoms/layout/Container'
import Button from 'components/molecules/buttons/Button'
import Divider from 'components/atoms/common/Divider'
import SectionAccountTitle 
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionRequestReturnOrder 
  from 'components/organisms/sections/returns/SectionRequestReturnOrder'
import Block from 'components/molecules/wrapers/Block'

class RequestReturnOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {items:[]}
    this.onAddItem = this.onAddItem.bind(this)
    this.onRemoveItem = this.onRemoveItem.bind(this)
  }

  onAddItem(item) {
    const {items} = this.state
    const pos = this.checkIfExist(item)
    if (pos < 0)
      items.push(item)
    else
      items[pos] = item
    this.setState({items})
  }

  onRemoveItem(item) {
    const {items} = this.state
    const pos = this.checkIfExist(item)
    if (pos >= 0) items.splice(pos, 1)
    this.setState({items})
  }
  
  checkIfExist(item) {
    const {items} = this.state
    const {length} = items
    for (let i = 0; i < length; i++) {
      if (item.order_number === items[i].order_number 
        && item.simple_sku === items[i].simple_sku)
        return i
    }
    return -1
  }

  render () {
    const {
      ordersList,
      theme,
      menuInfo,
      className,
      next,
      ...others
    } = this.props

    const {items} = this.state
    
    return (
      <BaseLayout 
        theme={theme}
        menuInfo={menuInfo}
        {...others}
      >
        <Container>
          <SectionAccountTitle title="Request New Return" />
          <Text className="mt-20" size="xl">
            Select order items for return
          </Text>
          <Text
            className="mb-10 mt-20" 
            size="small"
            color="grey"
            lh="1-6"
          >
            Click on an order and then select which items you want to return.
            You can include items from multiple orders in the same return.
          </Text>
          <Block className="pt-10 pr-10 pb-10 pl-10">
            {
            ordersList && ordersList.length
            ? ordersList.map((order, index)=>(
              <div key={index.toString()}>
                <SectionRequestReturnOrder  
                  theme={theme}
                  className={className}
                  data={order}
                  onAddItem={this.onAddItem}
                  onRemoveItem={this.onRemoveItem}
                />
                {index !== ordersList.length - 1 && (
                <Divider
                  className="mt-10"
                />
                  )}
              </div>
              ))
            : (
              <Text align="center" size="xl">
                There is no orders to refund
              </Text>
)
          }
          </Block>
     
          <Button
            className="mt-20 mb-20 returns__request-return"
            theme={theme}
            isCentered
            isSmall
            onClick={()=>next(items)}
          >
            NEXT STEP 
          </Button>   
        </Container>
      </BaseLayout>
    )
  }
}

RequestReturnOrder.defaultProps = {
  className: '',
  ordersList: null,
  theme: null,
  menuInfo: null,
  next: null
}

RequestReturnOrder.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  menuInfo: PropTypes.object,
  ordersList: PropTypes.array,
  next: PropTypes.func
}

export default RequestReturnOrder
