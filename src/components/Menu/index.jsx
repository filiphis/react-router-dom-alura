import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export default function Menu() {
  return (
    <nav className={styles.navegacao}>
      <NavLink to={"/"} className={styles.link}>
        Home
      </NavLink>
      <NavLink to={"/sobremim"} className={styles.link}>
        Sobre mim
      </NavLink>
    </nav>
  );
}
