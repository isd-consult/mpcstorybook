import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Closet.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import Divider from 'components/atoms/common/Divider'

import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionFavoriteItems
  from 'components/organisms/sections/accounts/SectionFavoriteItems'
import SectionTopPickPortal
  from 'components/organisms/sections/accounts/SectionTopPickPortal'
import SectionFavoriteBrands
  from 'components/organisms/sections/accounts/SectionFavoriteBrands'

class Closet extends Component {
  render () {
    const {
      theme,
      cartCount,
      menuInfo, 
      favoriteBrands,
      favoriteSizes,
      favoriteCategories,
      favoritePreferences,
      ...others
    } = this.props

    return (
      <BaseLayout
        theme={theme}
        cartCount={cartCount}
        menuInfo={menuInfo}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title="My Closet"
            link="Back to My Closet"
            href="/accounts/"
          />
          <div className="closet__chain">
            <SectionFavoriteBrands
              title="My Brands"
              className="pt-15 pl-25 pb-15 pr-25"
              link={{
                text:"See all",
                href:"/accounts/closet/brands"
              }}
              data={favoriteBrands}
              placeholder="Choose the brands you would like to see more of"
            />
            <Divider />
            <SectionFavoriteItems
              title="My Sizes"
              className="pt-15 pl-25 pb-15 pr-25"
              link={{
                text:"See all",
                href:"/accounts/closet/sizes"
              }}
              data={favoriteSizes}
              placeholder="Save your sizes to narrow down your results"
            />
            <Divider />
            <SectionFavoriteItems
              title="My Categories"
              className="pt-15 pl-25 pb-15 pr-25"
              link={{
                text:"See all",
                href:"/accounts/closet/categories"
              }}
              data={favoriteCategories}
              placeholder={"Select your favourite categories"
                + " to see more styles you love"}
            />
          </div>
        </Container>
        <SectionTopPickPortal
          className="mt-20 mb-20"
          title='My Recommendations'
          backgroundImage={"https://encrypted-tbn0.gstatic.com/images?"
          +"q=tbn:ANd9GcTsqa075E4LDvU9xli7uCBtZge5xVbXttH93SvAQCnziMEVhifU"}
        />
        <Container>
          <div className="closet__chain">
            <SectionFavoriteItems
              title="My Communication Preferences"
              className="pt-15 pl-25 pb-15 pr-25"
              link={{
                text:"See all",
                href:"/accounts/closet/preferences"
              }}
              data={favoritePreferences}
              placeholder="Tell us how you want to receive updates from us"
            />
          </div>
        </Container>
      </BaseLayout>
    )
  }
}

Closet.defaultProps = {
  className: '',
  cartCount: null,
  menuInfo: null,
  favoriteBrands: null,
  favoriteSizes: null,
  favoriteCategories: null,
  favoritePreferences: null,
  theme: null
}

Closet.propTypes = {
  className: PropTypes.string,
  cartCount: PropTypes.number,
  menuInfo: PropTypes.object,
  favoriteBrands: PropTypes.array,
  favoriteSizes: PropTypes.object,
  favoriteCategories: PropTypes.object,
  favoritePreferences: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default Closet
