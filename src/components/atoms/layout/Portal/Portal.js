import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Portal extends Component {
  render() {
    const { mountNode, disabledPortal, children } = this.props

    if (disabledPortal) {
      return children
    }

    return ReactDOM.createPortal(children, mountNode)
  }
}

Portal.defaultProps = {
  mountNode: document.querySelector('body'),
  children: null,
  disabledPortal: false,
}

Portal.propTypes = {
  children: PropTypes.node,
  disabledPortal: PropTypes.bool,
  mountNode: PropTypes.object,
}

export default Portal
