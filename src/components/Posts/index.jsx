import Post from "components/Post";
import styles from "./styles.module.css";
import posts from "json/posts.json";

export default function Posts() {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} titulo={post.titulo} />
      ))}
    </div>
  );
}
