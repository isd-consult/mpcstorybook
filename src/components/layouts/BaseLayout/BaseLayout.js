import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from 'components/organisms/common/Header'
import Footer from 'components/organisms/common/Footer'

import Main from 'components/atoms/layout/Main'
import ButtonScrollTop from 'components/molecules/buttons/ButtonScrollTop'
import Loading from 'components/molecules/overlays/Loading'

import './BaseLayout.scss'

class BaseLayout extends Component {

  render() {
    const {
      children,
      footerMenuItems,
      footerMenuItemsPerColumn,
      theme,
      isHeader,
      isFooter,
      isScrollTop,
      isLoading,
      ...others
    } = this.props

    return (
      <>
        {isHeader && (
          <Header
            theme={theme}
            menuItems={footerMenuItems}
            {...others}
          />
        )}
        <Main>
          {
          isLoading
            ?(
              <Loading
                size="large"
                isLogo
                isCentered
                isSecondary
              />
)
            : children
        }
        </Main>
        {isFooter && (
          <Footer
            theme={theme}
            menuItems={footerMenuItems}
            menuItemsPerColumn={footerMenuItemsPerColumn}
            {...others}
          />
        )}
        {isScrollTop && <ButtonScrollTop theme={theme} />}
      </>
    )
  }
}

BaseLayout.defaultProps = {
  children: null,
  footerMenuItems: [
    { href: '/contactus', name: 'Contact us' },
    { href: '/policy/terms_and_conditions', name: 'Ts & Cs' },
    { href: '/policy/returns_policy', name: 'Returns Policy' },
    { href: '/policy/privacy_policy', name: 'Privacy Policy' },
  ],
  footerMenuItemsPerColumn: 3,
  isHeader: true,
  isFooter: true,
  isScrollTop: true,
  theme: null,
  isLoading: false,
  category: 'basic',
}

BaseLayout.propTypes = {
  children: PropTypes.node,
  footerMenuItems: PropTypes.array,
  footerMenuItemsPerColumn: PropTypes.number,
  isHeader: PropTypes.bool,
  isFooter: PropTypes.bool,
  isScrollTop: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isLoading: PropTypes.bool,
  category: PropTypes.oneOf(['basic', 'empty']),
}

export default BaseLayout
