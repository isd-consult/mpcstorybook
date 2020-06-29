import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionHead.scss'

import CardUpdates from 'components/molecules/cards/CardUpdates'
import MainBanner from 'components/molecules/banners/MainBanner'
import Container from 'components/atoms/layout/Container'
import Text from 'components/atoms/common/Text'
import Button from 'components/molecules/buttons/Button'

class SectionHead extends Component {
  render() {
    const {
      className,
      closeMessage,
      bannerList,
      messages,
      isQuestions,
      theme
    } = this.props
    return (
      <div
        className={clsx('section-head', className)}
      >
        {isQuestions && (
        <Button
          className='section-head__questions'
          icon="arrow"
          href="/questions"
          tag="a"
        >
          <Text size="xxl">
            Personalise your experience
          </Text>
        </Button>
)}
        <MainBanner items={bannerList} theme={theme} />
        <Container>
          {
            messages && messages.length > 0 && (
            <CardUpdates
              className="section-head__updates"
              heading={messages[0].title}
              message={messages[0].text}
              onButtonClick={
                ()=>closeMessage(messages[0].id)
              }
              theme={theme}
            />
)}
        </Container>
      </div>
    )
  }
}

SectionHead.defaultProps = {
  className: '',
  isQuestions: false,
  bannerList: null,
  messages: null,
  closeMessage: null,
  theme: null,
}

SectionHead.propTypes = {
  className: PropTypes.string,
  isQuestions: PropTypes.bool,
  bannerList: PropTypes.array,
  messages: PropTypes.array,
  closeMessage: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionHead
