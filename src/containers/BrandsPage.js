import React, { Component } from 'react'
import { menuInfo } from 'constants/header'
import { brandCategories } from 'constants/accounts'
import {ApiUtils} from 'utils/ApiUtils'
import API from '@aws-amplify/api'
import PropTypes from 'prop-types'
import Brands from 'components/templates/accounts/Brands'

class BrandsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      brandsList: [],
      popularBrandsList: [],
      selectedCategory: {
        label: "A - C",
        value: "A+B+C"
      },
    }
    this.onChangeBrandCategory = this.onChangeBrandCategory.bind(this)
    this.onAddBrand = this.onAddBrand.bind(this)
    this.onDeleteBrand = this.onDeleteBrand.bind(this)
  }

  componentDidMount() {
    const {selectedCategory} = this.state
    this.getFavouriteBrandsList()
    this.getPopularBrandsList()
    this.getBrandsList(selectedCategory)
  }

  onChangeBrandCategory(selectedCategory) {
    this.setState({selectedCategory})
    this.getBrandsList(selectedCategory)
  }

  onAddBrand(brand){
    this.setState({alertMsg: {isOpen: false}})
    API.post('mpc', ApiUtils.addBrand(brand), {body:{}})
    .then(response=>{
      const alertMsg = {
        isOpen: true,
        status: "success",
        message:"Your preferences has been saved successfully"
      }
      this.setState({alertMsg})
      if (response.status)
        this.getFavouriteBrandsList()
    })
    .catch(()=>{
      const alertMsg = {
        isOpen: true,
        status: "error",
        message:"Your operation was failed, Please try again"
      }
      this.setState({alertMsg})
    })
  }

  onDeleteBrand(brand){
    this.setState({alertMsg: {isOpen: false}})
    API.del('mpc', ApiUtils.addBrand(brand), {body:{}})
    .then(response=>{
      if (response.status) {
        this.getFavouriteBrandsList()
        const alertMsg = {
          isOpen: true,
          status: "success",
          message:"Brands was removed from favorite list"
        }
        this.setState({alertMsg})
      } else {
        const alertMsg = {
          isOpen: true,
          status: "error",
          message:"Your operation was failed"
        }
        this.setState({alertMsg})
      }
    })
  }

  getFavouriteBrandsList() {
    API.get('mpc', ApiUtils.getFavoriteBrandsList())
    .then(response=>{
      this.setState({favoriteBrandsList: response})
    })
  }

  getPopularBrandsList() {
    API.get('mpc', ApiUtils.getPopularBrandsList())
    .then(response=>{
      this.setState({popularBrandsList: response})
    })
  }

  getBrandsList(selectedCategory) {
    API.get('mpc', ApiUtils.getBrandsList(selectedCategory.value))
    .then(response=>{
      this.setState({brandsList: response})
    })
  }

  render() {
    const {theme, ...others} = this.props
    const {
      brandsList,
      selectedCategory,
      popularBrandsList,
      favoriteBrandsList,
      alertMsg
    } = this.state
    return (
      <Brands
        theme={theme}
        menuInfo={menuInfo}
        selectedBrands={favoriteBrandsList}
        popularBrands={popularBrandsList}
        brandCategories={brandCategories}
        selectedCategory={selectedCategory}
        onChangeBrandCategory={this.onChangeBrandCategory}
        brandsList={brandsList}
        onAddBrand={this.onAddBrand}
        onDeleteBrand={this.onDeleteBrand}
        alertMsg={alertMsg}
        {...others}
      />
    )
  }
}

BrandsPage.defaultProps = {
  theme: null
}
BrandsPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
}
export default BrandsPage
