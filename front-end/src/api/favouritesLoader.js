import { BACK_END_URL } from "../constants/api";

export async function favouritesLoader() {
  const res = await fetch(`${BACK_END_URL}/favourites`);
  const favourites = await res.json();

  const productRequests = favourites.map((fav) =>
    fetch(`${BACK_END_URL}/products/${fav.productId}`).then((res) => res.json())
  );

  const products = await Promise.all(productRequests);

  return favourites.map((fav, index) => ({
    ...fav,
    product: products[index],
  }));
}
