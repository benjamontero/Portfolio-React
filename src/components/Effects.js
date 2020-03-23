import React, { Component, Fragment } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { GoArrowUp } from "react-icons/go";

export default class Effects extends Component {

    onClickUp = () => {
        scroll.scrollToTop();
     }
    render() {

        return (
            <div className='fixed bottom-0 right-0'>
               <button className='bg-black hover:bg-blue-700 text-white font-bold text-5xl rounded-full' 
               onClick={this.onClickUp}> 
               <GoArrowUp/>
               </button>
            </div>
        );
    }
}
