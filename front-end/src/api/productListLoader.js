import { redirect } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";

export async function productListLoader({ params, request }) {
  const { gender, category, subcategory } = params;
  const urlParams = new URL(request.url);
  const currentPage = parseInt(urlParams.searchParams.get("page")) || 1;

  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];

  if (!foundGender || !foundCategory) {
    return redirect("/kobieta");
  }

  // Pobierz wszystko co pasuje
  const queryUrl = `${BACK_END_URL}/products?gender=${foundGender}&category=${category}${
    subcategory ? `&subcategory=${subcategory}` : ""
  }`;

  const response = await fetch(queryUrl);
  const fullProductList = await response.json();

  const productsPerPage = 8;
  const numberOfPages = Math.ceil(fullProductList.length / productsPerPage);

  const paginatedProducts = fullProductList.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return {
    products: paginatedProducts,
    numberOfPages,
  };
}
