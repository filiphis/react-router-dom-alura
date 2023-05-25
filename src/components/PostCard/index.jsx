import BotaoPrincipal from "components/BotaoPrincipal";
import styles from "./styles.module.css";

export default function PostCard({ id, titulo }) {
  return (
    <div className={styles.post}>
      <img className={styles.capa} src={`/posts/${id}/capa.png`} alt={titulo} />
      <h2 className={styles.titulo}>{titulo}</h2>
      <BotaoPrincipal>Ler</BotaoPrincipal>
    </div>
  );
}
