import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionSortFilter.scss'
import Container from 'components/atoms/layout/Container'
import Button from 'components/molecules/buttons/Button'
import Text from 'components/atoms/common/Text'
// import Icon from 'components/atoms/common/Icon'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import ThemeUtils from 'utils/ThemeUtils'
import StringUtils from 'utils/StringUtils'
import MenuList from 'components/molecules/forms/MenuList'
import SlideMenu from 'components/organisms/common/SlideMenu'
import FilterForm from 'components/organisms/forms/FilterForm'
// import CardOption from 'components/molecules/cards/CardOption'

class SectionSortFilter extends Component {
  constructor() {
    super()
    this.state = {
      sortIsOpen: false,
      selectedSortOption: null,
      filterIsOpen: false,
      filterOptions: null,
      filterNumber: null,
    }
    this.sortByClick = this.sortByClick.bind(this)
    this.sortChange = this.sortChange.bind(this)
    this.filterClick = this.filterClick.bind(this)
    this.filterChange = this.filterChange.bind(this)
    this.filterClose = this.filterClose.bind(this)
    this.onFilterChange = this.onFilterChange.bind(this)
    this.applyFilters = this.applyFilters.bind(this)
    this.removeFilters = this.removeFilters.bind(this)
    this.removeFilterItem = this.removeFilterItem.bind(this)
  }

  componentDidMount() {
    const { filterOptions, selectedSortOption } = this.props
    this.setState({ filterOptions, selectedSortOption })
  }

  componentWillReceiveProps(nextProps) {
    const { filterOptions, selectedSortOption } = this.props
    if (filterOptions !== nextProps.filterOptions) {
      this.setState({ filterOptions: nextProps.filterOptions })
      this.updateFiltersCount(nextProps.filterOptions)
    }
    if (selectedSortOption !== nextProps.selectedSortOption) {
      this.setState({ selectedSortOption: nextProps.selectedSortOption })
    }
  }

  onFilterChange(filterOptions) {
    this.updateFiltersCount(filterOptions)
    this.setState({ filterOptions })
  }

  filterClick() {
    const { filterIsOpen } = this.state
    this.setState({
      filterIsOpen: !filterIsOpen,
      sortIsOpen: false,
    })
  }

  filterChange() {
    this.filterClose()
  }

  filterClose() {
    this.setState({
      filterIsOpen: false,
    })
  }

  sortChange(option) {
    const { onSortChange } = this.props
    if (onSortChange) onSortChange(option)
    this.setState({
      sortIsOpen: false,
      selectedSortOption: option,
    })
  }

  sortByClick() {
    const { sortIsOpen } = this.state
    this.setState({
      sortIsOpen: !sortIsOpen,
      filterIsOpen: false,
    })
  }

  applyFilters() {
    const { onApplyFilter } = this.props
    const { filterOptions } = this.state

    if (onApplyFilter) onApplyFilter(filterOptions)

    this.updateFiltersCount(filterOptions)
    this.setState({ filterIsOpen: false })
  }

  updateFiltersCount(filterOptions) {
    let filterNumber = 0

    Object.keys(filterOptions).forEach(key => {
      for (let i = 0; i < filterOptions[key].length; i++) {
        if (filterOptions[key][i].checked) filterNumber++
        if (filterOptions[key][i].children) {
          for (let j = 0; j < filterOptions[key][i].children.length; j++) {
            if (filterOptions[key][i].children[j].checked) filterNumber++
          }
        }
      }
    })
    this.setState({ filterNumber })
  }

  removeFilters() {
    const { filterOptions } = this.state
    Object.keys(filterOptions).forEach(key => {
      for (let i = 0; i < filterOptions[key].length; i++) {
        filterOptions[key][i].checked = false
        if (filterOptions[key][i].children) {
          for (let j = 0; j < filterOptions[key][i].children.length; j++) {
            filterOptions[key][i].children[j].checked = false
          }
        }
      }
    })
    this.updateFiltersCount(filterOptions)
    this.setState({ filterOptions })
  }

