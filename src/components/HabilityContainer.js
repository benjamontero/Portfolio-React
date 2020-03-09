import React, { Component } from "react";
import Hability from "./Hability"

export default class HabilityContainer extends Component {

    render() {
        const { habilidades, logoHabilidad } = this.props;
        return (
            <div className=" mt-12 ">
                <div className="flex items-center justify-center ">
                    <img className="h-24 object-cover  " src={logoHabilidad} alt="" />
                    <h1 className=" text-5xl font-medium font-mono ">Habilidades</h1>

                </div>
                <div className="grid grid-cols-3 gap-4 mt-10 ">
                    {habilidades.map(habilidad => <Hability info={habilidad} key={habilidad.nombre} />)}
                </div>
            </div>
        )
    }
}
