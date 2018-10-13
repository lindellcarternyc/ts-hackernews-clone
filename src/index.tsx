import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'

import registerServiceWorker from './registerServiceWorker'

import GlobalStyles from './styles/GlobalStyles'

import configureStore from './store'

const renderApp = () => {
  const store = configureStore()

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
  )
}

GlobalStyles()

registerServiceWorker()
renderApp()