import styles from "./CategoryMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink, useParams } from "react-router-dom";

export function CategoryMenu() {
  const params = useParams();
  const gender = params.gender || "kobieta"; // domyślnie "kobieta"

  return (
    <div className={styles.categoryMenu}>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={`/${gender}/${category.path}`}>
                {category.categoryName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
