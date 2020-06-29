import React, { Component } from 'react'
import { menuInfo } from 'constants/header'
import {ApiUtils} from 'utils/ApiUtils'
import API from '@aws-amplify/api'
import PropTypes from 'prop-types'
import Categories from 'components/templates/accounts/Categories'

class CategoriesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gender: "ladies",
      favouriteCategoriesList: [],
      categoriesList: [],
    }
    this.onGenderChange = this.onGenderChange.bind(this)
    this.onAddCategory = this.onAddCategory.bind(this)
    this.onDeleteCategory = this.onDeleteCategory.bind(this)
  }

  componentDidMount() {
    this.getFavouriteCategoriesList()
    this.getCategoriesList()
  }

  onGenderChange(gender){
    this.setState({gender})
  }

  onAddCategory(category){
    this.setState({alertMsg: {isOpen: false}})
    API.post('mpc', ApiUtils.onAddCategory(category), {body:{}})
    .then(response=>{
      if (response.status){
        this.getFavouriteCategoriesList()
        const alertMsg = {
          isOpen: true,
          status: "success",
          message:`${category} was added from favorite list`
        }
        this.setState({alertMsg})
      } else {
        const alertMsg = {
          isOpen: true,
          status: "error",
          message:"Your operations was failed, try again"
        }
        this.setState({alertMsg})
      }
    })
  }

  onDeleteCategory(category){
    this.setState({alertMsg: {isOpen: false}})
    API.del('mpc', ApiUtils.onDeleteCategory(category), {body:{}})
    .then(response=>{
      if (response.status) {
        this.getFavouriteCategoriesList()
        const alertMsg = {
          isOpen: true,
          status: "success",
          message: `${category} was removed from favorite list`
        }
        this.setState({alertMsg})
      } else {
        const alertMsg = {
          isOpen: true,
          status: "error",
          message:"Your operations was failed, try again"
        }
        this.setState({alertMsg})
      }
    })
  }

  getFavouriteCategoriesList() {
    API.get('mpc', ApiUtils.getFavouriteCategoriesList())
    .then(response=>{
      this.setState({favouriteCategoriesList: response})
    })
  }

  getCategoriesList() {
    const {gender} = this.state
    API.post('mpc',
      ApiUtils.getCategoriesList(),
      {body: {genders:[gender]}})
    .then(response=>{
      let totalArray = []
      totalArray = response.MENS?totalArray.concat(response.MENS):totalArray
      totalArray = response.LADIES?totalArray.concat(response.LADIES):totalArray
      this.setState({categoriesList: totalArray})
    })
  }

  render() {
    const {theme, ...others} = this.props
    const {
      gender,
      categoriesList,
      favouriteCategoriesList,
      alertMsg
    } = this.state
    return (
      <Categories
        theme={theme}
        menuInfo={menuInfo}
        gender={gender}
        favouriteCategoriesList={favouriteCategoriesList}
        categoriesList={categoriesList}
        onGenderChange={this.onGenderChange}
        onAddCategory={this.onAddCategory}
        onDeleteCategory={this.onDeleteCategory}
        alertMsg={alertMsg}
        {...others}
      />
    )
  }
}

CategoriesPage.defaultProps = {
  theme: null
}
CategoriesPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
}
export default CategoriesPage
