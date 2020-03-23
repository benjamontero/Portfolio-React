import React, { Component } from 'react';
import Education from "./Education";

export default class EducationContainer extends Component {
    render() {
        const { estudios,logoEducacion} = this.props;
        return (
            <div className=" mt-12 ">
                <div className="flex items-center justify-center rounded-lg">
                    <img className=" h-20 md:h-24 object-cover  " src={logoEducacion} alt=""/>
                    <h1 className="md:text-5xl text-3xl font-medium font-mono px-3">Educacion</h1>
                </div>
                {estudios.map(estudio => <Education info={estudio} key={estudio.fecha} />)}
            </div>
        );
    }
}