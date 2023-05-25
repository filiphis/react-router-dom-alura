import PostCard from "components/PostCard";
import styles from "./styles.module.css";
import posts from "json/posts.json";
import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <PostCard id={post.id} titulo={post.titulo} />
        </Link>
      ))}
    </div>
  );
}
