import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import BAG_ICON from "../../assets/bag.svg";
import HEART_ICON from "../../assets/heart.svg";
import styles from "./IconMenu.module.css";
import { Link } from "react-router-dom";

export function IconMenu() {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.length;

  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/ulubione">
          <img src={HEART_ICON} />
        </Link>
      </li>
      <li>
        <Link to="/koszyk">
          <img src={BAG_ICON} />
          {cartItemCount > 0 && (
            <div className={styles.numberOfProducts}>{cartItemCount}</div>
          )}
        </Link>
      </li>
    </ul>
  );
}
