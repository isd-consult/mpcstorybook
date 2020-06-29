import React, { Component } from 'react'
import { menuInfo } from 'constants/header'
import {closetLandingInfo} from 'constants/accounts'
import PropTypes from 'prop-types'
import Closet from 'components/templates/accounts/Closet'
import { ApiUtils } from 'utils/ApiUtils'
import API from '@aws-amplify/api'
import ArrayUtils from 'utils/ArrayUtils'

class ClosetPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      // favoriteBrands: [],
      favoriteSizes: null,
      favoriteCategories: null,
      favoritePreferences: null
    }
  }

  componentDidMount() {
    // this.getFavoriteBrands()
    this.getFavoriteSizes()
    this.getFavoriteCategories()
    this.getFavoritePreferences()
  }

  // getFavoriteBrands() {
  //   API.get('mpc', ApiUtils.getFavoriteBrandsList())
  //   .then(response=>{
  //     this.setState({favoriteBrands: response})
  //   })
  // }

  getFavoriteSizes() {
    API.get('mpc', ApiUtils.getFavoriteSizesList())
    .then(response=>{
      this.setState({favoriteSizes: response.data.sizes.LADIES})
    })

  }

  getFavoriteCategories() {
    API.get('mpc', ApiUtils.getFavouriteCategoriesList())
    .then(response=>{
      const categories =
        ArrayUtils.extractedArray(response, "product_type_name")
      this.setState({
        favoriteCategories: {"My Categories": categories}
      })
    })
  }

  getFavoritePreferences() {
    API.get('mpc', ApiUtils.getPreferencesInfo())
    .then(response=>{
      const preferences = []
      const email = response.daily_email
                    || response.weekly_email
                    || response.alert_for_favorite_brand
      if (email) preferences.push("Email")
      const {sms} = response
      if (sms) preferences.push("Sms")
      this.setState({
        favoritePreferences: {"I like to get": preferences}
      })
    })
  }

  render() {
    const {
      theme,
      ...others
    } = this.props
    const {
      isLoading,
      // favoriteBrands,
      favoriteSizes,
      favoriteCategories,
      favoritePreferences
    } = this.state

    return (
      <Closet
        theme={theme}
        menuInfo={menuInfo}
        favoriteBrands={closetLandingInfo.brands}
        favoriteSizes={favoriteSizes}
        favoriteCategories={favoriteCategories}
        favoritePreferences={favoritePreferences}
        isLoading={isLoading}
        {...others}
      />
    )
  }
}
ClosetPage.defaultProps = {
  theme: null,
}
ClosetPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
}
export default ClosetPage
