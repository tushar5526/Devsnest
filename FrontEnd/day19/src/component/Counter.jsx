import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    style = {
        padding: "10px",
        border: "1px solid black",
        height: '50px',
        width: '50px',
        display: "inline",
        cursor: "pointer"
    }

    render() {
        return (
            <p style={this.style} onClick={this.clicked.bind(this)}>{this.state.count}</p>
        )
    }

    clicked() {
        this.setState({
            count: this.state.count + 1
        })
    }
}