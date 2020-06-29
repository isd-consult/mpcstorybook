import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import Credit from 'components/templates/credit/Credit'
import Transition from 'containers/Transition'

import {
  getFbucksInfo,
} from 'redux/modules/fbucks/actions'


class CreditPage extends Component {

  componentDidMount() {
    const {fetchFbucksInfo} = this.props
    fetchFbucksInfo()
  }

  render() {
    const {
      theme,
      fbucksInfo,
      ...others
    } = this.props

    return (
      <Transition>
        <Credit
          theme={theme}
          menuInfo={menuInfo}
          fbucksInfo={fbucksInfo}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    fbucksInfo: state.fbucks.fbucksInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFbucksInfo: () =>  dispatch(getFbucksInfo()),
  }
}

CreditPage.defaultProps = {
  fbucksInfo: null,
  fetchFbucksInfo: null,
  theme: null,  
}

CreditPage.propTypes = {
  fbucksInfo: PropTypes.object,
  fetchFbucksInfo: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreditPage)