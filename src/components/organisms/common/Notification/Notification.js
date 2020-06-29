import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Snackbar from 'components/molecules/notifications/SnackbarNew'

class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
      category: null,
      message: '',
      duration: 5000,
      position: 'bottom',
    }
  }

  componentDidMount() {
    const {
      notification: { message },
    } = this.props

    if (message) {
      this.showNotification(this.props)
    }
  }

  componentDidUpdate(prevProps) {
    const { notification: prevNotification } = prevProps
    const { notification: nextNotification } = this.props

    if (prevNotification !== nextNotification) {
      this.showNotification(nextNotification)
    }
  }

  showNotification(notification) {
    const { category, duration, message, icon, position } = notification

    this.setState({
      opened: !!message,
      category,
      duration: duration || 5000,
      message,
      icon,
      position: position || 'bottom',
    })
  }

  render() {
    const { opened, duration, category, message, icon, position } = this.state

    return (
      <Snackbar
        open={opened}
        autoHideDuration={duration}
        position={position}
        category={category}
        icon={icon}
        onClose={() => this.setState({ opened: false, category: null })}
      >
        {message ? (
          // eslint-disable-next-line react/no-danger
          <span dangerouslySetInnerHTML={{ __html: message }} />
        ) : (
          '...'
        )}
      </Snackbar>
    )
  }
}

Notification.defaultProps = {
  notification: {
    category: null,
    message: null,
    duration: 3000,
    icon: '',
  },
}

Notification.propTypes = {
  notification: PropTypes.shape({
    category: PropTypes.string,
    message: PropTypes.any,
    duration: PropTypes.number,
    icon: PropTypes.string,
    position: PropTypes.oneOf(['bottom', 'top']),
  }),
}

export default Notification
