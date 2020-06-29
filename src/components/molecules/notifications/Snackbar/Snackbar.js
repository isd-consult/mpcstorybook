import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Snackbar.scss'
import Text from 'components/atoms/common/Text'
import Icon from 'components/atoms/common/Icon'

class Snackbar extends Component {
  constructor(props) {
    super(props)
    this.state = {show: true}
    this.close = this.close.bind(this)
  }

  componentDidMount() {
    this.setState({show:true})
    setTimeout(this.close, 6000)
  }

  close() {
    this.setState({show:false})
  }

  render () {
    const {
      className,
      message,
      status
    } = this.props

    const {
      show
    } = this.state

    return (
      <div
        className={clsx(
          'snackbar',
          {
            [`snackbar--${status}`]: status,
            'snackbar--show': show
          },
          className
        )}
      >
        <Icon
          className="snackbar__icon mr-10"
          name={clsx({
            'checkmark':status==='success' || !status,
            'warning':status==='warning' || status==='error'
          })}
          size={12}
        />
        <Text color="white">{message}</Text>
      </div>
    )
  }
}

Snackbar.defaultProps = {
  className: '',
  message: '',
  status: null,
}

Snackbar.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  status: PropTypes.oneOf([null, 'success', 'warning', 'error']),
}

export default Snackbar
