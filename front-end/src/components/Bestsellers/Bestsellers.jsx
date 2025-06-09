import styles from "./Bestsellers.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";

export function Bestsellers({ products }) {
  return (
    <CenteredContent>
      <h2 className={styles.bestSellerHeader}>Sprawdź nasze bestellery</h2>
      <div className={styles.productsWrapper}>
        {products.map((product) => (
          <Product key={product.productId} product={product} />
        ))}
      </div>
    </CenteredContent>
  );
}
