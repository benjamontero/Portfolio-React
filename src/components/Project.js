import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        const {nombre,foto}=this.props.info;
        return (
            <div className=" lg:w-3/5 mx-auto mt-4 rounded-lg  shadow-2xl">

            <div className="w-full rounded-lg font-medium font-mono text-center">
                <h1 className="font-semibold text-lg inline-block">{nombre}</h1>
                <img className="object-cover rounded-lg mx-auto" src={foto} alt="" />
            </div>
        </div>
        );
    }
}

