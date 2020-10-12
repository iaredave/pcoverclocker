import React, { Component } from "react"
import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux"
import { compose } from "redux"
import * as actions from "../actions"

class Confirmation extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.confirm(window.location.pathname)
    if (!this.props.errorMessage) {
      this.props.history.push("/dashboard")
    }
  }

  render() {
    return <div></div>
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "confirmation" })
)(Confirmation)
