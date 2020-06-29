import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Placeholder from 'components/atoms/common/Placeholder'
import Text from 'components/atoms/common/Text'
import Container from 'components/atoms/layout/Container'
import CardOption from 'components/molecules/cards/CardOption'
import ButtonIcon from 'components/molecules/buttons/ButtonIcon'
import Searchbar from 'components/molecules/forms/Searchbar'

import { debounce } from 'utils'

import './SearchOverlay.scss'

class SearchOverlay extends Component {
  renderRecommendations() {
    const {
      recommendations,
      onRemoveRecommendation,
      recommendationRemovingIds,
    } = this.props

    return (
      <div>
        {recommendations &&
          recommendations.map((item, index) => (
            <CardOption
              isLoading={recommendationRemovingIds.some(
                id => id === item.value,
              )}
              key={index.toString()}
              className="mr-10 mb-10"
              label={item.label}
              value={item.value}
              onClose={onRemoveRecommendation}
              href={item.url}
            />
          ))}
      </div>
    )
  }

  renderRecommendationsPlaceholder() {
    return (
      <div className="d-flex">
        <Placeholder className="mr-10 mb-10" width={80} height={36} />
        <Placeholder className="mr-10 mb-10" width={80} height={36} />
        <Placeholder className="mr-10 mb-10" width={80} height={36} />
      </div>
    )
  }

  render() {
    const {
      className,
      recommendations,
      onClose,
      isOpened,
      suggestions,
      onSuggest,
      isSearchbarFocused,
      onSearch,
      isSearchLoading,
    } = this.props

    return (
      <div
        className={clsx(
          'search-overlay',
          { 'search-overlay--opened': isOpened },
          className,
        )}
      >
        <Container>
          <div className="d-flex jc-space-between ai-flex-start mb-30">
            <Text size="xxl" fw="medium">
              <div>Search for</div>
              <div>items, brands, inspiration</div>
            </Text>
            <ButtonIcon
              icon='close'
              isNoBg
              onClick={() => onClose ? onClose() : null}
            />
          </div>

          <div className="mb-40">
            <Searchbar
              suggestions={suggestions}
              isFocused={isSearchbarFocused}
              onSuggest={debounce(onSuggest, 350)}
              onSearch={onSearch}
              isLoading={isSearchLoading}
              isAutocomplete
            />
          </div>

          <div className="search-overlay__recommendations">
            {recommendations && recommendations.length !== 0 && (
              <Text>Reccomendations for you</Text>
            )}
            <div className="mt-15">
              {recommendations
                ? this.renderRecommendations()
                : this.renderRecommendationsPlaceholder()}
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

SearchOverlay.defaultProps = {
  className: '',
  recommendations: null,
  onRemoveRecommendation: null,
  onClose: null,
  onSuggest: null,
  onSearch: null,
  isOpened: false,
  suggestions: [],
  isSearchbarFocused: false,
  isSearchLoading: false,
  recommendationRemovingIds: [],
}

SearchOverlay.propTypes = {
  className: PropTypes.string,
  onRemoveRecommendation: PropTypes.func,
  onClose: PropTypes.func,
  onSuggest: PropTypes.func,
  recommendations: PropTypes.array,
  isOpened: PropTypes.bool,
  isSearchbarFocused: PropTypes.bool,
  suggestions: PropTypes.array,
  onSearch: PropTypes.func,
  isSearchLoading: PropTypes.bool,
  recommendationRemovingIds: PropTypes.array,
}

export default SearchOverlay
