import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import producto2 from '../../Img/block-1.jpg';
import producto1 from '../../Img/producto1.jpg';
import styles from './Marquee.module.css';




const Marquee = () => {
    const products = [
        {
            id: 1,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            shortDescription: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"
        },        
        {
            id: 2,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            shortDescription: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"
        },
        {
            id: 3,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            shortDescription: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"
        },
        {
            id: 4,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            shortDescription: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"
        },
        {
            id: 5,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            shortDescription: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"
        },
        {
            id: 6,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            shortDescription: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"
        },
        {
            id: 7,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            shortDescription: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"

        },
        {
            id: 8,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            shortDescription: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"

        },
        {
            id: 9,
            primaryImg: producto1,
            secondaryImg: producto2,
            description: "Yeezy collection",
            shortDescription: "Yeezy collection",
            originalPrice: "$150.00",
            discountedPrice: "$100.00"

        },

    ];
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <>
            <div className={styles.marquee}>
                <div className={styles.marquee__title}>
                    <h1>Hot Sales</h1>
                </div>
                <Carousel responsive ={responsive}>
                    {products.map(product => (
                        <div className={styles['product-card']} key={product.id}>
                            <div className={styles['product-card__container']}>
                                <div className={styles['product-card__img-container']}>
                                    <img
                                    src={product.primaryImg}
                                    alt={product.description}
                                    className={`${styles['product-card__img']} ${styles['product-card__img--primary']}`}
                                    />
                                    <div className={styles['product-card__price']}>
                                        <span className={styles['product-card__price--original']}>
                                            <a
                                                className={styles['product-card__price--original']}
                                                href="/product_detail"
                                            >
                                                {product.originalPrice}
                                            </a>
                                    </span>
                                </div>
                                </div>
                                <div className={styles['product-card__description']}>
                                    <a className="product-card__description" href="/product_detail">{product.description}</a>
                                    <a className={styles['product-card__shortDescription']} href="/product_detail">{product.shortDescription}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

        </>    
        );
};

export default Marquee;