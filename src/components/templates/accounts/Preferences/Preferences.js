import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Preferences.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionPreferences
  from 'components/organisms/sections/accounts/SectionPreferences'

class Preferences extends Component {
  render () {
    const {
      theme,
      preferencesInfo,
      onSavePreferences,
      ...others
    } = this.props

    return (
      <BaseLayout
        theme={theme}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title="My Communication Preferences"
            link="Back to My Account"
            href="/accounts/closet"
            description={"Please indicate how often you would like to "
            +"be notified on new products, promotions and sales."}
          />
          <SectionPreferences
            preferencesInfo={preferencesInfo}
            onSave={onSavePreferences}
            theme={theme}
          />
        </Container>
      </BaseLayout>
    )
  }
}

Preferences.defaultProps = {
  theme: null,
  preferencesInfo: null,
  onSavePreferences: null,
}

Preferences.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  preferencesInfo: PropTypes.object,
  onSavePreferences: PropTypes.func
}

export default Preferences
