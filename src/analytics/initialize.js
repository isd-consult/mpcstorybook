import config from 'config'
import ReactGA from 'react-ga'
import { history } from '../redux'

const initializeGA = () => {
  ReactGA.initialize(config.social.GOOGLE_ANALYTICS_TRACKING_ID)
  ReactGA.set({
    page: history.location.pathname,
    userId: localStorage.getItem('rws-session-id')
  })
  ReactGA.pageview(history.location.pathname)

  history.listen(location => {
    ReactGA.pageview(location.pathname)
  })
}

export default initializeGA
