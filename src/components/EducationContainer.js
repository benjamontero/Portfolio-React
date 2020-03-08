import React, { Component } from 'react';
import Education from "./Education";

export default class EducationContainer extends Component {
    render() {
        const { estudios,logoEducacion} = this.props;
        return (
            <div className=" mt-12">
                <div className="flex items-center bg-green-600  rounded-br-full ">
                    <img className="h-24 object-cover bg-green-400 px-2" src={logoEducacion} alt=""/>
                    <h1 className=" text-5xl font-medium font-mono px-3">Educacion</h1>
                </div>
                {estudios.map(estudio => <Education info={estudio} key={estudio.fecha} />)}
            </div>
        );
    }
}