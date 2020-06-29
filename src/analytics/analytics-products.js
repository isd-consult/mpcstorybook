/* eslint-disable no-console */
import { ApiUtils } from 'utils/ApiUtils'
import API from '@aws-amplify/api'
import ReactGA from 'react-ga'
import Analytics from './analytics'

export default class extends Analytics {
  extraData(existsData) {
    return {
      position_on_page: parseInt(existsData.position_on_page, 10),
    }
  }

  handleClick(node, data) {
    ReactGA.event({
      category: 'Product click',
      action: data.config_sku,
      label: data.label,
    })

    API.post('mpc', ApiUtils.trackProductClick(), {
      body: data,
    })

    if (this.debug) {
      console.warn('=========== Handle click analytics ===========')
      console.warn('Data:', data)
      console.warn('==============================================')
    }
  }

  handleView(impressions) {
    API.post('mpc', ApiUtils.trackProductView(), {
      body: {
        products: impressions,
      },
    })

    impressions.forEach(impression => {
      ReactGA.event({
        category: 'Product view',
        action: impression.config_sku,
        label: impression.label,
        nonInteraction: true,
      })
    })

    if (this.debug) {
      console.warn('=========== Handle view analytics ===========')
      console.warn('Data:', impressions)
      console.warn('=============================================')
    }
  }
}
