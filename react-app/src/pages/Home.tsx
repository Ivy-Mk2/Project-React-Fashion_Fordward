import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Featured from "../components/Featured/Featured";
import SpecialBanner from "../components/SpecialBanner/SpecialBanner";
import Section from "../components/Section/Section";
import BodySection from "../components/BodySection/BodySection";
import Marquee from "../components/Marquee/Marquee";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Featured
      title={'Featured'}
      />
      <SpecialBanner/>
      <Marquee/>
      <Section/>
      <BodySection/>  
      <div className="main-content">
        <div className="announcement"> 
          <div className="announcement__container">
            <h1>HISTORIA, CREATIVIDAD Y DISEÑO EN 'FASHION FORWARD' DESDE 2024</h1>
            <p>En 'Fashion Forward' creemos que la moda no solo es lo que llevas puesto, es una declaración de quién eres. Nos inspira el arte de lo cotidiano, los detalles que hacen única a cada persona y la posibilidad de transformar cualquier día en algo especial a través del diseño.
              Nuestra misión es combinar estilos clásicos con tendencias contemporáneas, creando prendas versátiles que se adapten a cualquier ocasión. Desde los entusiastas de la moda casual hasta aquellos que buscan una declaración audaz, ofrecemos colecciones diseñadas para resaltar tu autenticidad.
              'Fashion Forward' no es solo ropa, es un movimiento. Trabajamos en colaboración con diseñadores emergentes, tejidos sostenibles y procesos responsables. Nos enfocamos en crear un impacto positivo, no solo en tus outfits, sino también en nuestro entorno. Nuestra pasión por el diseño no termina en las prendas, comienza en la confianza que queremos que sientas cuando las llevas.
              Cada colección es un homenaje a nuestra comunidad. A los que se atreven a ser diferentes, a los que entienden que la moda es una forma de expresión, y a los que saben que juntos, podemos marcar la diferencia.
            Fashion Forward: Más que un estilo, una forma de vivir. Diseñamos el futuro. Transformamos el presente. Porque la moda nunca se detiene, y nosotros tampoco.</p>
          </div>
        </div>
        <div className="newsletter">
          <h1>ÚNETE A NUESTRA COMUNIDAD Y RECIBE LAS ÚLTIMAS NOTICIAS</h1>
          <button className="custom-button">REGISTRATE GRATIS</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;