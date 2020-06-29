import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionSizesSelection.scss'
import Title from 'components/molecules/texts/Title'
import Divider from 'components/atoms/common/Divider'
import RadioBox from 'components/molecules/forms/checkboxs/RadioBox'
import Button from 'components/molecules/buttons/Button'
import MultiSizesSelect
  from 'components/molecules/forms/multiselects/MultiSizesSelect'

class SectionSizesSelection extends Component {
  constructor(props) {
    super(props)
    this.state = {selected: {}}
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    const {selected} = this.props
    this.setState({selected})
  }

  componentWillReceiveProps(nextProps) {
    const {selected} = this.props
    if (selected !== nextProps.selected) {
      this.setState({selected:nextProps.selected})
    }
  }

  onChange(event) {
    const {selected} = this.state
    this.setState({
      selected: {
        ...selected,
        [event.name]: event.selected
      }
    })
  }

  onClick() {
    const {onSaveSizes} = this.props
    const {selected} = this.state
    if (onSaveSizes) onSaveSizes(selected)
  }

  render () {
    const {
      className,
      sizesOptions,
    } = this.props
    const {
      selected
    } = this.state
    const keys = sizesOptions && Object.keys(sizesOptions)
    return (
      <div
        className={clsx(
          'section-sizes-selection',
          className
        )}
      >
        <div className="section-sizes-selection__multiselects">
          { 
          keys && keys.map((key, index)=>(
            <div key={index.toString()}>
              <Title
                className="mt-20 ml-15 mr-15 "
                title={key}
                mode="account"
              />
              <MultiSizesSelect
                name={key}
                className="ml-15 mr-15 mb-5"
                options={sizesOptions[key]}
                onChange={this.onChange}
                selected={(selected && key in selected)?selected[key]:[]}
              />
              {index < (keys.length-1)?<Divider />:null}
            </div>
          ))
        }
        </div>
        <RadioBox
          className="mt-20 ml-10 mb-20"
          label="Always set filter to My Sizes"
          value="yes"
          checked
        />
        <Button
          className="section-sizes-selection__savebtn"
          auto
          onClick={this.onClick}
        >
          SAVE
        </Button>
      </div>
    )
  }
}

SectionSizesSelection.defaultProps = {
  className: '',
  selected: null,
  sizesOptions: null,
  onSaveSizes: null
}

SectionSizesSelection.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.object,
  sizesOptions: PropTypes.object,
  onSaveSizes: PropTypes.func
}

export default SectionSizesSelection
