import React, { Component } from 'react'
import { menuInfo } from 'constants/header'
import {sizesOptions} from 'constants/accounts'
import PropTypes from 'prop-types'
import Sizes from 'components/templates/accounts/Sizes'

class SizesPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: {
        "Tops": ["XS", "XXL"],
        "Bottoms": ["L", "XL"]
      }
    }
    this.onSaveSizes = this.onSaveSizes.bind(this)
  }

  onSaveSizes(selected) {
    this.setState({selected})
  }

  render() {
    const {
      theme,
      ...others
    } = this.props
    const {selected} = this.state
    return (
      <Sizes
        theme={theme}
        menuInfo={menuInfo}
        sizesOptions={sizesOptions}
        selected={selected}
        onSaveSizes={this.onSaveSizes}
        {...others}
      />
    )
  }
}
SizesPage.defaultProps = {
  theme: null
}
SizesPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women'])
}
export default SizesPage