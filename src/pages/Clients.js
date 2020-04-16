import React from 'react'
import { connect } from 'react-redux'

const Clients = ({ auth, history }) => {
    if (!auth.user.isCoach) {
        history.push("/dashboard")
    }

    return (
        <div>
            <h1>For coaches only</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(Clients)
