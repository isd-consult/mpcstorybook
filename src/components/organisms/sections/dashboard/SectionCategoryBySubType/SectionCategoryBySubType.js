import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionCategoryBySubType.scss'

import CardCategory from 'components/molecules/cards/CardCategory'
import Title from 'components/molecules/texts/Title'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Button from 'components/molecules/buttons/Button'
import StringUtils from 'utils/StringUtils'

class SectionCategoryBySubType extends Component {
  render() {
    const {
      className,
      data,
      itemsType,
      titleCategory,
      bgColor,
      theme
    } = this.props

    const items = data && data.sub_types
    const productTypeName = 
      data && data.product_type && data.product_type.product_type_name
    
    const title = productTypeName && `Shop ${productTypeName} by type`
    const subtitle = 
      productTypeName && `${productTypeName} personalized for you`
    const btntitle = productTypeName && `Shop all ${productTypeName}`
    const href = 
      productTypeName && `/product_list?product_type=${productTypeName}`
    
    return (
      data && (
      <div
        className={clsx(
          'section-category-by-subtype pb-40 pt-40',
          { [`section-category-by-subtype--${bgColor}`]: bgColor },
          className,
        )}
      >
        <Container>
          <Title
            className="mb-25"
            title={title}
            subtitle={subtitle}
            category={titleCategory}
            theme={theme}
          />

          {items && (
          <Row isNoWrap className="mt-25">
            {items.map((item, i) => {
                const subhref = item.product_type_name && 
                  `/product_list?product_type=`
                  + `${StringUtils.replace(productTypeName, " & ", "^")}`
                  + `&product_sub_type=`
                  + `${StringUtils.replace(item.product_type_name," & ", "^")}`
                return (
                  <Col isAutoWidth key={i.toString()}>
                    <CardCategory
                      name={item.product_type_name}
                      image={item.image}
                      href={subhref}
                      type={itemsType}
                      theme={theme}
                    />
                  </Col>
                )
              })}
          </Row>
          )}

          {href && (
          <Row className="mt-25">
            <Col xs={8} xsOffset={2} lg={4} lgOffset={4}>
              <Button
                fw="light"
                tag="a"
                href={href}
                category="secondary"
                theme={theme}
              >
                {btntitle}
              </Button>
            </Col>
          </Row>
          )}
        </Container>
      </div>
)
    )
  }
}

SectionCategoryBySubType.defaultProps = {
  className: '',
  data: null,
  itemsType: null,
  titleCategory: null,
  bgColor: null,
  theme: null,
}

SectionCategoryBySubType.propTypes = {
  className: PropTypes.string,
  itemsType: PropTypes.oneOf([null, 'rounded', 'small', 'flexed']),
  data: PropTypes.shape({
    product_type: PropTypes.object,
    sub_types: PropTypes.array
  }),
  titleCategory: PropTypes.oneOf([null, 'secondary', 'tertiary', 'quinary']),
  bgColor: PropTypes.oneOf([null, 'wildsand']),
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionCategoryBySubType
