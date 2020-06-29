import React, { Component } from 'react'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import InviteFriedns from 'components/templates/InviteFriends'
// eslint-disable-next-line
import {ApiUtils} from 'utils/ApiUtils'
// eslint-disable-next-line
import API from '@aws-amplify/api'

class AccountInfoPage extends Component {
  constructor(props) {
    super(props)
    this.shareOnFacebook = this.shareOnFacebook.bind(this)
    this.sendInvitation = this.sendInvitation.bind(this)
    this.copyInvitationLink = this.copyInvitationLink.bind(this)
    this.shareOnTwitter = this.shareOnTwitter.bind(this)
  }

  // eslint-disable-next-line
  shareOnFacebook() {
    // console.log('share on facebook')
  }

  // eslint-disable-next-line
  sendInvitation(toEmail) {
    API.post('mpc', ApiUtils.sendInvitation(), {body:toEmail})
    .then((response) => {
      if(response.status){
        // console.log('sent invitation')
      }
    })
  }

  // eslint-disable-next-line
  copyInvitationLink() {
    // console.log('copy invitation link')
  }

  // eslint-disable-next-line
  shareOnTwitter() {
    // console.log('share on twitter')
  }

  render() {
    const {
      theme,
      ...others
    } = this.props

    return (
      <InviteFriedns
        menuInfo={menuInfo}
        theme={theme}
        sendInvitation={this.sendInvitation}
        copyInvitationLink={this.copyInvitationLink}
        shareOnFacebook={this.shareOnFacebook}
        shareOnTwitter={this.shareOnTwitter}
        {...others}
      />
    )
  }
}

AccountInfoPage.defaultProps = {
  theme: null
}
AccountInfoPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women'])
}
export default AccountInfoPage
