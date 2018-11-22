import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    }
    render() {
        const { comment } = this.props;
        return (
            <div className="card">
                <div className="card-content">
                    {comment.username}
                </div> 
            </div>
        )
    }
}

export default Card