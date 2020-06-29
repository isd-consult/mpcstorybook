import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Footer.scss'

import Text from 'components/atoms/common/Text'
import Container from 'components/atoms/layout/Container'
import Icon from 'components/atoms/common/Icon'
import Link from 'components/atoms/common/Link'
import Divider from 'components/atoms/common/Divider'
import TogglePannel from 'components/molecules/panels/TogglePannel'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { className, menuItems, isAuthenticated } = this.props
    const { active } = this.state
    return (
      <div className={clsx('footer pt-20 pb-20', className)}>
        <Container>
          {isAuthenticated ? (
            <Link className="p-15" to="/accounts" label="My Account" />
          ) : (
            <Link className="p-15" to="/login" label="Login / Register" />
          )}
          <Divider />
          <Link className="p-15" to="/orders/list" label="Track Order" />
          <Divider />
          <TogglePannel
            title="How can we help?"
            onClick={() => this.setState({ active: !active })}
            active={active}
            icon="arrow-down"
            mode="footer"
          >
            {menuItems &&
              menuItems.map((item, index) => (
                <Link
                  key={index.toString()}
                  className="py-10 px-30"
                  to={item.href}
                  label={item.name}
                />
              ))}
          </TogglePannel>
          <Divider />
          <div className="footer__cards mt-10 pr-15 pl-15">
            <div className="footer__cards">
              <Icon className="mr-10" name="visa" height={9} />
              <Icon className="mr-10" name="mastercard" height={22} />
              <Icon className="mr-10" name="american-express" height={12} />
            </div>
            <Icon name="security" size={20} />
          </div>
          <div>
            <div className="footer__bottom mt-10 pr-15 pl-15">
              <Link
                to="/policy/terms_and_conditions"
                label="Terms & Conditions"
              />
              <span>&nbsp;|&nbsp;</span>
              <Link
                to="/policy/privacy_policy"
                label="Privacy"
              />
              <span>&nbsp;|&nbsp;</span>
              <Link
                to="/policy/returns_policy"
                label="Returns"
              />
            </div>
            <Text className="footer__bottom mt-5">
              Fixel &copy; 2020
            </Text>
          </div>
        </Container>
      </div>
    )
  }
}

Footer.defaultProps = {
  className: '',
  menuItems: [],
  isAuthenticated: false,
}

Footer.propTypes = {
  className: PropTypes.string,
  menuItems: PropTypes.array,
  isAuthenticated: PropTypes.bool,
}

export default Footer
