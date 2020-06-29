import React, { Component } from 'react'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import Weights from 'components/templates/Weights'
import Transition from 'containers/Transition'
import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'


class WeightsPage extends Component {
  constructor(props) {
    super(props)
    const {
      user
    } = this.props
    const isAdmin = user && user.groups && user.groups.includes('admin')
    this.state = {
      isAdmin,
      isLoading: false,
      isSaving: false,
      isDownloading: false,
      weights: {},
      dateRange: {},
    }
    this.getWeights = this.getWeights.bind(this)
    this.onWeightChanged = this.onWeightChanged.bind(this)
    this.onSaveWeights = this.onSaveWeights.bind(this)
    this.onDateRangeChange = this.onDateRangeChange.bind(this)
    this.onDownloadReport = this.onDownloadReport.bind(this)
  }

  componentDidMount() {
    this.getWeights()
  }

  onWeightChanged(e) {
    const {weights} = this.state
    weights[e.target.name] = e.target.value
    this.setState({weights})
  }

  onDownloadReport() {
    // const {
    //   from, to
    // } = this.state.dateRange
    this.setState({isDownloading: true})
    // TODO here.
    this.setState({isDownloading: false})
  }

  onDateRangeChange(e) {
    const { dateRange } = this.state
    dateRange[e.target.name] = e.target.value
    this.setState({ dateRange })
  }

  onSaveWeights() {
    this.setState({isSaving: true})
    const { weights } = this.state
    API.post(
      'mpc',
      ApiUtils.getAdminScoringWeight(),
      { body: weights }
    ).then(() => {
      this.setState({
        isSaving: false
      })
    }).catch(()=>{
      this.setState({isSaving: false})
    })
  }

  getWeights() {
    this.setState({isLoading: true})
    API.get(
      'mpc',
      ApiUtils.getAdminScoringWeight()
    ).then(response=>{
      const {
        question, order, track
      } = response
      this.setState({
        weights: {
          question, order, track
        },
        isLoading: false
      })
    }).catch(()=>{
      this.setState({isLoading: false})
    })
  }

  render() {
    const {
      theme, ...others
    } = this.props

    const {
      isSaving,
      isLoading,
      isDownloading,
      isAdmin,
      dateRange,
      weights,
    } = this.state

    return (
      <Transition>
        <Weights
          theme={theme}
          menuInfo={menuInfo}
          isAdmin={isAdmin}
          weights={weights}
          dateRange={dateRange}
          isLoading={isLoading}
          isSaving={isSaving}
          isDownloading={isDownloading}
          onWeightChanged={this.onWeightChanged}
          onSaveWeights={this.onSaveWeights}
          onDateRangeChange={this.onDateRangeChange}
          onDownloadReport={this.onDownloadReport}
          {...others}
        />
      </Transition>
    )
  }
}

WeightsPage.defaultProps = {
  theme: null,
  user: null,
}

WeightsPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  user: PropTypes.object,
}

export default WeightsPage
