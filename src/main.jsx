import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>
)
