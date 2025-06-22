import { redirect } from "react-router-dom";
import { PATH_TO_ENDPOINT_MAPPING, BACK_END_URL } from "../constants/api";

export function mainPageLoader({ params }) {
  const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender];

  if (!backEndPath) {
    return redirect("/kobieta");
  }

  return fetch(`${BACK_END_URL}/${backEndPath}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Błąd pobierania danych");
      }
      return res.json();
    })
    .then((data) => ({
      bestsellers: data.bestsellers,
      heroImageUrl: data.heroImageUrl,
    }))
    .catch((err) => {
      console.error("❌ Błąd w mainPageLoader:", err);
      return { bestsellers: [], heroImageUrl: "" };
    });
}
