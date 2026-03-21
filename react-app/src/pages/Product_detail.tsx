import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Featured from '../components/Featured/Featured';
import './Product_detail.css';
import { products } from '../data/products';

const featuredProduct = products[0];

const ProductDetail: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <main className="main">
          <div className="product-container">
            <section className="product-Img">
              <img src={featuredProduct.primaryImg} alt={featuredProduct.name} />
            </section>
            <section className="product-info">
              <h2 className="product-info__name">{featuredProduct.name}</h2>
              <span className="product-price">S/. {featuredProduct.discountedPrice.toFixed(2)} PEN</span>
              <div className="product-size">
                <label htmlFor="size">Tamaño</label>
                <select name="size" id="size" defaultValue="">
                  <option disabled value="">
                    Escoge una opcion
                  </option>
                  <option value="Small">S</option>
                  <option value="Medium">M</option>
                  <option value="Large">L</option>
                  <option value="Extralarge">XL</option>
                </select>
              </div>
              <div className="product-add">
                <div className="product-quantity">
                  <input
                    type="number"
                    placeholder="1"
                    defaultValue={1}
                    min="1"
                    className="input-quantity"
                  />
                  <div className="btn-quantity">
                    <i className="fa-solid fa-chevron-up"></i>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
                <div className="product-add__buttons">
                  <button className="product-addCart__btn">
                    <i className="fa-solid fa-plus"></i>
                    Agregar al carrito
                  </button>
                  <button className="product-addNow__btn">Comprar ahora</button>
                </div>
              </div>
              <div className="product-description">
                <h2>Descripción</h2>
                <p>{featuredProduct.description}</p>
              </div>
            </section>
          </div>
          <Featured title={'Quizas te puedan interesar'} customClass={'featured__title--small'} />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
