import styles from "./styles.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      <span>Desenvolvido por Luiz Silveira.</span>
    </footer>
  );
}
