import { Outlet } from "react-router-dom";
// import styles from "./styles.module.css";
import Banner from "components/Banner";

export default function PaginaPadrao() {
  return (
    <>
      <Banner />
      <main>
        <Outlet />
      </main>
    </>
  );
}
