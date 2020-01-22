import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    focusEventHandler = () => {
        console.log('Good!')
    }

    blurEventHandler = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.focusEventHandler} onBlur={this.blurEventHandler}></button>
        )
    }
}