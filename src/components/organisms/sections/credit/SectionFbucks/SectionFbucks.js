import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionFbucks.scss'
import Text from 'components/atoms/common/Text'
import BasicChart from 'components/molecules/charts/BasicChart'
import Button from 'components/molecules/buttons/Button'
import { Link } from 'react-router-dom'

class SectionFbucks extends Component {
  constructor(props) {
    super(props)
    this.renderChart = this.renderChart.bind(this)
  }

  renderChart(item) {
    const {theme} = this.props
    return (
      <div style={{
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'}}
      > 
        <div>
          <Text align="center">{item.name}</Text>
          <Text
            align="center"
            size="xxxl"
            fw="bold"
            theme={theme}
          >
            {`${item.credit_back_percent}%`}
          </Text>
        </div>
      </div>
    )
  }

  render () {
    const {
      className,
      tierList
    } = this.props

    return (
      <div
        className={clsx(
          'section-fbucks',
          className
        )}
      >
        <Text className="section-fbucks__fc-grey" lh="1-6" size="normal">
          Fbucks is our customer rewards program where you earn credit
          cash back (called Fbucks) on every order you place. You can 
          use Fbucks to pay for your future orders.
        </Text>
        <Text
          className="mt-15"
          size="xl"
          fw="bold"
        >
          How many Fbucks do you get?
        </Text>
        <Text className="section-fbucks__fc-grey mt-10" lh="1-6" size="normal">
          We have 4 tiers, based on how much you spend at FashionCo.
          Each tier has a different amount of Fbucks that you will earn on
          every product you buy.
          <br />
          For example, if you are on the Silver Tier then you will get 10% of
          your product price back in Fbucks after the purchase.
        </Text>
        <Text
          className="mt-15"
          size="xl"
          fw="bold"
        >
          Tier Breakdown:
        </Text>
        <BasicChart
          height={170}
          items={tierList}
          attr="credit_back_percent"
          render={this.renderChart}
        />
        <Text
          className="section-fbucks__fc-grey mt-10"
          align="center"
          fw="bold"
        >
          Fbucks earned on purchases
        </Text>
        <Text
          className="mt-15"
          size="xl"
          fw="bold"
        >
          Fast facts:  
        </Text>
        <ul className="section-fbucks__facts">
          <li>
            <Text lh="1-6" size="normal">
              You need to be logged in to see your Fbucks. If you qualify for
              Fbucks but you are not seeing them on product pages then
              please log in;
            </Text>
          </li>
          <li>
            <Text lh="1-6" size="normal">
              You only qualify to start earning Fbucks after your first 
              purchase;
            </Text>
          </li>
          <li>
            <Text lh="1-6" size="normal">
              After your first purchase you will allows qualify for Fbucks;
            </Text>
          </li>
          <li>
            <Text lh="1-6" size="normal">
              Fbucks are only awarded when your order is delivered;
            </Text>
          </li>
          <li>
            <Text lh="1-6" size="normal">
              Tier balances are updated every night, so your tier could take
              a few hours to update;
            </Text>
          </li>
          <li>
            <Text lh="1-6" size="normal">
              Terms & Conditions apply;
            </Text>
          </li>
        </ul>
        <Link to="/credit">
          <Button
            className="mt-20 mb-20"
            category="grey"
          >
            Check your balance
          </Button>
        </Link>
      </div>
    )
  }
}

SectionFbucks.defaultProps = {
  className: '',
  tierList: null,
  theme: null,
}

SectionFbucks.propTypes = {
  className: PropTypes.string,
  tierList: PropTypes.array,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionFbucks
