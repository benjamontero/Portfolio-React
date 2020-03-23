import React, { Component } from 'react';
import Project from './Project' ;

export default class ProjectsContainer extends Component {
    render() {
        const {proyectos, logoTrabajo} = this.props;
  
        return (
            <div className=" mt-12 ">
            <div className="flex items-center justify-center rounded-lg">
                <img className="h-20 md:h-24 object-cover  " src={logoTrabajo} alt=""/>
                <h1 className="md:text-5xl text-3xl font-medium font-mono px-3">Proyectos</h1>
            </div>
            {proyectos.map(proyecto => <Project info={proyecto} key={proyecto.nombre} />)}
        </div>
        );
    }
}
