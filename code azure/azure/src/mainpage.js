import React from 'react';
import './style.css';
import CustomVision from './CustomVision';
import { useState } from 'react';
import Classification from './Classification'
import Chatbot from './chatbot';


const Mainpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClick1 = () => {
    setIsOpen1(!isOpen1);
  };


  return (
    <div>
      <header>
      <nav className="navbar">
        <h1 className="navbar-title">Brain Tumor Detection and Classification</h1>
      </nav>
    </header>

    <div className="button-container">
      <button className="custom-button" onClick={handleClick}>Detection</button>
      <button className="custom-button" onClick={handleClick1}>Classification</button>
    </div>
    <div>
      <Chatbot></Chatbot>
    </div>


    {isOpen && (
        <div>
         <CustomVision></CustomVision>
        </div>
      )}

{isOpen1 && (
        <div>
         
         <Classification></Classification>
        </div>
      )}

</div>


  );
};

export default Mainpage;
