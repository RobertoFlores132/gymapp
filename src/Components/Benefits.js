import React from 'react';
import './Benefits.css'

const Benefits = () => {
    return (
        <div className='benefitdesc'>
            <h2>MEMBRESÍA AL MEJOR GIMNASIO</h2>
            <div className='list'>
                <p><i class="fa-solid fa-check"></i> Acceso a todas las áreas del gym incluyendo 
                    maquinas, regaderas y piscina</p>
                <p><i class="fa-solid fa-check"></i> Acceso a instructores capacitados, todos nuestros 
                    instructores tienen experiencia y tenemos los mejores programas</p>
                <p><i class="fa-solid fa-check"></i> Productos y proteína gratuita a nuestros miembros
                    con más de 4 meses de antigüedad</p>
                <p><i class="fa-solid fa-check"></i> Acceso gratuito al servicio médico de las 
                    instalaciones</p> 
            </div>  
        </div>
    );
};

export default Benefits;