import styles from "./Hero.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";

export function Hero({ heroImage }) {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <CenteredContent>
        <div className={styles.contentWrapper}>
          <h1>Letnie Promocje do -70%!</h1>
          <p>Tylko najlepsze okazje!</p>
          <button>Sprawdź produkty</button>
        </div>
      </CenteredContent>
    </div>
  );
}
