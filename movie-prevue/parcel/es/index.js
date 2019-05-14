import React from 'react'
import { render } from 'react-dom'
import App from './app'

class AppContainer extends React.Component {
    state = {
        name: 'Parcel Test'
    }

    componentDidMount () {
        setTimeout(() => this.setState({
            name: 'Parcel Build'
        }), 2000)
    }

    render () {
        return <App name={this.state.name} />
    }
}

render(
    <AppContainer/>,
    document.getElementById('app')
)