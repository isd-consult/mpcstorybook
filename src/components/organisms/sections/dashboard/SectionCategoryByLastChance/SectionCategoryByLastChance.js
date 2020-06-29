import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionCategoryByLastChance.scss'

import CardCategory from 'components/molecules/cards/CardCategory'
import Title from 'components/molecules/texts/Title'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Button from 'components/molecules/buttons/Button'

class SectionCategoryByLastChance extends Component {
  render() {
    const {
      className,
      items,
      itemsType,
      link,
      title,
      subtitle,
      titleCategory,
      bgColor,
      theme
    } = this.props
    const isLink = link && link.href && link.text
    return (
      items && (
      <div
        className={clsx(
          'section-category pb-40 pt-40',
          { [`section-category--${bgColor}`]: bgColor },
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
            {items.map((item, i) => (
              <Col isAutoWidth key={i.toString()}>
                <CardCategory
                  name={item.name}
                  image={item.image}
                  href={`/product_list?product_type=${item.name}`}
                  type={itemsType}
                  theme={theme}
                />
              </Col>
              ))}
          </Row>
          )}

          {isLink && (
          <Row className="mt-25">
            <Col xs={8} xsOffset={2} lg={4} lgOffset={4}>
              <Button
                fw="light"
                tag="a"
                href={link.href}
                category="secondary"
                theme={theme}
              >
                {link.text}
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

SectionCategoryByLastChance.defaultProps = {
  className: '',
  link: {
    href: '',
    text: '',
  },
  items: null,
  title: '',
  subtitle: '',
  itemsType: null,
  titleCategory: null,
  bgColor: null,
  theme: null,
}

SectionCategoryByLastChance.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        src: PropTypes.string,
        title: PropTypes.string,
      }),
      name: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
  itemsType: PropTypes.oneOf([null, 'rounded', 'small', 'flexed']),
  link: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleCategory: PropTypes.oneOf([null, 'secondary', 'tertiary', 'quinary']),
  bgColor: PropTypes.oneOf([null, 'wildsand']),
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionCategoryByLastChance
