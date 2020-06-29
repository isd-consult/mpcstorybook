import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionCategory.scss'

import CardCategory from 'components/molecules/cards/CardCategory'
import Title from 'components/molecules/texts/Title'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Button from 'components/molecules/buttons/Button'
import StringUtils from 'utils/StringUtils'

class SectionCategory extends Component {
  render() {
    const {
      className,
      topItems,
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
            'section-category pb-40 mt-20',
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
            {topItems && (
              <Row className="section-category--center" isNoWrap>
                {topItems.map((item, i) => (
                  <Col isAutoWidth key={i.toString()}>
                    <CardCategory
                      name={item && StringUtils.toCamelCase(item.name)}
                      image={item && item.image}
                      href={`/product_list?product_type=${StringUtils.replace(
                        item.product_type_name,
                        ' & ',
                        ' %26 ',
                      )}&gender=${item.gender_name ? item.gender_name : ''}`}
                      fontSize="xl"
                      theme={theme}
                    />
                  </Col>
                ))}
              </Row>
            )}

            {items && (
              <Row isNoWrap className="section-category--center mt-25">
                {items.map((item, i) => (
                  <Col isAutoWidth key={i.toString()}>
                    <CardCategory
                      name={item && StringUtils.toCamelCase(item.name)}
                      image={item && item.image}
                      href={
                        `/product_list?product_type=` +
                        `${StringUtils.replace(
                          item.product_type_name,
                          ' & ',
                          '^',
                        )}` +
                        `&gender=${item.gender_name ? item.gender_name : ''}`
                      }
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

SectionCategory.defaultProps = {
  className: '',
  topItems: null,
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

SectionCategory.propTypes = {
  className: PropTypes.string,
  topItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        src: PropTypes.string,
        title: PropTypes.string,
      }),
      name: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
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

export default SectionCategory
