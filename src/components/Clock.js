import React, { Component } from 'react'

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }

    componentWillMount() {
        this.timer = setInterval(() => {
           this.setState({
               date: new Date()
           }) 
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock