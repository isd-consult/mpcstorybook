import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Header.scss'

import Logo from 'components/atoms/common/Logo'
import ButtonHamburger from 'components/molecules/buttons/ButtonHamburger'
import ButtonIcon from 'components/molecules/buttons/ButtonIcon'
import Container from 'components/atoms/layout/Container'
import SlideMenu from 'components/organisms/common/SlideMenu'
import Button from 'components/molecules/buttons/Button'
import CardCategory from 'components/molecules/cards/CardCategory'
import Searchbar from 'components/molecules/forms/Searchbar'
import SearchNewIn from 'components/organisms/search/SearchNewIn'
import SearchOverlay from 'components/organisms/search/SearchOverlay'
import Portal from 'components/atoms/layout/Portal'
import { Link } from 'react-router-dom'
import Divider from 'components/atoms/common/Divider'
import TogglePannel from 'components/molecules/panels/TogglePannel'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpened: false,
      isSearchOpened: false,
      active: false
    }
    this.logout = this.logout.bind(this)
  }

  handleMenuOpen(opened) {
    const { onMenuToggle } = this.props

    this.setState({ isMenuOpened: opened }, () => {
      if (onMenuToggle) onMenuToggle(opened)
    })
  }

  handleSearchOpen(opened) {
    const { onSearchToggle } = this.props

    this.setState({ isSearchOpened: opened }, () => {
      if (onSearchToggle) onSearchToggle(opened)
    })
  }

  async logout() {
    const {logout} = this.props
    await logout()
  }

  render() {
    const {
      className,
      cartCount,
      menuInfo,
      menuItems,
      theme,
      isAuthenticated,
      searchItems,
      isSimpleSearch,
      searchSuggestions,
      onSearchSuggest,
      searchRecommendations,
      onRemoveRecommendation,
      isSearchLoading,
      searchRecommendationRemovingIds,
      onSearch,
    } = this.props
    const { isMenuOpened, isSearchOpened, active } = this.state

    return (
      <div className={clsx('header', className)}>
        <Container className="header__content py-10">
          <div className="header__controls">
            <ButtonHamburger
              onClick={() => this.handleMenuOpen(!isMenuOpened)}
              isOpened={isMenuOpened}
              theme={theme}
            />
            <SlideMenu
              theme={theme}
              direction="left"
              isOpen={isMenuOpened}
              onClose={() => this.handleMenuOpen(!isMenuOpened)}
            >
              <div className="pt-15 pl-10 pr-10">
                {menuInfo &&
                  menuInfo.categoryItems &&
                  menuInfo.categoryItems.map((item, index) => {
                    if (!item.role || 
                    (item.role&&item.role.includes('user')&&isAuthenticated)) {
                      return (
                        <CardCategory
                          key={index.toString()}
                          theme={theme}
                          className="header__theme mb-10"
                          image={{ src: item.image, title: item.name }}
                          name={item.name}
                          type="flexed"
                          fontSize="h2"
                          onClick={()=>window.location.href=item.link}
                        />
                      )
                    } 
                    return null
                  }
                )}
                {!isAuthenticated && (
                  <div>
                    <Button
                      className="header__loginbtn mt-20"
                      tag="a"
                      href="/login"
                      category="tertiary"
                      fw="bold"
                      theme={theme}
                    >
                      Log In
                    </Button>
                    <Button
                      className="mt-20"
                      tag="a"
                      href="/register"
                      fw="bold"
                      theme={theme}
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
                {isAuthenticated && (
                  <Button
                    className="mt-20"
                    tag="a"
                    onClick={this.logout}
                    fw="bold"
                    theme={theme}
                  >
                    Logout
                  </Button>
                )}
                <div className="mt-40 mb-40">
                  {isAuthenticated &&
                    menuInfo &&
                    menuInfo.linkItems &&
                    menuInfo.linkItems.map((item, index) => (
                      <div key={index.toString()}>
                        <Link
                          className="header__link"
                          to={item.link}
                        >
                          {item.name}
                        </Link>
                        <Divider />
                      </div>
                    ))}
                  {isAuthenticated && (
                  <TogglePannel
                    title="How can we help?"
                    onClick={() => this.setState({ active: !active })}
                    active={active}
                    icon="arrow-down"
                    mode="footer"
                  >
                    <div className="pl-10">
                      {menuItems &&
                      menuItems.map((item, index) => (
                        <a
                          key={index.toString()}
                          className="header__sublink"
                          href={item.href}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </TogglePannel>
)}
                </div>
              </div>
            </SlideMenu>
            <Link to="/"><Logo size="large" className="ml-15" /></Link>
          </div>
          <div className="header__controls">
            <Link to="/cart_list">
              <ButtonIcon icon="cart" badge={cartCount} theme={theme} />
            </Link>
            <ButtonIcon
              className="ml-15"
              icon="search"
              onClick={() => this.handleSearchOpen(!isSearchOpened)}
              isActive={isSearchOpened}
              theme={theme}
            />
          </div>
        </Container>
        <Portal>
          <div
            className={clsx('header__search', {
              'header__search--opened': isSearchOpened,
            })}
          >
            {isSimpleSearch ? (
              <>
                <Searchbar
                  isFocused={isSearchOpened}
                  onClose={() => this.handleSearchOpen(false)}
                  onSearch={onSearch}
                  isLoading={isSearchLoading}
                />
                <div className="header__search-new-in">
                  <SearchNewIn className="pt-30" items={searchItems} />
                </div>
              </>
            ) : (
              <SearchOverlay
                isSearchbarFocused={isSearchOpened}
                className="header__search-overlay pt-30"
                suggestions={searchSuggestions}
                onSuggest={onSearchSuggest}
                onSearch={onSearch}
                recommendations={searchRecommendations}
                onRemoveRecommendation={onRemoveRecommendation}
                isSearchLoading={isSearchLoading}
                recommendationRemovingIds={searchRecommendationRemovingIds}
                onClose={() => this.handleSearchOpen(false)}
              />
            )}
          </div>
        </Portal>
      </div>
    )
  }
}

Header.defaultProps = {
  className: '',
  menuInfo: null,
  menuItems: null,
  cartCount: null,
  onSearchToggle: null,
  onMenuToggle: null,
  isAuthenticated: false,
  theme: null,
  logout: null,

  onSearch: null,
  isSearchLoading: false,
  searchItems: null,
  isSimpleSearch: false,
  searchSuggestions: null,
  searchRecommendations: null,
  onSearchSuggest: null,
  onRemoveRecommendation: null,
  searchRecommendationRemovingIds: [],
}

Header.propTypes = {
  className: PropTypes.string,
  cartCount: PropTypes.number,
  menuInfo: PropTypes.shape({
    categoryItems: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
    linkItems: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
  }),
  menuItems: PropTypes.array,
  onSearchToggle: PropTypes.func,
  onMenuToggle: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  logout: PropTypes.func,
  // Search props
  onSearch: PropTypes.func,
  searchItems: PropTypes.array,
  isSearchLoading: PropTypes.bool,
  isSimpleSearch: PropTypes.bool,
  searchSuggestions: PropTypes.array,
  searchRecommendations: PropTypes.array,
  onSearchSuggest: PropTypes.func,
  onRemoveRecommendation: PropTypes.func,
  searchRecommendationRemovingIds: PropTypes.array,
}

export default Header
