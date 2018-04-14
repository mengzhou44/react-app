import React, { Component } from 'react';


export default class Button extends Component {

    render() {
        if (this.props.ghost) {
            return (
                <a className='button button-border' href='#'>
                    {this.props.children}
                </a>
            );
        }
        return (
            <a className='button button-full' href='#'>
                {this.props.children}
            </a>
        );
    }
}