import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import uuid from 'uuid'

import './TreeSelect.scss'
import Checkbox from 'components/molecules/forms/checkboxs/Checkbox'
import ButtonIcon from 'components/molecules/buttons/ButtonIcon'
import ColorCheckBox from 'components/molecules/forms/checkboxs/ColorCheckBox'

class TreeSelectItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null,
      isOpenSubTree: false,
    }
    this.onChange = this.onChange.bind(this)
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this)
    this.toggleSubTree = this.toggleSubTree.bind(this)
  }

  componentDidMount() {
    const { item } = this.props
    this.setState({ item })
  }

  componentWillReceiveProps(nextProps) {
    const { item } = this.props
    const { item: nextItem } = nextProps

    if (!nextItem.checked && nextItem.children) {
      if (nextItem.children.every(child => !child.checked)) {
        this.setState({ isOpenSubTree: false })
      } else {
        this.setState({ isOpenSubTree: true })
      }
    }

    if (item !== nextItem) {
      this.setState({ item: nextItem })
    }
  }

  onChange(data) {
    const { onChange } = this.props
    let { item } = this.state
    const { children } = item
    const index = children.findIndex(child => {
      return data.label === child.label
    })
    children.splice(index, 1, data)

    item = {
      ...item,
      children,
      checked: !item.checked ? data.checked : item.checked,
    }
    this.setState({ item })

    if (onChange) onChange(item)
  }

  onCheckBoxChange(e) {
    const { onChange } = this.props
    let { item } = this.state

    item = {
      ...item,
      checked: e.target.checked,
    }

    if (item.children && !item.checked) {
      item.children = item.children.map(child => {
        return {
          ...child,
          checked: false,
        }
      })
    }

    this.setState({
      item,
      isOpenSubTree: item.checked,
    })

    if (onChange) onChange(item)
  }

  toggleSubTree() {
    const { isOpenSubTree } = this.state
    this.setState({ isOpenSubTree: !isOpenSubTree })
  }

  render() {
    const { level, category, theme } = this.props
    const { item, isOpenSubTree } = this.state

    const isChildren = item && item.children && item.children.length

    return (
      item && (
        <div className="tree-select-item">
          <div className={`pl-${level * 20}`}>
            <div className="tree-select-item__tab">
              {category !== 'color' ? (
                <Checkbox
                  label={item.label}
                  name={`${item.label}-${uuid.v4()}`}
                  value={item.label}
                  checked={!!item.checked}
                  onChange={this.onCheckBoxChange}
                  theme={theme}
                />
              ) : (
                <ColorCheckBox
                  label={item.label}
                  name={`${item.label}-${uuid.v4()}`}
                  value={item.label.toLowerCase()}
                  checked={!!item.checked}
                  onChange={this.onCheckBoxChange}
                  theme={theme}
                />
              )}
              {isChildren && (
                <ButtonIcon
                  isNoBg
                  icon={isOpenSubTree ? 'arrow-up' : 'arrow-down'}
                  iconSize={10}
                  onClick={this.toggleSubTree}
                  theme={theme}
                />
              )}
            </div>
          </div>
          {isOpenSubTree &&
            item.children &&
            item.children.map((child, index) => {
              return (
                <TreeSelectItem
                  key={index.toString()}
                  item={child}
                  level={level + 1}
                  onChange={this.onChange}
                  theme={theme}
                />
              )
            })}
        </div>
      )
    )
  }
}

TreeSelectItem.defaultProps = {
  theme: null,
  item: null,
  level: 0,
  category: null,
  onChange: null,
}

TreeSelectItem.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  item: PropTypes.object,
  level: PropTypes.number,
  category: PropTypes.string,
  onChange: PropTypes.func,
}

class TreeSelect extends Component {
  constructor(props) {
    super(props)
    this.state = { items: null }
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    const { items } = this.props
    this.setState({ items })
  }

  componentWillReceiveProps(nextProps) {
    const { items } = this.props
    if (items !== nextProps.items) {
      this.setState({ items: nextProps.items })
    }
  }

  onChange(data) {
    const { onChange, name } = this.props
    const { items } = this.state
    const index = items.findIndex(item => {
      return data.label === item.label
    })
    items.splice(index, 1, data)
    this.setState({ items })
    onChange({ name, children: items })
  }

  render() {
    const { className, theme, category } = this.props
    const { items } = this.state
    return (
      <div className={clsx('tree-select', className)}>
        {items &&
          items.map((item, index) => {
            return (
              <TreeSelectItem
                key={index.toString()}
                item={item}
                level={1}
                category={category}
                onChange={this.onChange}
                theme={theme}
              />
            )
          })}
      </div>
    )
  }
}

TreeSelect.defaultProps = {
  className: '',
  theme: null,
  name: null,
  items: null,
  category: null,
  onChange: null,
}

TreeSelect.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  name: PropTypes.string,
  items: PropTypes.array,
  category: PropTypes.string,
  onChange: PropTypes.func,
}

export default TreeSelect
