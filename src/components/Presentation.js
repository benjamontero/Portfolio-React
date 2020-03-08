import React, { Component } from 'react';


export default class Presentation extends Component {
    render() {
        const { name, roll, fondo1, logoEducacion, logoHabilidad, logoTrabajo, logoInformacion } = this.props;
        return (
            <div className="relative">
                <div className="card-intro bg-fixed bg-cover bg-center h-full rounded-b-lg">
                    <div className="font-semibold font-mono text-right text-white py-32 px-5">
                        <span className="card-intro-tittle tracking-tighter text-6xl">Hola. Soy </span>
                        <h1 className="card-intro-tittle tracking-tighter text-6xl">{name}</h1>
                        <h2 className="bg-gray-900 inline-block">{roll}</h2>
                    </div>
                    <div className="accesosDirectos right-0 left-0 absolute flex justify-around md:px-24">
                        <div className="rounded-md md:w-40 md:h-40 w-20 h-20 bg-green-600 hover:bg-green-500 border-4 shadow-2xl">
                            <a href=""><img src={logoEducacion} /></a></div>
                        <div className="rounded-md md:w-40 md:h-40 w-20 h-20 bg-yellow-600 hover:bg-yellow-500 border-4 shadow-2xl">
                            <a href=""><img src={logoHabilidad} /></a></div>
                        <div className="rounded-md md:w-40 md:h-40 w-20 h-20 bg-blue-600 hover:bg-blue-500 border-4 shadow-2xl">
                            <a href=""><img src={logoTrabajo} /></a></div>
                        <div className="rounded-md md:w-40 md:h-40 w-20 h-20 bg-red-600 hover:bg-red-500 border-4 shadow-2xl">
                            <a href=""><img src={logoInformacion} /></a></div>
                    </div>
                </div>
            </div>
        );
    }
}