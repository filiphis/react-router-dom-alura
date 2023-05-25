import styles from "./styles.module.css";

export default function BotaoPrincipal({ children }) {
  return <button className={styles.botaoPrincipal}>{children}</button>;
}
