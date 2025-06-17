import { Outlet } from "react-router-dom";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";
import { CurrencyContext } from "../../contexts/currencyContext";
import { CURRENCIES } from "../../constants/curriences";
import { useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Layout() {
  const [currency, setCurrency] = useState(
    // Default to PLN if no currency is stored in localStorage
    localStorage["selectedCurrency"] || CURRENCIES.PLN
  );

  const [cartItems, setCartItems] = useState(() => {
    return localStorage["cart_products"]
      ? JSON.parse(localStorage["cart_products"])
      : [];
  });

  function addCartItems(product) {
    setCartItems((previousCartItems) => {
      const newState = [...previousCartItems, product];
      localStorage["cart_products"] = JSON.stringify(newState);
      return newState;
    });
  }

  function removeCartItem(productId) {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item.id !== productId);
      localStorage.setItem("cart_products", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  return (
    <>
      <CartContext.Provider value={{ cartItems, addCartItems, removeCartItem }}>
        <CurrencyContext.Provider value={[currency, setCurrency]}>
          <MainContent>
            <TopBar>
              <MainMenu />
              <Logo />
              <div>
                <CurrencySelector />
                <IconMenu />
              </div>
            </TopBar>
            <CategoryMenu />
            <Outlet />
            {/* The Outlet component renders the child routes */}
          </MainContent>
          <Footer />
        </CurrencyContext.Provider>
      </CartContext.Provider>
    </>
  );
}
