// Example:
// node create-component atoms Button
// or
// npm run create-component atoms Button

const fs = require('fs')
const path = require('path')

const componentsPath = 'src/components/'
const componentPath = process.argv[2]
const componentName = process.argv[3]

const fullPath = path.join(componentsPath, componentPath, componentName)

if (!componentPath) throw new Error(`Please enter first arg.`)
if (!componentName) throw new Error(`Please enter second arg.`)

// ============================================================
// Helpers
// ============================================================
function capitalizePath(pathName) {
  const capitalizedArray = pathName
    .split('/')
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
  return capitalizedArray.join('/')
}

function camelToSnake(name) {
  return name
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()
}

function mkDirByPathSync(targetDir, { isRelativeToScript = false } = {}) {
  const {sep} = path
  const initDir = path.isAbsolute(targetDir) ? sep : ''
  const baseDir = isRelativeToScript ? __dirname : '.'

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir)
    try {
      fs.mkdirSync(curDir)
    } catch (err) {
      if (err.code === 'EEXIST') {
        // curDir already exists!
        return curDir
      }

      if (err.code === 'ENOENT') {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`)
      }

      const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1
      if ((!caughtErr || caughtErr) && curDir === path.resolve(targetDir)) {
        throw err // Throw if it's just the last created dir.
      }
    }

    return curDir
  }, initDir)
}

mkDirByPathSync(fullPath)

// Files paths
const componentJsPath = path.join(fullPath, `${componentName}.js`)
const componentIndexJsPath = path.join(fullPath, `index.js`)
const componentStoryPath = path.join(fullPath, `${componentName}.stories.js`)
const componentScssPath = path.join(fullPath, `${componentName}.scss`)

// ============================================================
// Create index.js
// ============================================================
fs.writeFileSync(
  componentIndexJsPath,
  `export { default } from './${componentName}'
`,
)

// ============================================================
// Create component.js
// ============================================================
fs.writeFileSync(
  componentJsPath,
  `import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './${componentName}.scss'

class ${componentName} extends Component {
  render () {
    const {
      className
    } = this.props

    return (
      <div
        className={clsx(
          '${camelToSnake(componentName)}',
          className
        )}
      >
        ${camelToSnake(componentName)}
      </div>
    )
  }
}

${componentName}.defaultProps = {
  className: ''
}

${componentName}.propTypes = {
  className: PropTypes.string
}

export default ${componentName}
`,
)

// ============================================================
// Create component.scss
// ============================================================
fs.writeFileSync(
  componentScssPath,
  `@import '~styles/settings/variables';

.${camelToSnake(componentName)} {
  $root: &;

  position: relative;
}
`,
)

// ============================================================
// Create component.stories.js
// ============================================================
fs.writeFileSync(
  componentStoryPath,
  `import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import ${componentName} from './${componentName}'

storiesOf('${capitalizePath(componentPath)}', module)
  .add('${componentName}', () => (
    <${componentName}
      className={text('Class', '')}
    />
  ))
`,
)
