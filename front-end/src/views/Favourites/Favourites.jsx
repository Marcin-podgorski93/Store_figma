import { useLoaderData } from "react-router-dom";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";
export function Favourites() {
  const favouriteProducts = useLoaderData();
  console.log("Favourites data:", favouriteProducts);
  return <FavouritesList favourites={favouriteProducts} />;
}
