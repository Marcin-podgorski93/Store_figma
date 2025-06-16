import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./views/Cart/Cart";
import { Favourites } from "./views/Favourites/Favourites";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./views/MainPage/MainPage";
import { mainPageLoader } from "./api/mainPageLoader";
import { productListLoader } from "./api/productListLoader";
import { ProductDetails } from "./views/ProductDetails/ProductDetails";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { productLoader } from "./api/productLoader";
import { addProductsToFavourites } from "./api/addProductsToFavorites";
import { favouritesLoader } from "./api/favouritesLoader";
import { deleteFavouriteAction } from "./api/deleteFavouriteAction";

const router = createBrowserRouter([
  {
    path: "/add-to-favourites/:productId",
    action: addProductsToFavourites,
  },
  {
    path: "/delete-from-favourites/:favouriteId",
    action: deleteFavouriteAction, // This action should be defined to handle the deletion of a favourite product
    // Assuming you have a deleteFavouriteProduct function defined in your API
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/koszyk",
        element: <Cart />,
      },
      {
        path: "/ulubione",
        element: <Favourites />,
        loader: favouritesLoader,
      },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:gender/:category/:subcategory?",
        // The `?` after `subcategory` and `page` makes them optional
        element: <ProductsList />,
        loader: productListLoader,
      },
      {
        path: "/:gender/:category/:subcategory/:productId",
        element: <ProductDetails />,
        loader: productLoader,
      },
    ],
  },
  {
    path: "test",
    element: <Layout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
