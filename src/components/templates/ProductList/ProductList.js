/* eslint-disable max-len */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ProductList.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import SectionProductList from 'components/organisms/sections/productlist/SectionProductList'
import SectionSortFilter from 'components/organisms/sections/productlist/SectionSortFilter'
import SectionRecommends from 'components/organisms/sections/productlist/SectionRecommends'

class ProductList extends Component {
  render() {
    const {
      theme,
      title,
      subtitle,
      sortOptions,
      selectedSortOption,
      totalCount,
      isLoading,
      productList,
      onSortChange,
      filterOptions,
      onApplyFilter,
      onMoreClick,
      isAdmin,
      isSearch,
      isAuthenticated,
      recommendItems,
      recommendURL,
      ...others
    } = this.props

    return (
      <BaseLayout theme={theme} isAuthenticated={isAuthenticated} {...others}>
        {totalCount !== 0 && (
        <SectionSortFilter
          title={title}
          subtitle={subtitle}
          isSearch={isSearch}
          sortOptions={sortOptions}
          selectedSortOption={selectedSortOption}
          onSortChange={onSortChange}
          filterOptions={filterOptions}
          onApplyFilter={onApplyFilter}
          theme={theme}
          isLoading={isLoading}
        />
)}
        <SectionProductList
          title={title}
          theme={theme}
          isLoading={isLoading}
          totalCount={totalCount}
          onMoreClick={onMoreClick}
          items={productList}
          isAdmin={isAdmin}
          isAuthenticated={isAuthenticated}
        />
        {totalCount === 0 && (
        <SectionRecommends
          searchTerm={title}
          itemsType='small'
          items={recommendItems}
          recommendURL={recommendURL}
          theme={theme}
        />
)}
      </BaseLayout>
    )
  }
}

ProductList.defaultProps = {
  title: null,
  subtitle: null,
  sortOptions: null,
  selectedSortOption: null,
  onSortChange: null,
  filterOptions: null,
  onApplyFilter: null,
  totalCount: 0,
  isLoading: false,
  productList: null,
  onMoreClick: null,
  theme: null,
  isAdmin: false,
  isSearch: false,
  isAuthenticated: false,
  recommendItems: null,
  recommendURL: null
}

ProductList.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sortOptions: PropTypes.array,
  selectedSortOption: PropTypes.object,
  onSortChange: PropTypes.func,
  filterOptions: PropTypes.object,
  onApplyFilter: PropTypes.func,
  totalCount: PropTypes.number,
  isLoading: PropTypes.bool,
  isAdmin: PropTypes.bool,
  productList: PropTypes.array,
  onMoreClick: PropTypes.func,
  isSearch: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isAuthenticated: PropTypes.bool,
  recommendItems: PropTypes.array,
  recommendURL: PropTypes.string
}

export default ProductList
