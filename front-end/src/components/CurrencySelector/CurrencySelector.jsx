import { CURRENCIES } from "../../constants/curriences";

export function CurrencySelector() {
  return (
    <select>
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
}
