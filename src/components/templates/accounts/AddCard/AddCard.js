import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './AddCard.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'

import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionAddCard
  from 'components/organisms/sections/accounts/SectionAddCard'

class AddCard extends Component {
  render () {
    const {
      theme,
      addCard,
      addCardApproval,
      ...others
    } = this.props

    return (
      <BaseLayout
        theme={theme}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title="Add New Card"
          />
          <SectionAddCard
            theme={theme}
            addCard={addCard}
            addCardApproval={addCardApproval}
          />
        </Container>
      </BaseLayout>
    )
  }
}

AddCard.defaultProps = {
  className: '',
  theme: null,
  addCard: null,
  addCardApproval: null
}

AddCard.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  addCard: PropTypes.func,
  addCardApproval: PropTypes.object
}

export default AddCard
