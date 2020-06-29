import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Dashboard.scss'

import BaseLayout from 'components/layouts/BaseLayout'
import SectionHead
  from 'components/organisms/sections/dashboard/SectionHead'
import SectionCategory
  from 'components/organisms/sections/dashboard/SectionCategory'
import SectionPrice
  from 'components/organisms/sections/dashboard/SectionPrice'
import SectionNewItems
  from 'components/organisms/sections/dashboard/SectionNewItems'
import SectionBrandsItems
  from 'components/organisms/sections/dashboard/SectionBrandsItems'
import SectionCategoryBySubType
  from 'components/organisms/sections/dashboard/SectionCategoryBySubType'
import SectionItemsBySize
  from 'components/organisms/sections/dashboard/SectionItemsBySize'
import SectionCategoryByLastChance
  from 'components/organisms/sections/dashboard/SectionCategoryByLastChance'

class Dashboard extends Component {

  render() {
    const {
      menuInfo,
      messages,
      bannerItems,
      questions,
      categoryTopItems,
      categoryItems,
      lastChanceLink,
      lastChanceItems,
      newInItems,
      onFavoriteChange,
      topBrandsInfo,
      brandsLink,
      categoryBySizeInfo,
      priceOptions,
      priceDefaultValue,
      productTypeBySubTypeInfo,
      theme,
      user,
      closeMessage,
      ...others
    } = this.props

    const displayName = user && user.name ? user.name : 'you'
    return (
      <BaseLayout
        theme={theme}
        menuInfo={menuInfo}
        {...others}
      >
        <SectionHead
          isQuestions={!!(questions && questions.length)}
          bannerList={bannerItems}
          messages={messages}
          closeMessage={closeMessage}
          theme={theme}
        />
        <SectionCategory
          titleCategory='tertiary'
          itemsType='rounded'
          topItems={categoryTopItems}
          items={categoryItems}
          theme={theme}
        />
        <SectionNewItems
          title={`New in for ${ displayName }`}
          itemsType='small'
          items={newInItems}
          onFavoriteChange={onFavoriteChange}
          theme={theme}
        />
        <SectionCategoryByLastChance
          title='Last Chance!'
          subtitle="Shop quickly or they'll be gone!"
          itemsType='small'
          items={lastChanceItems}
          link={lastChanceLink}
          theme={theme}
        />
        <SectionBrandsItems
          title={`Top brands for ${ displayName }`}
          link={brandsLink}
          items={topBrandsInfo}
          theme={theme}
        />
        <SectionItemsBySize
          data={categoryBySizeInfo}
          onFavoriteChange={onFavoriteChange}
          theme={theme}
        />
        <SectionPrice
          options={priceOptions}
          defaultValue={priceDefaultValue}
          theme={theme}
        />
        <SectionCategoryBySubType
          itemsType='small'
          bgColor='wildsand'
          data={productTypeBySubTypeInfo}
          theme={theme}
        />
      </BaseLayout>
    )
  }
}

Dashboard.defaultProps = {
  user: null,
  menuInfo: null,
  bannerItems: null,
  questions: null,
  messages: null,
  closeMessage: null,
  topBrandsInfo: null,
  categoryTopItems: null,
  categoryItems: null,
  lastChanceLink: null,
  lastChanceItems: null,
  priceDefaultValue: null,
  priceOptions: null,
  newInItems: null,
  brandsLink: null,
  onFavoriteChange: null,
  categoryBySizeInfo: null,
  productTypeBySubTypeInfo: null,
  theme: null,
}

Dashboard.propTypes = {
  user: PropTypes.object,
  menuInfo: PropTypes.shape({
    categoryItems: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string
      })
    ),
    linkItems: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string,
        name: PropTypes.string
      })
    )
  }),
  bannerItems: PropTypes.array,
  questions: PropTypes.array,
  messages: PropTypes.array,
  closeMessage: PropTypes.func,
  categoryTopItems: PropTypes.array,
  categoryItems: PropTypes.array,
  lastChanceLink: PropTypes.object,
  lastChanceItems: PropTypes.array,
  priceDefaultValue: PropTypes.string,
  priceOptions: PropTypes.array,
  newInItems: PropTypes.array,
  onFavoriteChange: PropTypes.func,
  topBrandsInfo: PropTypes.array,
  brandsLink: PropTypes.object,
  categoryBySizeInfo: PropTypes.shape({
    product_type: PropTypes.string,
    product_size: PropTypes.string,
    products: PropTypes.array,
  }),
  productTypeBySubTypeInfo: PropTypes.shape({
    product_type: PropTypes.object,
    sub_types: PropTypes.array
  }),
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default Dashboard
