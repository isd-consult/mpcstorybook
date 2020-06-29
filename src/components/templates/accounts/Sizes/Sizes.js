import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Sizes.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'

import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionSizesSelection
  from 'components/organisms/sections/accounts/SectionSizesSelection'
import SectionAddSizes
  from 'components/organisms/sections/accounts/SectionAddSizes'

class Sizes extends Component {
  render () {
    const {
      className,
      theme,
      cartCount,
      menuInfo, 
      sizesOptions,
      selected,
      onSaveSizes,
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
            title="My Sizes"
            link="Back to My Closet"
            href="/accounts/closet"
            description={"We'll recommend products that are available"
            + " in your sizes"}
          />
          <SectionSizesSelection
            sizesOptions={sizesOptions}
            selected={selected}
            onSaveSizes={onSaveSizes}
          />
        </Container>
        <SectionAddSizes
          theme={theme}
          className="mt-20"
          description={"We see you sometimes browse Men's items as well. \n\r"
          +"Would you like to add Men's sizes to your profile?"}
        />
      </BaseLayout>
    )
  }
}

Sizes.defaultProps = {
  className: '',
  theme: null,
  cartCount: null,
  menuInfo: null, 
  sizesOptions: null,
  onSaveSizes: null,
  selected: null
}

Sizes.propTypes = {
  className: PropTypes.string,
  cartCount: PropTypes.number,
  menuInfo: PropTypes.object,
  sizesOptions: PropTypes.object,
  onSaveSizes: PropTypes.func,
  selected: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default Sizes
