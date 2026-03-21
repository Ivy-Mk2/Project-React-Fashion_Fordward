import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Featured from '../components/Featured/Featured';
import './CartPage.css';
import { useCart } from '../hooks/useCart';

const CartTotal = () => {
  const { cartItems, totals, updateQuantity, removeFromCart } = useCart();

  return (
    <>
      <div className="cart-total">
        <Header />
        <div className="cart-total__container">
          {cartItems.length > 0 ? (
            <div className="cart-total__active">
              <div className="cart-total__title">
                <h1>Carrito de compras</h1>
              </div>
              <div className="cart-total__info">
                <div className="product-list">
                  {cartItems.map((item) => (
                    <div className="product-list__card" key={item.id}>
                      <div className="cart-total__product-img">
                        <img src={item.product.primaryImg} alt={item.product.name} />
                      </div>
                      <div className="cart-total__product-description">
                        <span className="product-name">{item.product.name}</span>
                        <div className="product__description">
                          <div className="product-color">
                            <p>Color:</p>
                            <span>Black</span>
                          </div>
                          <div className="product-size-cart">
                            <p>Tamaño:</p>
                            <span>{item.size ?? 'S'}</span>
                          </div>
                          <div className="product-quantity">
                            <p>Quantity:</p>
                            <input
                              type="number"
                              min={1}
                              value={item.quantity}
                              onChange={(event) =>
                                updateQuantity(item.productId, Number(event.target.value) || 1)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="cart-total__product-buttons">
                        <div className="cart-price">
                          <span>${item.subtotal.toFixed(2)}</span>
                        </div>
                        <button className="cart-delete" onClick={() => removeFromCart(item.productId)}>
                          <span>
                            <svg width="1em" height="1.05em" viewBox="0 0 15 15.75">
                              <path d="m13.113 10.625v-.608a2.035 2.035 0 0 1 1.924-1.963c.942-.012 3.11-.012 4.052 0a2.034 2.034 0 0 1 1.924 1.963v.608c.175-.039-7.853.962-7.9 0zm6.663 0c0-.254 0-.6 0-.6a.744.744 0 0 0 -.718-.747c-.921-.012-3.068-.012-3.988 0a.776.776 0 0 0 -.73.75v.6z" transform="translate(-9.551 -8.044)"></path>
                              <path d="m2591.8 1408.149h11.036v-12h-11.036z" fill="none" stroke="#000" strokeWidth="1.5" transform="translate(-2589.665 -1393.149)"></path>
                              <path d="m0 0h15" fill="none" stroke="#000" strokeWidth="1.5" transform="translate(0 3)"></path>
                              <path d="m5.336 5.844h1.16v6.311h-1.16z"></path>
                              <path d="m8.631 5.844h1.16v6.311h-1.16z"></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="product__summary">
                  <h2>Resumen de compra</h2>
                  <div className="product__detail">
                    <div className="cart-total__product">
                      <span>Productos ({cartItems.length})</span>
                      <span>S/ {totals.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="cart-shipping">
                      <span>Envíos</span>
                      <span>S/ {totals.shipping.toFixed(2)}</span>
                    </div>
                    <div className="cart-total__total">
                      <span>Total</span>
                      <span>S/ {totals.total.toFixed(2)}</span>
                    </div>
                  </div>
                  <button className="cart-total__button">Continuar compra</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart-total__empty">
              <div className="cart-total__empty-content">
                <div className="cart-total__empty-description">
                  <h1>Tu carrito está vacío</h1>
                  <p>Agrega productos y consigue envío gratis</p>
                </div>
              </div>
              <div className="cart-total__empty-summary">
                <h2>Resumen de compra</h2>
                <p>Aquí verás los importes de tu compra una vez que agregues productos.</p>
              </div>
            </div>
          )}
        </div>
        <div className="featured__container">
          <Featured
            title={'Quizas te puedan interesar'}
            customClass={'featured__title--small'}
            productClass={'product-card-cart'}
            featuredClass={'featured-cart'}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CartTotal;
