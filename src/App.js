import React, { Component } from 'react';
import './App.css';
import Presentation from './components/Presentation';
import fondo1 from './assets/fondo1.png';
import Introduction from './components/Introduction';
import EducationContainer from './components/EducationContainer';
import HabilityContainer from './components/HabilityContainer';
import ProjectsContainer from './components/ProjectsContainer';

import { firebaseApp } from './firebase';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        roll: "",
        logoEducacion: "",
        logoHabilidad: "",
        logoTrabajo: "",
        logoInformacion: "",
        intro: "",
        misEstudios: [],
        misHabilidades: [],
        misProyectos:[],
      }
    }
    // pasame una referencia al child user de la database de firebaseApp
    this.userRef = firebaseApp.database().ref().child('user')
  }

  componentWillMount() {
    this.listenForUser(this.userRef);
  }

  listenForUser(userRef) {
    userRef.on('value', snap => {
      const user = {
        name: snap.val().name,
        roll: snap.val().roll,
        logoEducacion: snap.val().logoEducacion,
        logoHabilidad: snap.val().logoHabilidad,
        logoTrabajo: snap.val().logoTrabajo,
        logoInformacion: snap.val().logoInformacion,
        intro: snap.val().intro,
        misEstudios: snap.val().misEstudios,
        misHabilidades: snap.val().misHabilidades,
        misProyectos: snap.val().misProyectos,
        _key: snap.key
      }

      this.setState({ user: user });
    });
  }
  render() {
    const {
 

    } = this.state
    const {
      name,
      roll, 
      logoEducacion,
      logoHabilidad,
      logoTrabajo,
      logoInformacion,
      intro,
      misEstudios,
      misHabilidades,
      misProyectos,
    } = this.state.user;


    return (
      <div className="">
        <Presentation
          name={name}
          roll={roll}
          fondo1={fondo1}
          logoEducacion={logoEducacion}
          logoHabilidad={logoHabilidad}
          logoTrabajo={logoTrabajo}
          logoInformacion={logoInformacion}
        />
        <Introduction
          intro={intro}
        />
        <EducationContainer
          estudios={misEstudios} logoEducacion={logoEducacion}
        />
        <HabilityContainer
          habilidades={misHabilidades} logoHabilidad={logoHabilidad}
        />
        <ProjectsContainer
        proyectos = {misProyectos} logoTrabajo={logoTrabajo}
        />

      </div>
    );
  }
}