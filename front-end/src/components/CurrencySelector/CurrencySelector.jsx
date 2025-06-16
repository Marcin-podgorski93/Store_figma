import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constants/curriences";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/currencyContext";

export function CurrencySelector() {
  const [currency, setCurrency] = useContext(CurrencyContext);
  console.log(currency); // Log the current currency
  return (
    <select
      onChange={(e) =>
        // console.log(e.target.value) || // Log the selected currency
        setCurrency(e.target.value)
      }
      className={styles.currencySelector}
    >
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
}
