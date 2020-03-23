import React, { Component } from "react";
import Ability from "./Ability"

export default class AbilityContainer extends Component {

    render() {
        const { habilidades, logoHabilidad } = this.props;
        return (
            <div className=" mt-12 ">
                <div className="flex items-center justify-center">
                    <img className="h-20 md:h-24 object-cover" src={logoHabilidad} alt="" />
                    <h1 className=" md:text-5xl text-3xl font-medium font-mono ">Habilidades</h1>

                </div>
                <div className="grid grid-cols-3  mt-10 ">
                    {habilidades.map(habilidad => <Ability info={habilidad} key={habilidad.nombre} />)}
                </div>
            </div>
        )
    }
}
