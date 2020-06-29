import React from "react"
import PropTypes from 'prop-types'
import { Route, Redirect  } from "react-router-dom"


const PrivateRoute = ({ component: C, props: cProps, ...rest }) => (
  <Route 
    {...rest} 
    render={
    props => cProps.isAuthenticated
      ?<C {...props} {...cProps} />
      :<Redirect to={{pathname: "/login"}} />
  }
  />
)

PrivateRoute.defaultProps = {
  component: null,
  props: null
}
PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  props: PropTypes.object
}

export default PrivateRoute