import React from 'react';


class Home extends React.Component {
    state = { res: "home" }

    componentDidMount() {
        fetch('/rest')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({ res: myJson.message })
            })
    }

    render() {
        return (
            <h1>Hello from {this.state.res}</h1>
        )
    }
}

export default Home;