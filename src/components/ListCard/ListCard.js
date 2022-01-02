import React from "react";
import styles from "./ListCard.module.css";

export default function ListCard({ car }) {
  return (
    <div className={styles.card}>
      <img
        src={car.floatingImg}
        alt={car.manufacturer + " " + car.name}
        width={250}
      />
      <div className={styles.info}>
        <span className={styles.title}>
          {car.manufacturer + " " + car.name}
        </span>
        <span>
          {car.max_onroad_price.amount +
            " " +
            (car.max_onroad_price.unit === "INR" ? "₹" : "")}
        </span>
      </div>
    </div>
  );
}
