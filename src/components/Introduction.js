import React, { Component } from 'react';

export default class Introduction extends Component {
    render() {
        const {intro} = this.props
        return (
            <div className="mt-32 p-8 bg-gray-900 text-white w-2/3 mx-auto rounded-lg">
                <h1 className="text-center font-semibold font-mono">{intro}</h1>
            </div>
        );
    }
}
