import React from "react";
import Header from "../components/Header/Header";
import Registro from "../components/Registro/Registro";
import Logo from "../components/Header/Logo";

const Registros = () =>{

    return(
        <>
            <div className="main-header">
                <Logo/>
            </div>
            <div className="main-registro">
                <Registro/>
            </div>
        </>
    );
};
export default Registros;
