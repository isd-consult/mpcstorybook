import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import Fbucks from 'components/templates/credit/Fbucks'
import Transition from 'containers/Transition'

import {
  getTierList,
} from 'redux/modules/fbucks/actions'

class FbucksPage extends Component {

  componentDidMount() {
    const {getTiers} = this.props
    getTiers()
  }

  render() {
    const {
      theme,
      tierList,
      ...others
    } = this.props

    return (
      <Transition>
        <Fbucks
          theme={theme}
          menuInfo={menuInfo}
          tierList={tierList}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    tierList: state.fbucks.tierList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTiers: () =>  dispatch(getTierList()),
  }
}

FbucksPage.defaultProps = {
  theme: null,
  tierList: null,
  getTiers: null
}

FbucksPage.propTypes = {
  tierList: PropTypes.array,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  getTiers: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FbucksPage)