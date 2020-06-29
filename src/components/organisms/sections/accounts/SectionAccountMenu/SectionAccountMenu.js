import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionAccountMenu.scss'
import Text from 'components/atoms/common/Text'
import Container from 'components/atoms/layout/Container'
import {Link} from 'react-router-dom'
import Button from 'components/molecules/buttons/Button'
import Icon from 'components/atoms/common/Icon'
// import Snackbar from 'components/molecules/notifications/SnackbarNew'

class SectionAccountMenu extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  async logout() {
    const {logout} = this.props
    await logout()
  }

  render () {
    const {
      className,
      items
    } = this.props

    return (
      <div
        className={clsx(
          'section-account-menu',
          className
        )}
      >
        {/* <Snackbar
          className="section-account-menu__profile-percent"
          open
          position='top'
          disabledPortal
        >
          Profile 30% complete
        </Snackbar> */}
        <Container>
          {
            items && items.map((item, index)=>(
              <Link
                key={index.toString()}
                className="section-account-menu__link"
                to={item.href}
              >
                <div style={{display:'flex', alignItems:'center'}}>
                  <Icon name={item.lefticon} size={16} />
                  <Text className="ml-10" size='small'>{item.label}</Text>
                </div>
                <Icon name="arrow" size={10} />
              </Link>
            ))
          }
          <Button
            className="section-account-menu__logoutbtn mt-10 mb-10"
            onClick={this.logout}
          >
            LOG OUT
          </Button>
        </Container>
      </div>
    )
  }
}

SectionAccountMenu.defaultProps = {
  className: '',
  items: null,
  logout: null,
}

SectionAccountMenu.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  logout: PropTypes.func,
}

export default SectionAccountMenu
