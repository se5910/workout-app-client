import React from "react";
import { connect } from 'react-redux'

const Home = ({ auth, history }) => {

  if (auth.validToken) {
    history.push("/dashboard")
  }

  return <h1>Hello, Please register or login</h1>;

}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Home);
