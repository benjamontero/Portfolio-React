import React, { Component } from 'react';
import './App.css';
import Presentation from './components/Presentation';
import fondo1 from './assets/fondo1.png';
import Introduction from './components/Introduction';
import EducationContainer from './components/EducationContainer';
import HabilityContainer from './components/HabilityContainer';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //contenido componente Presentation
      name: "Benja Montero",
      roll: "Full Stack Dev - Technical IT",
      fondo1: "fondo1",
      logoEducacion: "https://image.flaticon.com/icons/png/512/49/49944.png",
      logoHabilidad: "https://img.pngio.com/development-skill-icon-of-glyph-style-available-in-svg-png-eps-skill-png-512_512.png",
      logoTrabajo: "https://image.flaticon.com/icons/png/512/45/45569.png",
      logoInformacion: "https://i.ya-webdesign.com/images/profile-avatar-png-6.png",

      intro: "Entusiasta de la Tecnologia, Actualmente trabajando como Tecnico IT en GRUPO NOVATI, desempeñando tareas de soporte tecnico para empresas de primera linea. Estudiante en Rolling Code School cursando Full Stack.",

      misEstudios: [
        {
          fecha: "2001-2007",
          lugar: "Instituto John Kennedy",
          ubicacion: "San Miguel de Tucuman - Tucuman",
          descripcion: "Estudios Secundarios completos",
          foto: "https://lh3.googleusercontent.com/proxy/biriJnCi1oHuMt82661mFA0CwNCfstCn5_1neRsoy4LPUP3NzpyiFGw-AZA9N___W88VA3yFk2tZQRmOkBhbSq-_PRdJVQ0-BHbGHJELMq-EAu9StprYcAswyg"
        },
        {
          fecha: "2011-2016",
          lugar: "UTEPSA",
          ubicacion: "Santa Cruz de la sierra - Bolivia",
          descripcion: "Ingeniería electrónica y sistema - Finalizado cursado de Materias - Tesis pendiente",
          foto:"https://i0.pngocean.com/files/627/581/242/utepsa-sergio-arboleda-university-technology-private-university-technology.jpg"
        },
        {
          fecha: "2019 - Actualidad",
          lugar: "Rolling Code School",
          ubicacion: "San Miguel de Tucuman - Tucuman",
          descripcion: "Curso Full Stack Developer",
          foto:"https://media-exp1.licdn.com/dms/image/C4E0BAQFukE6t1gOQNw/company-logo_200_200/0?e=2159024400&v=beta&t=ySPNen1F30pRNQCpXMXoHJGpVwBxmjV7xSGZq_V7W78"
        },
      ],

      misHabilidades:[
        {
         
          nombre:"React",
          nivel: "3",
          foto: "https://39ntbr6g.media.zestyio.com/build-zestyio-with-reactjs.f1cb27a519bdb5b6ed34049a5b86e317.png"
        },
        {
         
          nombre:"Html",
          nivel: "5",
          foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/230px-HTML5_logo_and_wordmark.svg.png"
        },
        {
          
          nombre:"Css",
          nivel: "5",
          foto: "https://pngimage.net/wp-content/uploads/2018/06/logo-css-png-5.png"
        },
        {
         
          nombre:"Javascript",
          nivel: "3",
          foto: "https://lh3.googleusercontent.com/proxy/U7oYfPvkH3Z6TKldT8ZLBXc6Sct0ZauMgJPSXx6TWhKSgVSd-NxFftFVtdbGCEy0O_RsBDNwDvjUEBW669DYAngpME2cLQ"
        },
        {
         
          nombre:"Networking",
          nivel: "3",
          foto: "https://image.flaticon.com/icons/png/512/126/126344.png"
        },
        {
          
          nombre:"Hardware",
          nivel: "4",
          foto: "https://cdn.onlinewebfonts.com/svg/img_365376.png"
        },
        {
          
          nombre:"Photoshop",
          nivel: "3",
          foto: "https://images.vexels.com/media/users/3/163281/isolated/preview/0b352f67254cb99b67268b7c35e8af0a-photoshop-ps-icon-by-vexels.png"
        },
        {
        
          nombre:"Illustrator",
          nivel: "5",
          foto: "https://images.vexels.com/media/users/3/162833/isolated/preview/df82ae2443762e3d4fafabb1bbe5f660-adobe-illustrator-ai-icon-by-vexels.png"
        },
        {
         
          nombre:"Github",
          nivel: "4",
          foto: "https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png"
        }

      ]
    }
  }
  render() {
    const {
      name,
      roll,
      logoEducacion,
      logoHabilidad,
      logoTrabajo,
      logoInformacion,
      intro,
      misEstudios,
      misHabilidades
    } = this.state

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
          habilidades = {misHabilidades} logoHabilidad = {logoHabilidad}
        />
      </div>
    );
  }
}