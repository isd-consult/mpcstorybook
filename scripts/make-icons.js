/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const jsdom = require('jsdom')

const { JSDOM } = jsdom

const iconsPath = './src/components/atoms/common/Icon/icons'
const jsonPath = './src/components/atoms/common/Icon/icons.json'

const icons = {}

console.log('Starting convert icons to JSON...')
// eslint-disable-next-line consistent-return
fs.readdir(iconsPath, (err, files) => {
  if (err) {
    console.log('Error:', err)
    return false
  }

  asyncForEach(files, async (file, index) => {
    if (file.startsWith('.')) return

    const filePath = path.join(iconsPath, file)
    const fileName = path.basename(file, '.svg')

    icons[fileName] = {
      viewbox: ''
    }

    await readFile(filePath)
      .then(data => {
        const { window } = new JSDOM(data)
        const { document } = window
        const viewbox =
          document.querySelector('svg').getAttribute('viewBox') ||
          '0 0 1024 1024'

        icons[fileName].viewbox = viewbox

        const nodeGradients = document.querySelectorAll('linearGradient')
        const nodeCircle = document.querySelectorAll('circle')
        const nodePath = document.querySelectorAll('path')
        const nodeRect = document.querySelectorAll('rect')
        const nodePolygon = document.querySelectorAll('polygon')

        // If gradients
        if (nodeGradients.length) {
          icons[fileName].gradients = []
          nodeGradients.forEach(item => {
            icons[fileName].gradients.push(item.outerHTML)
          })
        }

        // If circles
        if (nodeCircle.length) {
          icons[fileName].circles = []
          nodeCircle.forEach((item, i) => {
            const circleData = {
              fill: item.getAttribute('fill'),
              cx: item.getAttribute('cx'),
              cy: item.getAttribute('cy'),
              r: item.getAttribute('r'),
              id: item.getAttribute('id') || i + 1
            }

            Object.keys(circleData).forEach(
              key => !circleData[key] === undefined && delete circleData[key]
            )
            icons[fileName].circles.push(circleData)
          })
        }

        // If paths
        if (nodePath.length) {
          icons[fileName].paths = []
          nodePath.forEach(item => {
            const pathData = {
              fill: item.getAttribute('fill'),
              path: item.getAttribute('d'),
              id: item.getAttribute('id')
            }

            Object.keys(pathData)
              .forEach(key => !pathData[key] && delete pathData[key])

            icons[fileName].paths.push(pathData)
          })
        }

        // If rectangle
        if (nodeRect.length) {
          icons[fileName].rects = []
          nodeRect.forEach((item, i) => {
            const rectangleData = {
              fill: item.getAttribute('fill'),
              x: item.getAttribute('x'),
              y: item.getAttribute('y'),
              width: item.getAttribute('width'),
              height: item.getAttribute('height'),
              id: item.getAttribute('id') || i + 1
            }

            Object.keys(rectangleData)
              .forEach(key => !rectangleData[key] && delete rectangleData[key])
            icons[fileName].rects.push(rectangleData)
          })
        }

        // If polygons
        if (nodePolygon.length) {
          icons[fileName].polygons = []
          nodePolygon.forEach((item, i) => {
            const polygonData = {
              fill: item.getAttribute('fill'),
              points: item.getAttribute('points'),
              id: item.getAttribute('id') || i + 1
            }

            Object.keys(polygonData)
              .forEach(key => !polygonData[key] && delete polygonData[key])
            icons[fileName].polygons.push(polygonData)
          })
        }
      })
      .then(() => {
        if (files.length - 1 === index) {
          writeFile(jsonPath, JSON.stringify(icons)).then(() => {
            console.log('All icons successfully converted...')
          })
        }
      })
  })
})

// ============================================================
// Native promises (Node 8.0.0)
// ============================================================
const readFile = (url, opts = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.readFile(url, opts, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })

const writeFile = (url, data, opts = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.writeFile(url, data, opts, err => {
      if (err) reject(err)
      else resolve()
    })
  })

async function asyncForEach (array, callback) {
  for (let index = 0; index < array.length; index++) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array)
  }
}
