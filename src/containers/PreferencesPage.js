import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import Preferences from 'components/templates/accounts/Preferences'
import Transition from 'containers/Transition'
import { getPreferences, savePreferences } from 'redux/modules/mpc/actions'

class PreferencesPage extends Component {

  componentDidMount() {
    const {getPreferencesInfo} = this.props
    getPreferencesInfo()    
  }

  render() {
    const {
      preferences,
      savePreferencesInfo,
      ...others
    } = this.props

    return (
      <Transition>
        <Preferences
          menuInfo={menuInfo}
          preferencesInfo={preferences}
          onSavePreferences={savePreferencesInfo}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.mpc.isLoading,
    preferences: state.mpc.preferences
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getPreferencesInfo:() => dispatch(getPreferences()),
    savePreferencesInfo:(data) => dispatch(savePreferences(data))
  }
}

PreferencesPage.defaultProps = {
  isLoading: false,
  preferences: null,
  getPreferencesInfo: null,
  savePreferencesInfo: null,
}
PreferencesPage.propTypes = {
  isLoading: PropTypes.bool,
  preferences: PropTypes.object,
  getPreferencesInfo: PropTypes.func,
  savePreferencesInfo: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PreferencesPage)