import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const SecureRoute = ({ component: Component, auth: { validToken, loading }, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        validToken && !loading ?
          (<Component {...props} />) : (<Redirect to="/login" />)
      } />
  )
}

SecureRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(SecureRoute)
