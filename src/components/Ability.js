import React, { Component, Fragment } from "react";
import { FaStar } from 'react-icons/fa';

export default class Ability extends Component {



    getlevelxp(nivel, FaStar) {

        switch (nivel) {
            case 2:
                return (
                    <div className="flex flex-row"><FaStar /><FaStar /></div>
                );
            case 3:
                return (
                    <div className="flex flex-row"><FaStar /><FaStar /><FaStar /></div>

                );
            case 4:
                return (
                    <div className="flex flex-row"><FaStar /><FaStar /><FaStar /><FaStar /></div>
                );
            case 5:
                return (
                    <div className="flex flex-row text-green-700"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                );
            default: return 'nada';
        }

    }

    render() {
        const { nombre, nivel, foto } = this.props.info;
        const levelxp = this.getlevelxp(nivel, FaStar);


        return (
            <div className="w-32 md:w-auto md:h-auto shadow-2xl border rounded-lg">
                <div className="flex items-center object-cover flex-col">
                    <img className="object-cover h-20 md:h-32 lg:h-40 " src={foto} alt="" />
                    <div className="" >
                        <h1 className="text-center">{nombre}</h1>
                        <div className='text-green-700 text-2xl'>{levelxp}</div>
                    </div>
                </div>
            </div>
        );
    }
}