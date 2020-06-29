import React, { Component } from 'react'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import Policy from 'components/templates/Policy'
import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import { Redirect } from 'react-router-dom'
import Transition from './Transition'

class PolicyPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content:'',
      isRedirect: false
    }
  }

  componentDidMount() {
    const {match} = this.props
    // descriptor is category of policy
    // it can be one of them: ["terms_and_conditions", "returns_policy"]
    const {descriptor} = match.params
    API.get('mpc', ApiUtils.getStaticPages(descriptor))
      .then((response)=>{
        this.setState({
          title: response.name,
          content: response.content
        })
      })
      .catch(()=>{
        this.setState({isRedirect: true})
      })
  }

  render() {
    const {
      theme,
      ...others
    } = this.props
    const {
      title,
      content,
      isRedirect
    } = this.state
    if (isRedirect) return <Redirect to="/" />
    return (
      <Transition>
        <Policy
          theme={theme}
          title={title}
          menuInfo={menuInfo}
          content={content}
          {...others}
        />
      </Transition>
    )
  }
}

PolicyPage.defaultProps = {
  theme: null,
  match: null
}

PolicyPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  match: PropTypes.object
}

export default PolicyPage
