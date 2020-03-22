import React, { Component } from 'react';
import { FaStar } from '../../node_modules/react-icons/fa';

export default class footer extends Component {
    render() {
        const {name} = this.props;
        return (
            <div>
                <h1><FaStar/></h1>
            </div>
        );
    }
}