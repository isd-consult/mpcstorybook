import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Formik } from 'formik'
import { focusInput } from 'utils'
import Autocomplete from 'react-autocomplete'
import Text from 'components/atoms/common/Text'

import './Searchbar.scss'

import Icon from 'components/atoms/common/Icon'
import Spinner from 'components/molecules/spinners/Spinner'
import ButtonIcon from 'components/molecules/buttons/ButtonIcon'

class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidUpdate(prevProps) {
    const { isFocused: prevFocused } = prevProps
    const { isFocused: nextFocused } = this.props

    if (prevFocused !== nextFocused) {
      const { current: node } = this.inputRef

      if (nextFocused) {
        focusInput(node)
      } else {
        node.blur()
      }
    }
  }

  async handleSearch(values) {
    const { current: node } = this.inputRef
    const { onSearch } = this.props

    setTimeout(() => {
      node.blur()
    }, 50)

    if (onSearch) {
      try {
        await onSearch(values.search)
      } catch (error) {
        throw error
      }
    }
  }

  handleSelect(value, setFieldValue, url) {
    const { onSearch } = this.props

    setFieldValue('search', value)

    if (onSearch) {
      onSearch(value, url)
    }
  }

  handleSuggest(value, setFieldValue) {
    const { onSuggest } = this.props

    setFieldValue('search', value)

    if (value && value.length >= 3) {
      if (onSuggest) onSuggest(value)
    }
  }

  renderMenu(items) {
    const { suggestions, isLoading } = this.props

    const brands = []
    const products = []

    if (suggestions) {
      suggestions.forEach(suggest => {
        const findedItem = items.find(item => item.key === suggest.id)

        if (suggest.group === 'brands') brands.push(findedItem)
        if (suggest.group === 'products') products.push(findedItem)
      })
    }

    return (
      <div className="searchbar__menu">
        {products.length !== 0 && !isLoading && (
          <>
            <Text className="p-15" fw="bold" size="xl">
              Products
            </Text>
            <div>{products}</div>
          </>
        )}
        {brands.length !== 0 && !isLoading && (
          <>
            <Text className="p-15" fw="bold" size="xl">
              Brands
            </Text>
            <div>{brands}</div>
          </>
        )}
      </div>
    )
  }

  renderSuggestItem(item, query) {
    return (
      <Text
        className="searchbar__menu-item"
        key={item.id}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: item.label.replace(
            new RegExp(query, 'gi'),
            match => `<b>${match}</b>`,
          ),
        }}
      />
    )
  }

  renderStatusIcon(isSubmitting) {
    const { isLoading } = this.props

    return isSubmitting || isLoading ? (
      <Spinner className="searchbar__icon" size="small" />
    ) : (
      <Icon size={18} className="searchbar__icon" name="search" />
    )
  }

  render() {
    const {
      className,
      onClose,
      placeholder,
      suggestions,
      isLoading,
      isAutocomplete,
    } = this.props

    return (
      <Formik initialValues={{ search: '' }} onSubmit={this.handleSearch}>
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form
            onSubmit={handleSubmit}
            className={clsx(
              'searchbar',
              { 'searchbar--autocomplete': isAutocomplete },
              className,
            )}
          >
            <div className="searchbar__wrapper">
              {isAutocomplete ? (
                <>
                  <Autocomplete
                    open
                    ref={this.inputRef}
                    inputProps={{
                      className: 'searchbar__input',
                      name: 'search',
                      placeholder,
                      readOnly: isSubmitting,
                    }}
                    getItemValue={item => item.label}
                    items={isLoading ? [] : suggestions || []}
                    wrapperProps={{
                      className: 'searchbar__autocomplete',
                    }}
                    renderMenu={items => this.renderMenu(items)}
                    renderItem={(item, index) =>
                      this.renderSuggestItem(item, values.search, index)
                    }
                    value={values.search}
                    onChange={e =>
                      this.handleSuggest(e.target.value, setFieldValue)
                    }
                    onSelect={(val, props) => {
                      this.handleSelect(val, setFieldValue, props.url)
                    }}
                  />
                  {this.renderStatusIcon(isSubmitting)}
                </>
              ) : (
                <>
                  <input
                    onTouchMove={e => e.preventDefault()}
                    ref={this.inputRef}
                    onKeyDown={e => {
                      if (e.key === 'Escape') {
                        onClose()
                      }
                    }}
                    className="searchbar__input"
                    value={values.search}
                    readOnly={isSubmitting || isLoading}
                    onChange={handleChange}
                    placeholder={placeholder}
                    name="search"
                    type="search"
                  />
                  {this.renderStatusIcon(isSubmitting)}
                  <div className="searchbar__button-close d-flex ai-center">
                    <ButtonIcon
                      isDisabled={isSubmitting || isLoading}
                      icon="close"
                      isNoBg
                      onClick={() => {
                        setFieldValue('search', '')
                        if (onClose) onClose()
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </form>
        )}
      </Formik>
    )
  }
}

Searchbar.defaultProps = {
  className: '',
  onSearch: null,
  onSuggest: null,
  onClose: null,
  isFocused: false,
  isLoading: false,
  placeholder: 'Search',
  suggestions: null,
  isAutocomplete: false,
}

Searchbar.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func,
  onSuggest: PropTypes.func,
  onClose: PropTypes.func,
  isFocused: PropTypes.bool,
  isLoading: PropTypes.bool,
  placeholder: PropTypes.string,
  suggestions: PropTypes.array,
  isAutocomplete: PropTypes.bool,
}

export default Searchbar
