import React, { Component } from 'react'

class SetHtml extends Component {
    constructor() {
        super();
        this.state = {
            content: '<h1>React.js 小书</h1>'
        }
    }
    render() {
        return (
            <div className="editor-wrapper" dangerouslySetInnerHTML={{ __html: this.state.content}}>
                {/* {this.state.content} */}
            </div>
        )
    }
}

export default SetHtml