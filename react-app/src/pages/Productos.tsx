import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useProducts } from '../hooks/useProducts';

const Productos: React.FC = () => {
  const { products } = useProducts();
  return (
    <div>
      <Header />
      <section className="featured">
        <div className="featured__header">
          <h3 className="featured__title">Productos</h3>
        </div>
        <div className="featured__display">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-card__img-container">
                <img
                  src={product.primaryImg}
                  alt={product.description}
                  className="product-card__img product-card__img--primary"
                />
                <img
                  src={product.secondaryImg}
                  alt={product.description}
                  className="product-card__img product-card__img--secondary"
                />
              </div>
              <div className="product-card__description">
                <Link className="product-card__description" to="/product_detail">
                  {product.name}
                </Link>
              </div>
              <div className="product-card__price">
                <span className="product-card__price--original">${product.originalPrice.toFixed(2)}</span>
                <span className="product-card__price--discounted">${product.discountedPrice.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Productos;
