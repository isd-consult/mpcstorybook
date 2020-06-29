import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionPopularBrands.scss'
import Text from 'components/atoms/common/Text'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Icon from 'components/atoms/common/Icon'
import Title from 'components/molecules/texts/Title'
import StringUtils from 'utils/StringUtils'
import noimage from 'assets/images/noimage.png'

class SectionPopularBrands extends Component {
  render () {
    const {
      className,
      title,
      items,
      onAddBrand
    } = this.props

    const DIV = `div`
    return (
      <div
        className={clsx(
          'section-popular-brands',
          className
        )}
      >
        <Title
          title={title}
          mode='account'
        />
        <Row>
          {
            items&&items.map((item, index)=>(
              <Col key={index.toString()} xs={4}>
                <DIV style={{textAlign:'center'}}>
                  <img 
                    className="section-popular-brands__image"
                    src={StringUtils.getThumbnail(item.image.src)}
                    alt={item.image.title}
                    onError={
                      (e)=>{
                        e.target.onerror = null 
                        e.target.src = noimage
                      }
                    }
                  />
                  <DIV
                    className="section-popular-brands__addbtn"
                    onClick={()=>onAddBrand(item.name)}
                  >
                    <Icon
                      className="section-popular-brands__plusicon"
                      name="plus"
                      size={6}
                    />
                    <Text className="mt-5" size="small">Add</Text>
                  </DIV>
                </DIV>
              </Col>
            ))
          }
        </Row>
      </div>
    )
  }
}

SectionPopularBrands.defaultProps = {
  className: '',
  title: null,
  items: null,
  onAddBrand: null
}

SectionPopularBrands.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
  onAddBrand: PropTypes.func
}

export default SectionPopularBrands
