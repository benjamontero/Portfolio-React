import React, { Component } from "react";

export default class Hability extends Component {

    render() {
        const { nombre, nivel, foto } = this.props.info;

        return (
            <div className="w-32 h-32 md:w-auto md:h-auto shadow-2xl border rounded-lg">
                <div className="flex items-center  flex-col p-3">
                    <img className="object-cover h-20 md:h-32 lg:h-40 " src={foto} alt="" />
                    <div className="" >
                        <h1 className="">{nombre}</h1>
                    </div>
                </div>
            </div>
        );
    }
}