import styles from "./Home.module.css";
import { ReactComponent as Chuno } from "../../assets/images/car-chuno.svg";

function Home() {
  return (
    <div className={styles.home_page}>
      <h1 className={styles.app_name}>Car Chuno</h1>
      <Chuno className={styles.hero_image} />
      <p className={styles.page_description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button className={styles.chuno_btn}>CHUNO</button>
    </div>
  );
}

export default Home;
