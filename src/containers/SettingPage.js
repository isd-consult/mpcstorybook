import React, { Component } from 'react'
import Container from 'components/atoms/layout/Container'
import PropTypes from 'prop-types'

class SettingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: "null"
    }
    this.changeTheme = this.changeTheme.bind(this)
    this.Register = this.Register.bind(this)
    this.Clear = this.Clear.bind(this)
  }

  changeTheme(e) {
    this.setState({
      theme: e.target.value
    })
  }

  Register() {
    const {theme} = this.state
    const {history} = this.props
    localStorage.setItem('theme', theme)
    history.push('/')
  }

  Clear() {
    const {history} = this.props
    localStorage.clear()
    history.push('/')
  }

  render() {
    const { theme } = this.state
    return (
      <Container>
        <div className="mt-30">
          <span htmlFor='theme'>Theme:</span>
          <select
            id='theme'
            style={{width: '70%'}}
            onChange={this.changeTheme}
            placeholder="Select Theme"
            value={theme}
          >
            <option value="null">none</option>
            <option value="men">men</option>
            <option value="women">women</option>
          </select>
        </div>
        <button 
          className="mt-40"
          type="button"
          onClick={this.Register}
        >
          Register
        </button>
        <button 
          className="ml-20 mt-40"
          type="button"
          onClick={this.Clear}
        >
          Clear
        </button>
      </Container>
    )
  }
}
SettingPage.defaultProps = {
  history: null,
}
SettingPage.propTypes = {
  history: PropTypes.object,
}
export default SettingPage