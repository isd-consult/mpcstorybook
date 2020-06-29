import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './BannerItem.scss'

import Text from 'components/atoms/common/Text'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Button from 'components/molecules/buttons/Button'

class BannerItem extends Component {
  
  constructor(props){
    super(props)
    this.gotoUrl = this.gotoUrl.bind(this)
  }

  gotoUrl() {
    const {url} = this.props
    if ( url != null ){
      window.location = url
    }  
  }

  render() {
    const { 
      className
      , title
      , backgroundImage
      , heading
      , subheading
      , buttons
      , status
      , theme
    } = this.props

    return (
      <div
        className={clsx(
          'banner-item mb-40'
          , {[`banner-item--${status}`]: status}
          , className)}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        onClick={this.gotoUrl}
        onKeyDown={this.gotoUrl}
        role="button"
        tabIndex="0"
      >
        <Container>
          <Text
            className="banner-item__title mb-15"
            color="white"
            isUppercase
          >
            {title}
          </Text>
          <div className="banner-item__separator mb-10" />
          <div>
            <Text
              className="banner-item__heading mb-10"
              color="white"
              tag="h1"
              fw="heavy"
            >
              {heading}
            </Text>
          </div>
          <Text
            className="banner-item__subtitle mb-30"
            color="white"
            size="xxl"
            fw="medium"
          >
            {subheading}
          </Text>
          <Row>
            {buttons.length > 0 && (
            <Col xs={6} sm={4} lg={3}>
              <Button
                className="banner-item__button1"
                tag="a"
                href={buttons[0].url}
                icon="arrow"
                fw="bold"
                theme={theme}
                backgroundColor={buttons[0].colour}
              >
                {buttons[0].text}
              </Button>
            </Col>
)}
            {buttons.length > 1 && (
            <Col xs={6} sm={4} lg={3}>
              <Button
                className="banner-item__button2"
                tag="a"
                href={buttons[1].url} 
                icon="arrow"
                fw="bold"
                theme={theme}
                backgroundColor={buttons[1].colour}
              >
                {buttons[1].text}
              </Button>
            </Col>
)}
          </Row>
        </Container>
      </div>
    )
  }
}

BannerItem.defaultProps = {
  className: '',
  title: '',
  backgroundImage: '',
  heading: '',
  subheading: '',
  buttons: null,
  status: null,
  url: null,
  theme: null,
}

BannerItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  backgroundImage: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      colour: PropTypes.string,
      text: PropTypes.string,
      url: PropTypes.string
    })
  ),
  status: PropTypes.oneOf([null, 'previous', 'active', 'after']),
  url: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default BannerItem
