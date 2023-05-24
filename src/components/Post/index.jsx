import styles from "./styles.module.css";

export default function Post({ id, titulo }) {
  return (
    <div className={styles.post}>
      <img className={styles.capa} src={`/posts/${id}/capa.png`} alt={titulo} />
      <h2 className={styles.titulo}>{titulo}</h2>
      <button className={styles.botaoLer}>Ler</button>
    </div>
  );
}
