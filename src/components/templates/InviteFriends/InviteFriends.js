import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './InviteFriends.scss'
import SectionAccountTitle 
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import InputField from 'components/molecules/forms/inputs/InputField'
import Button from 'components/molecules/buttons/Button'
import BaseLayout from 'components/layouts/BaseLayout'
import Text from 'components/atoms/common/Text'
import Container from 'components/atoms/layout/Container'
import Icon from 'components/atoms/common/Icon'

class InviteFriends extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
    this.onTextChange = this.onTextChange.bind(this)
  }

  onTextChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    const {
      theme,
      cartCount,
      menuInfo,
      className,
      sendInvitation,
      copyInvitationLink,
      shareOnFacebook,
      shareOnTwitter,
      ...others
    } = this.props

    const {email} = this.state

    return (
      <BaseLayout 
        theme={theme}
        cartCount={cartCount}
        menuInfo={menuInfo}
        {...others}
      >
        <Container
          className="mb-20"
        >
          <SectionAccountTitle
            title="Invite Friends"
            link="Back to My Account"
            href="/accounts"
          />
          <div className="mt-20 invite-friends__email-icon">
            <Icon
              name="email"
              size={60}
            />
          </div>
          <Text
            className="mt-20"
            size="xxl"
            fw="bold"
            align="center"
          >
            Send your friends an invite email
          </Text>
          <Text
            size="small"
            className="mt-10"
            color="grey"
            align="center"
          >
            Invite your friends to RunwaySale via email. When your
            friends click on it and sign up, you&#39;ll get R50.00 after
            their first order ships.
          </Text>
          <InputField
            className="mt-10"
            label="Email"
            required
            name="email"
            onChange={this.onTextChange}
            value={email}
          />
          <Button
            className="mt-20 mb-20 invite-friends__send-invitation"
            theme={theme}
            onClick={()=>sendInvitation(
              {
                "email": email
              }
            )}
          >
            SEND
          </Button>
          <Text
            className="mt-20"
            size="xxl"
            fw="bold"
            align="center"
          >
            More ways to invite your friends
          </Text>
          <Text
            size="small"
            className="mt-10"
            color="grey"
            align="center"
          >
            Share  your unique link with friends, when  your friends 
            click on it and sign up, you&#39;ll get R50.00 after their 
            first order ships.
          </Text>
          <Button
            className="mt-20 invite-friends__copy-invitation-link"
            theme={theme}
            icon="link"
            leftIcon
            onClick={copyInvitationLink}
          >
            COPY LINK
          </Button>
          <Button
            className="mt-20 mr-10 invite-friends__share-on-facebook"
            isSmall
            theme={theme}
            icon="facebook-solid"
            leftIcon
            onClick={shareOnFacebook}
          >
            SHARE ON FACEBOOK
          </Button>
          <Button
            className="mt-20 ml-10 invite-friends__share-on-twitter"
            isSmall
            theme={theme}
            icon="twitter-solid"
            leftIcon
            onClick={shareOnTwitter}
          >
            SHARE ON TWITTER
          </Button>
        </Container>
      </BaseLayout>
    )
  }
}

InviteFriends.defaultProps = {
  className: '',
  theme: null,
  cartCount: null,
  menuInfo: null,
  sendInvitation: null,
  copyInvitationLink: null,
  shareOnFacebook: null,
  shareOnTwitter: null
}

InviteFriends.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  cartCount:PropTypes.number,
  menuInfo:PropTypes.object,
  sendInvitation: PropTypes.func,
  copyInvitationLink: PropTypes.func,
  shareOnFacebook: PropTypes.func,
  shareOnTwitter: PropTypes.func
}

export default InviteFriends
