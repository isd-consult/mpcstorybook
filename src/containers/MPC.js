/* eslint-disable func-names */
import React, { Component }
 from 'react'
import { connect } from 'react-redux'
import config from 'config'

import PropTypes from 'prop-types'
import clsx from 'clsx'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Router, Route } from 'react-router-dom'
import Routes from 'routes'
import Notification from 'components/organisms/common/Notification'
import 'transition.scss'
import { initializeGA } from 'analytics'

// actions
import {
  getSuggestions,
  deleteRecommendation,
  getSearchData,
  search,
} from 'redux/modules/search/actions'

import { checkSession, signOut } from 'redux/modules/auth/actions'
import { init } from 'redux/modules/mpc/actions'
import { history } from '../redux'

function getPathDepth(location) {
  return (location || {}).pathname.split('/').length
}

function loadFacebookSDK() {
  window.fbAsyncInit = function() {
    window.FB.init({
      appId: config.social.FACEBOOK_APP_ID,
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v3.1',
    })
  }

  ;(function(d, s, id) {
    const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    const js = d.createElement(s)
    js.id = id
    js.src = 'https://connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
  })(document, 'script', 'facebook-jssdk')
}

function loadGoogleSDK() {
  window.googleSDKLoaded = () => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: config.social.GOOGLE_CLIENT_ID,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email',
      })
    })
  }

  ;(function(d, s, id) {
    const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    const js = d.createElement(s)
    js.id = id
    js.src = 'https://apis.google.com/js/api.js?onload=googleSDKLoaded'
    fjs.parentNode.insertBefore(js, fjs)
  })(document, 'script', 'google-jssdk')
}

class MPC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prevDepth: getPathDepth(props.location),
    }
  }

  async componentDidMount() {
    const { initialize, checkCurrentSession } = this.props
    loadFacebookSDK()
    loadGoogleSDK()
    initializeGA()
    if (checkCurrentSession) await checkCurrentSession()
    if (initialize) await initialize()
    this.fetchSearchResults()
  }

  async componentDidUpdate(prevProps) {
    const { initialize } = this.props
    const { location: prevLocation } = prevProps
    const { location: nextLocation } = this.props

    if (prevLocation !== nextLocation) {
      if (initialize) await initialize()
      this.fetchSearchResults()
    }
  }

  changePrevDepth() {
    const { location } = this.props
    this.setState({ prevDepth: getPathDepth(location) })
  }

  fetchSearchResults() {
    const { isAuthPage, searchGetData, searchLoaded } = this.props
    if (!isAuthPage && !searchLoaded) {
      searchGetData()
    }
  }

  render() {
    const {
      // auth
      user,
      isAuthenticated,
      isAuthenticating,
      logout,
      // mpc
      theme,
      // cart
      cartCount,
      // search
      onSearch,
      searchLoading,
      searchRecommendations,
      searchNewItems,
      searchSuggestions,
      searchDeleteRecommendation,
      searchGetSuggestions,
      notification,
      searchRecommendationRemovingIds,
      isSimpleSearch,
      isAuthPage,
      ...rest
    } = this.props

    const childProps = {
      // auth
      user,
      isAuthenticated,
      logout,
      // mpc
      theme,
      cartCount,
      // search
      onSearch,
      onRemoveRecommendation: searchDeleteRecommendation,
      onSearchSuggest: searchGetSuggestions,
      searchRecommendations,
      searchSuggestions,
      isSearchLoading: searchLoading,
      searchItems: searchNewItems,
      isSimpleSearch,
      isAuthPage,
      searchRecommendationRemovingIds,
    }
    const { prevDepth } = this.state

    return (
      !isAuthenticating && (
        <Router history={history}>
          <Route
            render={({ location }) => {
              return (
                <TransitionGroup>
                  <CSSTransition
                    key={location.pathname}
                    classNames={clsx(
                      'page',
                      getPathDepth(location) - prevDepth
                        ? 'page--left'
                        : 'page--right',
                    )}
                    timeout={{
                      enter: 500,
                      exit: 500,
                    }}
                  >
                    <Route location={location}>
                      <Routes
                        childProps={{
                          ...childProps,
                          ...rest,
                        }}
                      />
                    </Route>
                  </CSSTransition>
                </TransitionGroup>
              )
            }}
          />
          <Notification notification={notification} />
        </Router>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    // Auth
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    isAuthenticating: state.auth.isAuthenticating,

    // Search
    searchLoading: state.search.loading,
    searchRecommendations: state.search.recommendations,
    searchRecommendationRemovingIds: state.search.recommendationRemovingIds,
    searchNewItems: state.search.newItems,
    searchSuggestions: state.search.suggestions,
    searchLoaded: state.search.loaded,

    // Mpc
    theme: state.mpc.theme,
    notification: state.mpc.notification,
    isSimpleSearch: state.mpc.isSimpleSearch,
    isAuthPage: state.mpc.isAuthPage,
    location: state.router.location,

    // Cart
    cartCount: state.cart.cartCount,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // Auth
    checkCurrentSession: () => dispatch(checkSession()),
    logout: () => dispatch(signOut()),
    // Search
    searchGetSuggestions: query => dispatch(getSuggestions(query)),
    searchDeleteRecommendation: name => dispatch(deleteRecommendation(name)),
    searchGetData: () => dispatch(getSearchData()),
    onSearch: (query, url) => dispatch(search(query, url)),
    // Mpc
    initialize: () => dispatch(init()),
  }
}

MPC.propTypes = {
  // Auth
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  isAuthenticating: PropTypes.bool,
  checkCurrentSession: PropTypes.func,
  logout: PropTypes.func,

  // Search module
  searchLoading: PropTypes.bool,
  searchRecommendations: PropTypes.array,
  searchNewItems: PropTypes.array,
  searchSuggestions: PropTypes.array,
  searchRecommendationRemovingIds: PropTypes.array,
  onSearch: PropTypes.func,
  searchDeleteRecommendation: PropTypes.func,
  searchGetSuggestions: PropTypes.func,
  searchGetData: PropTypes.func,
  searchLoaded: PropTypes.bool,

  // MPC
  notification: PropTypes.object,
  initialize: PropTypes.func,
  isSimpleSearch: PropTypes.bool,
  isAuthPage: PropTypes.bool,
  theme: PropTypes.string,

  // Cart
  cartCount: PropTypes.number,

  // Router
  location: PropTypes.object,
}

MPC.defaultProps = {
  // Auth
  user: null,
  isAuthenticated: false,
  isAuthenticating: false,
  checkCurrentSession: PropTypes.func,
  logout: PropTypes.func,

  // Search module
  searchLoading: false,
  searchRecommendations: null,
  searchRecommendationRemovingIds: null,
  searchNewItems: null,
  searchSuggestions: null,
  onSearch: null,
  searchDeleteRecommendation: null,
  searchGetSuggestions: null,
  searchGetData: null,
  searchLoaded: false,

  // MPC
  notification: {},
  initialize: null,
  isSimpleSearch: false,
  isAuthPage: false,
  theme: null,

  // Cart
  cartCount: 0,

  // Router
  location: {},
}

export default connect(mapStateToProps, mapDispatchToProps)(MPC)
