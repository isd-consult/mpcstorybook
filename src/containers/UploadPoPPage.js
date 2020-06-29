import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import UploadPoP from 'components/templates/checkout/UploadPoP'
import { 
  uploadPoPFile 
} from 'redux/modules/uploadpop/actions'
import Transition from 'containers/Transition'

class UploadPoPPage extends Component {

  render() {
    const {
      theme,
      _uploadPoPFile,
      step,
      match,
      ...others
    } = this.props
    const {orderNumber} = match.params
    return (
      <Transition>
        <UploadPoP
          theme={theme}
          menuInfo={menuInfo}
          uploadPoPFile={_uploadPoPFile}
          step={step}
          orderNumber={orderNumber}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    step: state.uploadpop.step,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    _uploadPoPFile: (fileContent, orderNumber) =>
      dispatch(uploadPoPFile(fileContent, orderNumber))
  }
}

UploadPoPPage.defaultProps = {
  theme: null,
  _uploadPoPFile: null,
  step: 0,
  match: null,
}

UploadPoPPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  _uploadPoPFile: PropTypes.func,
  step: PropTypes.number,
  match: PropTypes.object,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadPoPPage)