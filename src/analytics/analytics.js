/* eslint-disable no-console */
import { isInViewport } from 'utils'

export default class {
  constructor({
    scrollTimeout = 1000,
    initial = false,
    debug = false,
    visiblePercentage = 100,
    selector = '.selector',
    datasetId = 'id',
    datasets = [],
  } = {}) {
    this.scrollTimeout = scrollTimeout
    this.initial = initial
    this.debug = debug
    this.visiblePercentage = visiblePercentage
    this.selector = selector
    this.datasetId = datasetId
    this.sendItems = []
    this.sentItems = []
    this.trackClicksIds = []
    this.datasets = datasets
    this.scrollTimer = null
    this.scrollTrack = this.scrollTrack.bind(this)
  }

  // =======================================
  // Initialize
  // =======================================
  scrollMount() {
    this.scrollTracking()
  }

  trackClicks(ids = []) {
    if (this.debug) {
      console.warn('===== Clicks tracking =====')
      console.warn('Ids:', ids)
      console.warn('===========================')
    }

    this.trackClicksIds = ids

    ids.forEach(id => {
      const node = document.querySelector(`[data-${this.datasetId}="${id}"]`)

      if (node) {
        node.removeEventListener('click', e =>
          this.handleClick(e.currentTarget, this.getAllData(node)),
        )
        node.addEventListener('click', e =>
          this.handleClick(e.currentTarget, this.getAllData(node)),
        )
      }

    })
  }

  clicksUnmount() {
    if (this.debug)
      console.warn('Click tracking:', this.trackClicksIds, 'was unmounted.')
    this.trackClicksIds.forEach(id => {
      const node = document.querySelector(`[data-${this.datasetId}="${id}"]`)

      if (node) {
        node.removeEventListener('click', e =>
          this.handleClick(e.currentTarget, this.getAllData(node)),
        )
      }
    })
  }

  // =======================================
  // Get product nodes
  // =======================================
  getProductNodes() {
    return document.querySelectorAll(this.selector)
  }

  // =======================================
  // Get product data
  // =======================================
  getData(node) {
    const data = {}

    Object.keys(this.datasets).forEach(key => {
      data[key] = node.dataset[this.datasets[key]]
    })

    return data
  }

  extraData(existsData) {
    if (this.debug) console.warn('Exists data: ', existsData)

    return {
      timestamp: Math.floor(new Date().getTime() / 1000),
    }
  }

  getAllData(node) {
    return {
      ...this.getData(node),
      ...this.extraData(this.getData(node)),
    }
  }

  // =======================================
  // On scroll done
  // =======================================
  doneScroll() {
    const impressions = []

    while (this.sendItems.length > 0) {
      const item = this.sendItems.pop()
      const data = this.getAllData(item.node)

      impressions.push(data)

      this.sentItems.push({ id: item.id, node: item.node })
    }

    if (impressions.length > 0) {
      this.handleView(impressions)
    }

    clearTimeout(this.scrollTimer)
  }

  // =======================================
  // Detect visible on scroll
  // =======================================
  detectVisible() {
    const elements = this.getProductNodes()
    if (elements.length === 0) return

    elements.forEach(node => {
      const id = node.dataset[this.datasetId]
      if (!id) return

      if (isInViewport(node, this.visiblePercentage)) {
        if (
          this.sentItems.findIndex(x => x.id === id) === -1 &&
          this.sendItems.findIndex(x => x.id === id) === -1
        ) {
          this.sendItems.push({ id, node })
        }
      }
    })
  }

  // =======================================
  // Product scroll tracking
  // =======================================
  scrollTrack() {
    if (this.debug) console.log('Scroll track function.')
    clearTimeout(this.scrollTimer)
    this.detectVisible()
    this.scrollTimer = setTimeout(() => {
      this.doneScroll()
    }, this.scrollTimeout)
  }

  scrollTracking() {
    if (this.initial) {
      this.detectVisible()
      this.doneScroll()
    }
    if (this.debug)
      console.warn('Scroll tracking:', this.selector, 'was mounted.')
    window.addEventListener('scroll', this.scrollTrack)
  }

  scrollUnmount() {
    if (this.debug)
      console.warn('Scroll tracking:', this.selector, 'was unmounted.')
    window.removeEventListener('scroll', this.scrollTrack)

    this.sentItems = []
    this.sendItems = []
  }

  // =======================================
  // Handle click
  // =======================================
  handleClick(node, id, data) {
    if (this.debug) {
      console.warn('=========== Handle click analytics ===========')
      console.warn('Id:', id)
      console.warn('Node:', node)
      console.warn('Data:', data)
      console.warn('==============================================')
    }
  }

  // =======================================
  // Handle view
  // =======================================
  handleView(impressions) {
    if (this.debug) {
      console.warn('=========== Handle view analytics ===========')
      console.warn('Data:', impressions)
      console.warn('=============================================')
    }
  }
}
