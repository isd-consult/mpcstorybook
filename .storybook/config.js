import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

import { withKnobs } from '@storybook/addon-knobs'

const req = require.context('../src/components', true, /.stories.js$/)

import '../src/styles/app.scss'

addDecorator(StoryRouter())

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withKnobs)

configure(loadStories, module)
