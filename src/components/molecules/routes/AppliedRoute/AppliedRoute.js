import React from "react"
import PropTypes from 'prop-types'
import { Route } from "react-router-dom"

const AppliedRoute = ({ component: C, props: cProps, ...rest }) =>
  <Route {...rest} render={props => <C {...props} {...cProps} />} />

AppliedRoute.defaultProps = {
  component: null,
  props: null
}
AppliedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  props: PropTypes.object
}

export default AppliedRoute