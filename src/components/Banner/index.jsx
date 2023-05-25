import styles from "./styles.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.jpeg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou o Luiz Silveira, Atualmente
          trabalho na Linx como analista de suporte. No momento estou estudando
          para futuramente atuar como desenvolvedor front end.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          src={circuloColorido}
          alt=""
          className={styles.circuloColorido}
          aria-hidden="true"
        />
        <img src={minhaFoto} alt={minhaFoto} className={styles.minhaFoto} />
      </div>
    </div>
  );
}
