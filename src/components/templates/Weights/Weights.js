import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Weights.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionWeights
  from 'components/organisms/sections/others/SectionWeights'

class Weights extends Component {
  render () {
    const {
      className,
      isLoading,
      isSaving,
      isDownloading,
      isAdmin,
      weights,
      dateRange,
      onWeightChanged,
      onSaveWeights,
      onDateRangeChange,
      onDownloadReport,
      ...others
    } = this.props
    return (
      <BaseLayout
        {...others}
      >
        <Container>
          <SectionAccountTitle title="Scoring Weights and Report" />
          <SectionWeights 
            isAdmin={isAdmin}
            isLoading={isLoading}
            isSaving={isSaving}
            isDownloading={isDownloading}
            weights={weights}
            dateRange={dateRange}
            onWeightChanged={onWeightChanged}
            onSaveWeights={onSaveWeights}
            onDateRangeChange={onDateRangeChange}
            onDownloadReport={onDownloadReport}
          />
        </Container>
      </BaseLayout>
    )
  }
}

Weights.defaultProps = {
  className: '',
  isAdmin: false,
  isLoading: true,
  isSaving: false,
  isDownloading: false,
  weights: {},
  dateRange: {},
  onWeightChanged: null,
  onSaveWeights: null,
  onDateRangeChange: null,
  onDownloadReport: null,
}

Weights.propTypes = {
  className: PropTypes.string,
  isAdmin: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSaving: PropTypes.bool,
  isDownloading: PropTypes.bool,
  weights: PropTypes.object,
  dateRange: PropTypes.object,
  onWeightChanged: PropTypes.func,
  onSaveWeights: PropTypes.func,
  onDateRangeChange: PropTypes.func,
  onDownloadReport: PropTypes.func,
}

export default Weights
