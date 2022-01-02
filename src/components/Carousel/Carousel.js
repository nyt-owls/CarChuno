import React from "react";
import styles from "./Carousel.module.css";
import makeCarousel from "react-reveal/makeCarousel";

function Container({ children }) {
  return <div className={styles.carousel}>{children}</div>;
}

export default makeCarousel(Container);
