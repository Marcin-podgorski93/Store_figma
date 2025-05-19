import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";
import style from "./CategoryMenu.module.css";

export function CategoryMenu() {
  return (
    <div className={style.categoryMenu}>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={category.path}>{category.categoryName}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
