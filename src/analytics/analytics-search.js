import ReactGA from 'react-ga'

const analyticsSearch = query => {
  return new Promise(resolve => {
    ReactGA.event({
      category: 'Search',
      action: query,
    })
    resolve()
  })

}

export default analyticsSearch