  removeFilterItem(item) {
    const { filterOptions } = this.state
    Object.keys(filterOptions).forEach(key => {
      for (let i = 0; i < filterOptions[key].length; i++) {
        if (filterOptions[key][i].label === item) {
          filterOptions[key][i].checked = false
        }
        if (filterOptions[key][i].children) {
          for (let j = 0; j < filterOptions[key][i].children.length; j++) {
            filterOptions[key][i].children[j].checked = false
          }
        }
      }
    })
    this.updateFiltersCount(filterOptions)
    this.setState({ filterOptions })
  }

  renderSearchTitle() {
    const { isSearch } = this.props

    if (!isSearch) return null

    return (
      <div className="mb-5 ta-center">
        <Text align="center" size="xs" color="silver">
          Search results for
        </Text>
      </div>
    )
  }

  render() {
    const {
      className,
      sortOptions,
      title,
      theme,
      isLoading,
      subtitle,
    } = this.props
    const {
      sortIsOpen,
      selectedSortOption,
      filterIsOpen,
      filterNumber,
      filterOptions,
    } = this.state

    return (
      <div className={clsx('section-sort-filter pt-15 pb-15', className)}>
        <Container>
          {title && (
            <>
              {this.renderSearchTitle()}
              <Text
                className={subtitle ? null : 'mb-15'}
                align="center"
                size="xxl"
                fw="bold"
                color={ThemeUtils.themeToColor(theme)}
              >
                {StringUtils.toCamelCase(title)}
              </Text>
            </>
          )}
          {subtitle && (
            <>
              <Text
                className="mb-15"
                align="center"
                size="xs"
                fw="light"
                color={ThemeUtils.themeToColor(theme)}
              >
                {StringUtils.toCamelCase(subtitle)}
              </Text>
            </>
          )}

          <Row>
            <Col>
              <Button
                category="tertiary"
                theme={theme}
                icon="arrow"
                isIconRight={sortIsOpen}
                isDisabled={isLoading}
                onClick={this.sortByClick}
              >
                Sort by
              </Button>
            </Col>
            <Col>
              <Button
                category="tertiary"
                theme={theme}
                isDisabled={isLoading}
                onClick={this.filterClick}
              >
                {filterNumber ? `Filter (${filterNumber})` : 'Filter'}
              </Button>
            </Col>
          </Row>
        </Container>
        <MenuList
          className={clsx(
            'section-sort-filter__sortbymenu mt-30',
            { [`section-sort-filter__sortbymenu--show`]: sortIsOpen },
            { [`section-sort-filter__sortbymenu--hide`]: !sortIsOpen },
          )}
          selected={selectedSortOption}
          options={sortOptions}
          onChange={this.sortChange}
          theme={theme}
        />
        <SlideMenu
          className="section-sort-filter__menu"
          theme={theme}
          title="-Filters"
          direction="right"
          onClose={this.filterClose}
          isOpen={filterIsOpen}
        >
          <FilterForm
            filterOptions={filterOptions}
            onChange={this.onFilterChange}
            removeFilters={this.removeFilters}
            removeFilterItem={this.removeFilterItem}
            theme={theme}
          />
          <div className="pl-30 pr-30 mt-30 mb-30">
            <Button onClick={this.applyFilters} theme={theme}>
              Apply Filters
            </Button>
          </div>
        </SlideMenu>
      </div>
    )
  }
}

SectionSortFilter.defaultProps = {
  className: '',
  title: null,
  subtitle: null,
  sortOptions: null,
  selectedSortOption: null,
  onSortChange: null,
  onApplyFilter: null,
  filterOptions: null,
  theme: null,
  isSearch: false,
  isLoading: false,
}

SectionSortFilter.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sortOptions: PropTypes.array,
  selectedSortOption: PropTypes.object,
  onSortChange: PropTypes.func,
  onApplyFilter: PropTypes.func,
  filterOptions: PropTypes.object,
  isSearch: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isLoading: PropTypes.bool,
}

export default SectionSortFilter
