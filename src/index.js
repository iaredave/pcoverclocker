import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import reduxThunk from "redux-thunk"
import axios from "axios"

// styles
import "assets/css/nucleo-icons.css"
import "assets/scss/blk-design-system-pro-react.scss?v1.1.0"
import "assets/demo/demo.css"
import "assets/demo/react-demo.css"

// my pages
import App from "./components/App"
import LandingPage from "./views/LandingPage"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Confirmation from "./components/Confirmation"
import Dashboard from "./components/Dashboard"
import reducers from "./reducers"

import authGuard from "./components/HOCs/authGuard"

axios.defaults.withCredentials = true

ReactDOM.render(
  <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
    <BrowserRouter>
      <App>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/dashboard" component={authGuard(Dashboard)} />
        <Redirect to={process.env.PUBLIC_URL + '/'} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
