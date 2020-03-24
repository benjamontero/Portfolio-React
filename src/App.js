import React, { Component } from 'react';
import './App.css';
import Presentation from './components/Presentation';
import fondo1 from './assets/fondo1.png';
import Introduction from './components/Introduction';
import EducationContainer from './components/EducationContainer';
import AbilityContainer from './components/AbilityContainer';
import ProjectsContainer from './components/ProjectsContainer';

import Effects from './components/Effects'
import Information from './components/Information';

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
        misProyectos: [],
        miInformacion:[],
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
        miInformacion: snap.val().miInformacion,
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
      miInformacion,
    } = this.state.user;


    return (
      <div className=" lg:w-2/3 mx-auto">
        <Effects />
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
        <AbilityContainer
          habilidades={misHabilidades} logoHabilidad={logoHabilidad}
        />
        <ProjectsContainer
          proyectos={misProyectos} logoTrabajo={logoTrabajo}
        />
        <Information
        informacion = {miInformacion} roll= {roll} name={name} logoInformacion = {logoInformacion}
        />
      </div>
    );
  }
}