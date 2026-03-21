import { useState } from "react";
import { Link } from "react-router-dom";
import producto1 from '../../Img/producto1.jpg'
import producto2 from '../../Img/block-1.jpg'
import './Featured.css';
import { FC } from "react";

interface FeaturedProps {
    title: string;
    customClass: string;
    productClass?: string;
    featuredClass?: string;
}   

const Featured: FC<FeaturedProps> = ({ title,customClass,productClass ="",featuredClass=""}) => {
    const products = [
        {
            id: 1,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"
        },        {
            id: 2,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"
        },
        {
            id: 3,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"
        },
        {
            id: 4,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"
        },
        {
            id: 5,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"
        },
        {
            id: 6,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"
        },



        // Add more products as needed
    ];

    const [likedProducts, setLikedProducts] = useState<{ [key: number]: boolean }>({});

    const toggleLike = (id: number) => {
      setLikedProducts((prev) => ({
        ...prev,
        [id]: !prev[id], // Toggle el estado de "me gusta" para el producto específico 
      }));
    };
    return(
        <div className={`featured ${featuredClass || "featured"}`}>
                <div className="featured__header">
                    <h3 className={`featured__title ${customClass}`}>{title}</h3>
                </div>
                <div className="featured__display">
                    {products.map(product => (
                        <div className={`product-card ${productClass || "product-card"}`} key={product.id}>
                            <div className="product-card__img-container">
                                <img src={product.primaryImg} alt={product.description} className="product-card__img product-card__img--primary"/>
                                <img src={product.secondaryImg} alt={product.description} className="product-card__img product-card__img--secondary"/>
                                <div className="product-card__actions">
                                    <i
                                        className={`fa-heart ${likedProducts[product.id] ? 'fa-solid' : 'fa-regular'}`}
                                        onClick={() => toggleLike(product.id)}
                                    ></i>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <i className="fa-solid fa-shuffle"></i>
                                </div>
                            </div>
                            <div className="product-card__description">
                                <a className="product-card__description" href="/product_detail">{product.description}</a>
                            </div>
                            <div className="product-card__price">
                                <span className="product-card__price--original">
                                    <a className="product-card__price--original" href="/product_detail">{product.originalPrice}</a>
                                </span>
                                <span className="product-card__price--discounted">
                                    <a className="product-card__price--discounted" href="/product_detail">{product.discountedPrice}</a>
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
 }
 export default Featured;