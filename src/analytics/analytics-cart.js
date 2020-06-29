import ReactGA from 'react-ga'

export const analyticsRemoveFromCart = sku => {
  return new Promise(resolve => {
    ReactGA.event({
      category: 'Cart - remove',
      action: sku,
    })
    resolve()
  })

}

export const analyticsAddToCart = sku => {
  return new Promise(resolve => {
    ReactGA.event({
      category: 'Cart - add',
      action: sku,
    })
    resolve()
  })
}
