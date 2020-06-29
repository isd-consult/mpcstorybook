import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import MPC from 'containers/MPC'
import store, { history } from './redux'

class App extends Component {
  render() {
    const supportsHistory = 'pushState' in window.history
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} forceRefresh={!supportsHistory}>
          <MPC />
        </ConnectedRouter>
      </Provider>
    )
  }
}
export default App
