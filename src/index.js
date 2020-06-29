import React from 'react'
import ReactDOM from 'react-dom'

import Auth from '@aws-amplify/auth'
import API from '@aws-amplify/api'

import App from 'App'
import { awsConfig } from './constants/aws'
import 'styles/app.scss'

Auth.configure(awsConfig)
API.configure(awsConfig)

ReactDOM.render(<App />, document.getElementById('root'))


