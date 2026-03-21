import React, { useState } from 'react';
import './Registro.css';

const Registro: React.FC = () => {


    return (
        <>
            <div className="registro"> 
                    <div className="registro__image">
                        <img src="https://goodspe.com/cdn/shop/files/21wsaqweda.png?v=1729528680&width=2000"/>
                        <div className="Left__container">
                            <p className="Left__title">Registrate hoy</p>
                            <p className="Left__title-2">80% de descuento en todo lo nuevo</p>
                            <p className="Left__remainder"> *Válido para nuevos usuarios</p>
                        </div>
                    </div>
                    <div className="registro__container">
                        <h1>Regístrate o ingresa para continuar</h1>
                        <ul>
                            <li className='Google_login'>Google</li>
                            <li className='Facebook_login'>Facebook</li>
                            <li className='Already login '>Ya tengo cuenta</li>
                        </ul>
                    </div>
                </div>
        </>
    );
};

export default Registro;