import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "./styles.module.css";
import Notfound from "pages/Notfound";
import PaginaPadrao from "components/PaginaPadrao";

export default function Post() {
  const { id } = useParams();

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <Notfound />;
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              titulo={post.titulo}
              fotoCapa={`/posts/${post.id}/capa.png`}
            >
              <div className={styles["post-markdown-container"]}>
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
