import React from "react";
import styles from "./Home.module.css";
import { ReactComponent as Chuno } from "../../assets/images/car-chuno.svg";
import { Link } from "react-router-dom";
import { Fade, Flip } from "react-reveal";

function Home() {
  return (
    <div className={styles.home_page}>
      <h1 className={styles.app_name}>Car Chuno</h1>
      <Fade>
        <div className={styles.hero_image}>
          <Chuno className={styles.image} />
        </div>
      </Fade>
      <p className={styles.page_description}>
        <Flip cascade>All the information related to cars in one place.</Flip>
      </p>
      <Link to="/cars">
        <button className={styles.chuno_btn}>Chuno</button>
      </Link>
    </div>
  );
}

export default Home;
