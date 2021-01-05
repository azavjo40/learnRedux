import React from 'react'
import {render} from 'react-dom'
import { compose, createStore } from 'redux'
import App from './App'
import { roodReducer } from './redux/roodReducer'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
// storage
const store = createStore(roodReducer, compose(
  // обединения стор и Redux DevTools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
  // соединения storage
  <Provider store={store}>
    <App/>
  </Provider>
)

render(app,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
