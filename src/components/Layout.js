import React, { Component } from 'react'

class Layout extends Component {
    componentWillMount() {
        console.log(this.props.children);
    }
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    {this.props.children[0]} 
                </div>
                {this.props.children[1]} 
            </div>
        )
    }
}

export default Layout