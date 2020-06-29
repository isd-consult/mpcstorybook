import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './MultiCategoriesSelect.scss'
import CategoryCheckBox
  from 'components/molecules/forms/checkboxs/CategoryCheckBox'
import Col from 'components/atoms/layout/Col'

class MultiCategoriesSelect extends Component {
  constructor(){
    super()
    this.state = {selected:[]}
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    const {selected} = this.props
    this.setState({selected})
  }

  componentWillReceiveProps(nextProps) {
    const {selected} = this.props
    if (selected !== nextProps.selected) {
      this.setState({selected: nextProps.selected})
    }
  }

  onChange(event) {
    const {onChange, mode, name} = this.props
    let {selected} = this.state
    const pos = selected.indexOf(event.target.value)

    if (mode==='single') {
      if (pos < 0 && event.target.checked) {
        selected=[event.target.value]
      } else {
        selected=[]
      }
    } else if (mode==='multiple') { // mode = 'multiple'
      if (pos < 0 && event.target.checked) {
        selected.push(event.target.value)
      } else {
        selected.splice(pos, 1)
      }
    }
    this.setState({selected})
    if (typeof onChange === "function") onChange({name, selected})
  }

  render () {
    const {
      className,
      options,
    } = this.props
    const {
      selected
    } = this.state

    return (
      <div
        className={clsx(
          'multi-categories-select',
          className
        )}
      >
        {options && options.map((option, index)=>(
          <Col key={index.toString()} xs={4} sm={3} md={2}>
            <CategoryCheckBox
              name={option.name}
              label={option.label}
              value={option.value.toString()}
              image={option.image}
              onChange={this.onChange}
              checked={selected && selected.indexOf(option.value.toString())>-1}
            />
          </Col>
        ))}
      </div>
    )
  }
}

MultiCategoriesSelect.defaultProps = {
  className: '',
  name: null,
  options: null,
  onChange: null,
  selected: null,
  mode: 'multiple'
}

MultiCategoriesSelect.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  selected: PropTypes.array,
  mode: PropTypes.oneOf(['multiple', 'single'])
}

export default MultiCategoriesSelect
