import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionWeights.scss'
import Text from 'components/atoms/common/Text'
import InputField from 'components/molecules/forms/inputs/InputField'
import Button from 'components/molecules/buttons/Button'
import Divider from 'components/atoms/common/Divider'
import Spinner from 'components/molecules/spinners/Spinner'


class SectionWeights extends Component {

  render () {
    const {
      className,
      isLoading,
      isSaving,
      isDownloading,
      theme,
      weights,
      dateRange,
      onWeightChanged,
      onSaveWeights,
      onDateRangeChange,
      onDownloadReport,
    } = this.props

    return (
      isLoading
      ? <Spinner className="mt-20" isCentered theme={theme} />
      : (
        <div
          className={clsx(
            'section-weights',
            className
          )}
        >
          <Text className="section-weights__desc" size="normal">
            You can change the scoring weights here or request to report.
          </Text>
          <Text className="mt-20" size="xl" fw="bold">
            Adjust weights
          </Text>
          <InputField
            label="Questions Weight"
            name="question"
            type="number"
            onChange={onWeightChanged}
            readOnly={isSaving || isLoading}
            value={weights && weights.question}
            required
          />
          <InputField
            label="Orders Weight"
            name="order"
            type="number"
            onChange={onWeightChanged}
            readOnly={isSaving || isLoading}
            value={weights && weights.order}
            required
          />
          <InputField
            label="Tracking Weight"
            name="track"
            type="number"
            onChange={onWeightChanged}
            readOnly={isSaving || isLoading}
            value={weights && weights.track}
            required
          />
          <Button
            className="mt-20"
            category="grey"
            onClick={onSaveWeights}
            isDisabled={isLoading || isSaving}
          >
            Save
          </Button>
          <Divider className="mt-15 mb-15" />
          <Text className="mt-20" size="xl" fw="bold">
            Click Through Report
          </Text>
          <InputField
            label="Start Date"
            placeholder="Start Date"
            name="from"
            onChange={onDateRangeChange}
            readOnly={isDownloading}
            value={dateRange && dateRange.from}
            required
          />
          <InputField
            label="End Date"
            placeholder="End Date"
            name="to"
            onChange={onDateRangeChange}
            readOnly={isDownloading}
            value={dateRange && dateRange.to}
            required
          />
          <Button
            className="mt-20"
            category="grey"
            onClick={onDownloadReport}
            isDisabled={isDownloading}
          >
            Download
          </Button>
        </div>
      )
      
    )
  }
}

SectionWeights.defaultProps = {
  className: '',
  theme: null,
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

SectionWeights.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
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

export default SectionWeights
