import React, { Component } from 'react';

export default class Information extends Component {
    render() {
        const { informacion, name, roll, logoInformacion } = this.props;
        return (

            <div className= 'mt-12 font-medium font-mono'>
                <div className="flex items-center justify-center rounded-lg">
                    <img className=" h-20 md:h-24 object-cover " src={logoInformacion}/>
                    <h1 className="md:text-5xl text-3xl font-medium font-mono px-3">Informacion</h1>
                </div>
                <div class="bg-white sm:max-w-full max-w-md rounded overflow-hidden shadow-lg">
                    <div class="text-center p-4  border-b">
                        <img class=" w-32 rounded-full mx-auto bg-red-600" src={informacion.fotoPerfil}/>
                        <p class="pt-2 text-lg font-semibold"> {informacion.nombreCompleto} </p>
                        <p class="text-md text-red-700">{roll}</p>
                        <p class="text-sm text-gray-700">{informacion.trabajoActual}</p>
                    </div>
                    <div class="border-b px-6 py-3 flex">
                            
                            <div class="pl-3 lg:w-3/5">
                                <p class="text-md font-semibold mb-1">Fecha de Nacimiento: {informacion.fechaNac}</p>
                                <p class="text-sm text-red-700 mb-1">Edad: {informacion.edad}</p>
                                <p class="text-md font-semibold mb-1">Estado civil: {informacion.estadoCivil}</p>
                                <p class="text-sm text-red-700 mb-1">Correo: {informacion.correo}</p>
                                <p class="text-md font-semibold mb-1">Domicilio: {informacion.direccion}</p>
                                <p class="text-sm text-red-700 mb-1">Telefono: {informacion.numTel}</p>
                            </div>
                    </div>
                    <div class="px-6 py-4 text-center ">
                        <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2">Privacy Policy</span>
                        <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2">Terms of Service</span>
                        <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2">Desarrollada por {name} 2020</span>
                    </div>
                </div>
            </div>

        );
    }
}
