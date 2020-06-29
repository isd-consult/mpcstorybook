import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './FilterForm.scss'
import TogglePannel from 'components/molecules/panels/TogglePannel'
import MultiSelect from 'components/molecules/forms/multiselects/MultiSelect'
// eslint-disable-next-line max-len
import MultiColorPicker from 'components/molecules/forms/multiselects/MultiColorPicker'

class FilterForm extends Component {
  constructor() {
    super()
    this.state = {
      curIndex: '0',
      filterOptions: {
        types: [],
        subTypes: [],
        brands: [],
        sizes: [],
        genders: [],
        colors: [],
        prices: [],
      },
    }
    this.onChange = this.onChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { selectedOptions } = this.props

    if (selectedOptions !== nextProps.selectedOptions) {
      this.setState({ filterOptions: nextProps.selectedOptions })
    }
  }

  onChange(selected) {
    const { onChange } = this.props
    let { filterOptions } = this.state
    filterOptions = {
      ...filterOptions,
      [selected.id]: selected.values,
    }
    this.setState({ filterOptions })
    onChange(filterOptions)
  }

  render() {
    const {
      className,
      typeOptions,
      subTypeOptions,
      brandOptions,
      sizeOptions,
      genderOptions,
      colorOptions,
      priceOptions,
      theme,
    } = this.props

    const { filterOptions, curIndex } = this.state

    return (
      <div className={clsx('filter-form', className)}>
        <div className="filter-form__content">
          <TogglePannel
            index="0"
            onClick={() => this.setState({ curIndex: '0' })}
            title="Product Type"
            mode="filter"
            subtitle={
              filterOptions.types.length > 0
                ? `${filterOptions.types.length} selected`
                : null
            }
            active={curIndex === '0'}
            icon="arrow-down"
            theme={theme}
          >
            <MultiSelect
              itemClassName="filter-form__checkbox"
              id="types"
              options={typeOptions}
              selected={filterOptions.types}
              onChange={this.onChange}
              theme={theme}
            />
          </TogglePannel>
          <TogglePannel
            index="1"
            onClick={() => this.setState({ curIndex: '1' })}
            title="Product SubType"
            mode="filter"
            subtitle={
              filterOptions.subTypes.length > 0
                ? `${filterOptions.subTypes.length} selected`
                : null
            }
            active={curIndex === '1'}
            icon="arrow-down"
            theme={theme}
          >
            <MultiSelect
              id="subTypes"
              itemClassName="filter-form__checkbox"
              options={subTypeOptions}
              selected={filterOptions.subTypes}
              onChange={this.onChange}
              theme={theme}
            />
          </TogglePannel>
          <TogglePannel
            index="2"
            onClick={() => this.setState({ curIndex: '2' })}
            title="Brand"
            mode="filter"
            subtitle={
              filterOptions.brands.length > 0
                ? `${filterOptions.brands.length} selected`
                : null
            }
            active={curIndex === '2'}
            icon="arrow-down"
            theme={theme}
          >
            <MultiSelect
              id="brands"
              itemClassName="filter-form__checkbox"
              options={brandOptions}
              selected={filterOptions.brands}
              onChange={this.onChange}
              theme={theme}
            />
          </TogglePannel>
          <TogglePannel
            index="3"
            onClick={() => this.setState({ curIndex: '3' })}
            title="Gender"
            mode="filter"
            subtitle={
              filterOptions.genders.length > 0
                ? `${filterOptions.genders.length} selected`
                : null
            }
            active={curIndex === '3'}
            icon="arrow-down"
            theme={theme}
          >
            <MultiSelect
              id="genders"
              itemClassName="filter-form__checkbox"
              options={genderOptions}
              selected={filterOptions.genders}
              onChange={this.onChange}
              theme={theme}
            />
          </TogglePannel>
          <TogglePannel
            index="4"
            onClick={() => this.setState({ curIndex: '4' })}
            title="Size"
            mode="filter"
            subtitle={
              filterOptions.sizes.length > 0
                ? `${filterOptions.sizes.length} selected`
                : null
            }
            active={curIndex === '4'}
            icon="arrow-down"
            theme={theme}
          >
            <MultiSelect
              id="sizes"
              itemClassName="filter-form__checkbox"
              options={sizeOptions}
              selected={filterOptions.sizes}
              onChange={this.onChange}
              theme={theme}
            />
          </TogglePannel>
          <TogglePannel
            index="5"
            onClick={() => this.setState({ curIndex: '5' })}
            title="Colour"
            mode="filter"
            subtitle={
              filterOptions.colors.length > 0
                ? `${filterOptions.colors.length} selected`
                : null
            }
            active={curIndex === '5'}
            icon="arrow-down"
            theme={theme}
          >
            <MultiColorPicker
              id="colors"
              itemClassName="filter-form__checkbox"
              options={colorOptions}
              selected={filterOptions.colors}
              onChange={this.onChange}
            />
          </TogglePannel>
          <TogglePannel
            index="6"
            onClick={() => this.setState({ curIndex: '6' })}
            title="Price Range"
            subtitle={
              filterOptions.prices.length > 0
                ? `${filterOptions.prices.length} selected`
                : null
            }
            mode="filter"
            active={curIndex === '6'}
            icon="arrow-down"
            theme={theme}
          >
            <MultiSelect
              id="prices"
              itemClassName="filter-form__checkbox"
              options={priceOptions}
              selected={filterOptions.prices}
              onChange={this.onChange}
              mode="single"
              theme={theme}
            />
          </TogglePannel>
        </div>
      </div>
    )
  }
}

FilterForm.defaultProps = {
  className: '',
  typeOptions: null,
  subTypeOptions: null,
  brandOptions: null,
  sizeOptions: null,
  genderOptions: null,
  colorOptions: null,
  priceOptions: null,
  selectedOptions: null,
  onChange: null,
  theme: null,
}

FilterForm.propTypes = {
  className: PropTypes.string,
  typeOptions: PropTypes.array,
  subTypeOptions: PropTypes.array,
  brandOptions: PropTypes.array,
  sizeOptions: PropTypes.array,
  genderOptions: PropTypes.array,
  colorOptions: PropTypes.array,
  priceOptions: PropTypes.array,
  selectedOptions: PropTypes.object,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default FilterForm
