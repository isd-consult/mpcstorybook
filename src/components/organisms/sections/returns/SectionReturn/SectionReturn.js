import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionReturn.scss'
import Text from 'components/atoms/common/Text'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Button from 'components/molecules/buttons/Button'
import Block from 'components/molecules/wrapers/Block'
import { Link } from 'react-router-dom'

class SectionReturn extends Component {
  render () {
    const {
      theme,
      className,
      data
    } = this.props

    return ( 
      <div
        className={clsx(
            'section-return',
            className
          )}
      >
        { data !== null && (
          <Block className="pt-20 pr-20 pb-20 pl-20">
            <div className='section-return__header'>
              <Row>
                <Col><Text>Return</Text></Col>
                <Col><Text>Date</Text></Col>
              </Row>
            </div>
            <div className='section-return__body'>
              <Row>
                <Col>
                  <Text className='section-return__text' fw='bold'>
                    {data.request_number}
                  </Text>
                </Col>
                <Col>
                  <Text className='section-return__text'>
                    {data.requested_at}
                  </Text>
                </Col>
              </Row>
            </div>
            <div className="section-return__status">
              <Row>
                <Col xs={4}><Text>Status</Text></Col>
                <Col xs={8}>
                  <Text className="section-return__status-text">
                    &#9679;&nbsp;&nbsp;
                    {data.status && data.status.label}
                  </Text>
                </Col>
              </Row>
            </div>
            <Link to={`/returns/detail/${data.request_number}`}>
              <Button
                className="mt-20"
                theme={theme}
                isSmall
              >
                VIEW RETURN
              </Button>
            </Link>
          </Block>
)}
      </div>

    )
  }
}

SectionReturn.defaultProps = {
  className: '',
  theme: null,
  data: null
}

SectionReturn.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionReturn
