import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'
import icons from './icons.json'
import './icon.scss'

const Icon = props => {
  const {
    className,
    height: heightProp,
    width: widthProp,
    name: iconName,
    size,
    fill,
    flipV,
    flipH,
    left,
    right,
    theme,
    ...other
  } = props

  const name = icons[iconName] ? iconName : '404'

  let gradients
  let paths
  let circles
  let polygons


  if (icons[name].gradients) {
    gradients = icons[name].gradients.map((gradient, key) => (
      // eslint-disable-next-line react/no-danger
      <g dangerouslySetInnerHTML={{ __html: gradient }} key={key.toString()} />
    ))
  }

  if (icons[name].paths) {
    paths = icons[name].paths.map((icon, key) => (
      <path id={icon.id} key={key.toString()} fill={icon.fill} d={icon.path} />
    ))
  }

  if (icons[name].circles) {
    circles = icons[name].circles.map((icon, key) => (
      <circle
        id={icon.id}
        key={key.toString()}
        fill={icon.fill}
        cx={icon.cx}
        cy={icon.cy}
        r={icon.r}
      />
    ))
  }

  if (icons[name].polygons) {
    polygons = icons[name].polygons.map((icon, key) => (
      <polygon
        id={icon.id}
        key={key.toString()}
        fill={icon.fill}
        points={icon.points}
      />
    ))
  }

  const width = (widthProp || size) && `${widthProp || size}px`
  const height = (heightProp || size) && `${heightProp || size}px`

  let defaultSize

  if (!width && !height && !size) {
    defaultSize = 25
  }

  return (
    <svg
      width={width || defaultSize}
      height={height || defaultSize}
      fill={fill}
      className={clsx(
        'icon',
        {
          'icon--flipped-horizontal': flipH,
          'icon--flipped-vertical': flipV,
          'icon--left': left,
          'icon--right': right,
          [`icon--${theme}`]: theme
        },
        className
      )}
      viewBox={icons[name].viewbox}
      {...other}
    >
      {gradients}
      {paths}
      {circles}
      {polygons}
    </svg>
  )
}

Icon.defaultProps = {
  className: '',
  fill: '#222222',
  height: null,
  name: '404',
  size: null,
  width: null,
  flipH: false,
  flipV: false,
  left: false,
  right: false,
  theme: null,
}

Icon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  name: PropTypes.oneOf(Object.keys(icons)),
  size: PropTypes.number,
  width: PropTypes.number,
  flipV: PropTypes.bool,
  flipH: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default Icon
