import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionGenderSelection.scss'
import Title from 'components/molecules/texts/Title'
import RadioBox from 'components/molecules/forms/checkboxs/RadioBox'

class SectionGenderSelection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gender: null
    }
    this.onGenderChange = this.onGenderChange.bind(this)
  }

  componentDidMount() {
    const {gender} = this.props
    this.setState({gender})
  }

  componentWillReceiveProps(nextProps) {
    const {gender} = this.props
    if (gender !== nextProps.gender) {
      this.setState({gender: nextProps.gender})
    }
  }

  onGenderChange(e) {
    const {onGenderChange} = this.props
    this.setState({gender:e.target.value})
    if (onGenderChange) onGenderChange(e.target.value)
  }

  render () {
    const {
      className,
      title
    } = this.props
    const {gender} = this.state

    return (
      <div
        className={clsx(
          'section-gender-selection',
          className
        )}
      >
        <Title
          title={title}
          mode="account"
        />
        <RadioBox
          className="mt-10"
          name="genders"
          label="Ladies"
          value="ladies"
          checked={gender==="ladies"}
          onChange={this.onGenderChange}
        />
        <RadioBox
          className="mt-10"
          name="genders"
          label="Men"
          value="mens"
          checked={gender==="mens"}
          onChange={this.onGenderChange}
        />
        <RadioBox
          className="mt-10"
          name="genders"
          label="Kids"
          value="kids"
          checked={gender==="kids"}
          onChange={this.onGenderChange}
        />
      </div>
    )
  }
}

SectionGenderSelection.defaultProps = {
  className: '',
  title: '',
  gender: null,
  onGenderChange: null,
}

SectionGenderSelection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  gender: PropTypes.oneOf([null, 'mens', 'ladies', 'kids']),
  onGenderChange: PropTypes.func
}

export default SectionGenderSelection
