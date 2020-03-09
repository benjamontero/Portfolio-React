import React, { Component } from "react";

export default class Education extends Component {
    render() {
        const { fecha, lugar, ubicacion, descripcion, foto } = this.props.info;
       
        return (
            <div className=" lg:w-3/5 mx-auto mt-4 flex rounded-lg border-4 shadow-2xl items-center">

                <div className="w-40 sm:hidden md:block p-2">
                    <img className="object-cover rounded-lg" src={foto} alt="" />
                </div>
                <div className="w-full rounded-lg font-medium font-mono text-center">
                    <h1 className="font-semibold text-lg inline-block ">{fecha}</h1>
                    <h1 className="font-semibold">{lugar}</h1>
                    <h1>{ubicacion}</h1>
                    <p>{descripcion}</p>
                </div>
            </div>


        );
    }
}

