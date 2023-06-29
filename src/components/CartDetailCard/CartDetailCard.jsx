import React from "react";
import styles from "./CartDetailCard.module.css";

const CartDetailCard = ({ product, qty }) => {
  return (
    <div className={styles.cardsWrapper}>
        <div className={styles.itemWrapper}>
          <div>
            <img src={product.image} alt={product.title} />
          </div>
          <div className={styles.productInfo}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {/* <p>Precio: ${product.precio}</p> */}
            <p>Cantidad: {qty.qty}</p>
          </div>
        </div>
    </div>
  );
};

export default CartDetailCard;