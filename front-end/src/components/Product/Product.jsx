import styles from "./Product.module.css";
import { Link, useFetcher } from "react-router-dom";
import { Price } from "../Price/Price";

const ENDPOINT_TO_PATH_MAPPING = {
  women: "kobieta",
  men: "mezczyzna",
  children: "dziecko",
};

export function Product({ product }) {
  return (
    <Link
      to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${
        product.subcategory
      }/${product.id}`}
      className={styles.product}
    >
      <img
        src={`${BACK_END_URL}${product.photos[0].replace(
          "http://localhost:3000",
          ""
        )}`}
        alt={product.productName}
      />
      <h3>{product.productName}</h3>
      <p>
        <Price product={product} />
      </p>
      <Form
        onClick={(e) => {
          e.stopPropagation();
        }}
        method="POST"
        action={`/add-to-favourites/${product.id}`}
      >
        <button>
          <div className={styles.heart}></div>
        </button>
      </Form>
    </Link>
  );
}
