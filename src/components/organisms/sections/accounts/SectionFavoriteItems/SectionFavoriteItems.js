import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionFavoriteItems.scss'
import Title from 'components/molecules/texts/Title'
import CardOption from 'components/molecules/cards/CardOption'
import Text from 'components/atoms/common/Text'

class SectionFavoriteItems extends Component {
  render () {
    const {
      className,
      title,
      link,
      data,
      placeholder,
      theme,
    } = this.props

    return (
      <div
        className={clsx(
          'section-favorite-items',
          className
        )}
      >
        <Title
          title={title}
          link={link}
          mode="account"
          theme={theme}
        />
        {
          data 
            ? Object.keys(data).map((key, index)=>(
              <div key={index.toString()}>
                <Text size="small" fw="light" className="mt-15 mb-5">
                  {key}
                </Text>
                {
                  data[key].map((item, jndex)=>(
                    <CardOption
                      key={jndex.toString()}
                      className="mr-5 mb-5"
                      label={item}
                      mode="grey"
                    />
                  ))
                }
              </div>
            ))
            :<Text className="mt-20">{placeholder}</Text>
        }
      </div>
    )
  }
}

SectionFavoriteItems.defaultProps = {
  className: '',
  title: '',
  link: null,
  data: null,
  placeholder: null,
  theme: null
}

SectionFavoriteItems.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.object,
  data: PropTypes.object,
  placeholder: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default SectionFavoriteItems
