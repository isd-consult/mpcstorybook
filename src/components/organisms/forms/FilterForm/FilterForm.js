import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './FilterForm.scss'
import TreeSelect from 'components/molecules/filters/TreeSelect'
import Divider from 'components/atoms/common/Divider'
import Text from 'components/atoms/common/Text'
import ButtonIcon from 'components/molecules/buttons/ButtonIcon'
import Icon from 'components/atoms/common/Icon'
import Button from 'components/molecules/buttons/Button'
import CardOption from 'components/molecules/cards/CardOption'

const labels = {
  product_type: 'Category',
  brand: 'Brand',
  color: 'Colour',
  size: 'Size',
  gender: 'Gender',
  price: 'Price',
}

class FilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cur: -1,
      filterOptions: {},
    }
    this.onChange = this.onChange.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    const { filterOptions } = this.props
    this.setState({ filterOptions })
  }

  componentWillReceiveProps(nextProps) {
    const { filterOptions } = this.props
    if (filterOptions !== nextProps.filterOptions) {
      this.setState({ filterOptions: nextProps.filterOptions })
    }
  }

  onChange(data) {
    const { onChange } = this.props
    const { filterOptions } = this.state

    if (data && data.name) filterOptions[data.name] = data.children
    this.setState({ filterOptions })

    if (onChange) onChange(filterOptions)
  }

  getSelectedNum(items) {
    let count = 0
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked) count++
      if (items[i].children) {
        for (let j = 0; j < items[i].children.length; j++) {
          if (items[i].children[j].checked) count++
        }
      }
    }
    return count
  }

  toggleMenu(index) {
    const { cur } = this.state
    if (cur === index) {
      this.setState({ cur: -1 })
    } else {
      this.setState({ cur: index })
    }
  }

  render() {
    const {
      className,
      filterOptions,
      theme,
      removeFilters,
      removeFilterItem,
    } = this.props
    const { cur } = this.state
    const Btn = `div`

    let selectedOptions = []
    if (filterOptions) {
      Object.keys(filterOptions).forEach(key => {
        for (let i = 0; i < filterOptions[key].length; i++) {
          const item = filterOptions[key][i]
          if (item.checked) {
            selectedOptions = selectedOptions.concat(item.label)
          }
        }
      })
    }

    return (
      <div className={clsx('filter-form', className)}>
        <div className="filter-form__top">
          <div className="d-flex ai-center">
            <Icon className="mr-5" name="filter" size={18} />
            <Text size="xxxl" fw="medium">
              Filters:
            </Text>
          </div>
          <Button
            auto
            icon="trash"
            category="grey"
            onClick={items => {
              this.setState({ cur: -1 })
              if (removeFilters) removeFilters(items)
            }}
          >
            Clear
          </Button>
        </div>
        <div
          className={clsx('pl-20 pr-20', {
            [`mb-20`]: selectedOptions && selectedOptions.length,
          })}
        >
          {selectedOptions.map((option, index) => (
            <CardOption
              key={index.toString()}
              label={option}
              value={option}
              className="mr-5 mb-5"
              onClose={removeFilterItem}
            />
          ))}
        </div>
        <div>
          {filterOptions &&
            Object.keys(filterOptions).map((key, index) => {
              const count = this.getSelectedNum(filterOptions[key])
              return (
                <div key={index.toString()}>
                  <Divider className="filter-form__divider" />
                  <Btn
                    className="filter-form__tab"
                    onClick={() => this.toggleMenu(index)}
                  >
                    <Text size="xl" fw="bold">
                      {labels[key]}
                    </Text>
                    <div style={{ display: `flex`, alignItems: `center` }}>
                      <Text className="filter-form__count mr-10">
                        {count ? `${count} selected` : ''}
                      </Text>
                      <ButtonIcon
                        isNoBg
                        icon={cur === index ? 'arrow-up' : 'arrow-down'}
                        iconSize={10}
                        theme={theme}
                      />
                    </div>
                  </Btn>
                  {cur === index && (
                    <TreeSelect
                      className="pl-20 pr-20"
                      theme={theme}
                      name={key}
                      category={key}
                      items={filterOptions[key]}
                      onChange={this.onChange}
                    />
                  )}
                </div>
              )
            })}
        </div>
        <Divider className="filter-form__divider" />
      </div>
    )
  }
}

FilterForm.defaultProps = {
  className: '',
  theme: 'men',
  filterOptions: null,
  onChange: null,
  removeFilters: null,
  removeFilterItem: null,
}

FilterForm.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  filterOptions: PropTypes.object,
  onChange: PropTypes.func,
  removeFilters: PropTypes.func,
  removeFilterItem: PropTypes.func,
}

export default FilterForm
