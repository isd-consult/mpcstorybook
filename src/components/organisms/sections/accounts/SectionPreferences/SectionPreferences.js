import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionPreferences.scss'
import Text from 'components/atoms/common/Text'
import Button from 'components/molecules/buttons/Button'
import Block from 'components/molecules/wrapers/Block'
import RangeSlider from 'components/atoms/temp/RangeSlider'

const items = ['None', 'Very Little', 'Less', 'Normal']
class SectionPreferences extends Component {
  constructor(props) {
    super(props)
    this.state = {preferencesInfo: null}
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange(name, value) {
    const {preferencesInfo} = this.state
    this.setState({
      preferencesInfo: {
        ...preferencesInfo,
        [name]: value
      }
    })
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.preferencesInfo && 
      state.preferencesInfo !== props.preferencesInfo) {
      return {preferencesInfo: props.preferencesInfo}
    } return null
  }

  async onSave() {
    const {onSave} = this.props
    const {preferencesInfo}  = this.state
    if (onSave) {
      this.setState({isLoading: true})
      await onSave(preferencesInfo)
      this.setState({isLoading: false})
    }
  }

  render () {
    const {
      className,
      theme
    } = this.props
    const {isLoading, preferencesInfo} = this.state

    return (
      <div
        className={clsx(
          'section-preferences',
          className
        )}
      >
        <Block className="pt-15 pr-15 pb-15 pl-15">
          <Text fw='bold' size='xl'>
            On Site Pop-ups
          </Text>
          <Text size="normal" color="grey">
            Frequency of pop-ups
          </Text>
          <RangeSlider
            className="mt-20"
            category="secondary"
            items={items}
            value={
              preferencesInfo 
              ? preferencesInfo.on_site_popups
              : "None"
            }
            name="on_site_popups"
            onChange={this.onChange}
          />
        </Block>
        <Block className="mt-20 pt-15 pr-15 pb-15 pl-15">
          <Text fw='bold' size='xl'>
            Email
          </Text>
          <Text size="normal" color="grey">
            Frequency of emails
          </Text>
          <RangeSlider
            className="mt-20"
            category="secondary"
            items={items}
            value={
              preferencesInfo 
              ? preferencesInfo.emails
              : "None"
            }
            name="emails"
            onChange={this.onChange}
          />
        </Block>
        <Block className="mt-20 pt-15 pr-15 pb-15 pl-15">
          <Text fw='bold' size='xl'>
            Off Site Notifications
          </Text>
          <Text size="normal" color="grey">
            Frequency of off site notifications
          </Text>
          <RangeSlider
            className="mt-20"
            category="secondary"
            items={items}
            value={
              preferencesInfo 
              ? preferencesInfo.off_site_notifications
              : "None"
            }
            name="off_site_notifications"
            onChange={this.onChange}
          />
        </Block>
        <Button
          className="section-preferences__savebtn"
          theme={theme}
          onClick={this.onSave}
          isLoading={isLoading}
          isCentered
        >
          SAVE
        </Button>
      </div>
    )
  }
}

SectionPreferences.defaultProps = {
  className: '',
  theme: null,
  onSave: null
}

SectionPreferences.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  onSave: PropTypes.func
}

export default SectionPreferences
