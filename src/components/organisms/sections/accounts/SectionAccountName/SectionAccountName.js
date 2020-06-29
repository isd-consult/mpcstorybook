import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionAccountName.scss'
import InputField from 'components/molecules/forms/inputs/InputField'
import RadioBox from 'components/molecules/forms/checkboxs/RadioBox'
import Button from 'components/molecules/buttons/Button'

class SectionAccountName extends Component {

  constructor(props) {
    super(props)
    this.state = { userInfo: null, isSaving: false }
    this.onTextChange = this.onTextChange.bind(this)
    this.onRadioChange = this.onRadioChange.bind(this)
    this.saveInfo = this.saveInfo.bind(this)
  }

  componentDidMount() {
    const {userInfo} = this.props
    this.setState({userInfo})
  }

  componentWillReceiveProps(nextProps) {
    const {userInfo} = this.props
    if (JSON.stringify(userInfo) !== JSON.stringify(nextProps.userInfo)) {
      this.setState({userInfo: nextProps.userInfo})
    }
  }

  onTextChange(event) {
    const {userInfo} = this.state
    this.setState({
      userInfo: {
        ...userInfo,
        [event.target.name]: event.target.value
      }
    })
  }

  onRadioChange(event) {
    const { userInfo } = this.state
    const value = event.target.value === 'male' && event.target.checked
      ? 'male'
      : 'female'
    this.setState({
      userInfo: {
        ...userInfo,
        [event.target.name]: value
      }
    })
  }

  async saveInfo() {
    const {userInfo} = this.state
    const {saveInfo} = this.props
    this.setState({isSaving: true})
    await saveInfo(userInfo)
    this.setState({isSaving: false})
  }

  render () {
    const {theme, history} = this.props
    const {userInfo, isSaving} = this.state

    return (
      <div
        className={clsx(
          'section-account-name',
        )}
      >
        <InputField
          className="mt-10"
          label="First Name"
          required
          placeholder="First Name"
          name="first_name"
          onChange={this.onTextChange}
          value={userInfo && userInfo.first_name}
          theme={theme}
        />
        <InputField
          className="mt-10"
          label="Last Name"
          required
          placeholder="Last Name"
          name="last_name"
          onChange={this.onTextChange}
          value={userInfo && userInfo.last_name}
          theme={theme}
        />
        <InputField
          className="mt-10"
          label="Email Address"
          required
          placeholder="Email Address"
          name="email"
          onChange={this.onTextChange}
          value={userInfo && userInfo.email}
          theme={theme}
        />
        <InputField
          className="mt-10"
          label="Identification Number"
          placeholder="Identification Number"
          name="identification_number"
          onChange={this.onTextChange}
          value={userInfo && userInfo.identification_number}
          theme={theme}
        />
        <div className="mt-15 d-flex">
          <RadioBox
            className="ml-10"
            label="Male"
            value="male"
            name="gender"
            checked={!!(userInfo && userInfo.gender === 'male')}
            onChange={this.onRadioChange}
            fw="light"
          />
          <RadioBox
            className="ml-15"
            label="Female"
            value="female"
            name="gender"
            checked={!!(userInfo && userInfo.gender === 'female')}
            onChange={this.onRadioChange}
            fw="light"
          />
        </div>
        <div className="d-flex mt-15">
          <Button
            className="mr-10"
            theme={theme}
            isCentered
            isSmall
            category='grey'
            onClick={()=>history.push("/accounts/changepassword")}
          >
            CHANGE PASSSWORD
          </Button>
          <Button
            className="ml-10"
            theme={theme}
            isCentered
            isSmall
            isLoading={isSaving}
            onClick={this.saveInfo}
          >
            SAVE
          </Button>
        </div>
      </div>
    )
  }
}

SectionAccountName.defaultProps = {
  theme: null,
  history: null,
  userInfo: null,
  saveInfo: null,
}

SectionAccountName.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  history: PropTypes.object,
  userInfo: PropTypes.object,
  saveInfo: PropTypes.func,
}

export default SectionAccountName
