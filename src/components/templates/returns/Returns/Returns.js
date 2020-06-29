import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Returns.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Text from 'components/atoms/common/Text'
import Container from 'components/atoms/layout/Container'
import Button from 'components/molecules/buttons/Button'
import SectionReturn 
  from 'components/organisms/sections/returns/SectionReturn'
import SectionAccountTitle 
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import Icon from 'components/atoms/common/Icon'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

class Returns extends Component {
  render () {
    const {
      theme,
      cartCount,
      menuInfo,
      className,
      returns,
      ...others
    } = this.props
    const isEmpty = !returns || returns.length === 0 
    return (
      <BaseLayout 
        theme={theme}
        cartCount={cartCount}
        menuInfo={menuInfo}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title="My Returns"
            link="Back to My Account"
            href="/accounts"
          />
          {
            isEmpty && (
            <div className="returns__icon">
              <Icon name="returns" size={100} theme={theme} />
            </div>
)
          }
          <Text
            className={clsx(
              'mb-10 mt-20', 
              {[`returns__policy`]:isEmpty})} 
            size="small"
            align="center"
          >
            {'If you are not 100% happy with your purchase, we will gladly '
            +'accept your return and refund you within the 14 days '}
            <a href="/policy/returns_policy">
              <Text isUnderline tag='span'>Returns Policy</Text>
            </a>
            {' period'}
          </Text>
          <Link to="/returns/request">
            <Button
              className="mt-20 mb-20 returns__request-return"
              theme={theme}
              isCentered
              isSmall
            >
              REQUEST NEW RETURN 
            </Button>
          </Link>
          {
            returns && returns.map((item, index)=>{
              return (
                <SectionReturn
                  key={index.toString()}
                  theme={theme}
                  className="mt-20"
                  data={item}
                />
              )
            })
          }
        </Container>
      </BaseLayout>
    )
  }
}

Returns.defaultProps = {
  className: '',
  theme:null,
  cartCount:null,
  menuInfo:null,
  returns: null
}

Returns.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  cartCount:PropTypes.number,
  menuInfo:PropTypes.object,
  returns: PropTypes.array
}

export default Returns
