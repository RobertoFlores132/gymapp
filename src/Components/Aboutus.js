import React from 'react';
import './Aboutus.css'
import Profile from '../Images/Profile.jpg'

const Aboutus = () => {
    return (
        <div className='aboutcontainer'>
            <h2 className='title'>Conocenos</h2>
            <div className='imagecontainer'>
                <img className='profile' src={Profile} alt="" />
            </div>
            <div className='about'>
                <p>Somos un emprendimiento con 2 años en el mercado,
                    abrimos en el año 2021 y en medio de una pandemia
                    mundial nos establecimos como una de las mejores
                    opciones en esta rama, ofrecemos servicio de entrenador
                    personal, así como guía alimenticia creada por 
                    un nutriologo profesional.
                </p>
            </div>
        </div>
    );
};

export default Aboutus;