import ReactGA from 'react-ga'

const analyticsSignUp = () => {
  return new Promise(resolve => {
    ReactGA.event({
      category: 'Sign up',
    })
    resolve()
  })

}

export default analyticsSignUp
