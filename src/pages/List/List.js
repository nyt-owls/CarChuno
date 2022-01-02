import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListCard from "../../components/ListCard/ListCard";
import Loading from "../../components/Loading/Loading";
import styles from "./List.module.css";

export default function List() {
  const [cars, setCars] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/cars")
      .then(data => data.json())
      .then(cars => {
        setCars(cars);
      })
      .catch(err => setErr(true));
  }, []);

  return (
    <div className={styles.page}>
      {cars.map(car => (
        <>
          <Link
            to={"cars/" + car.id + "/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListCard key={car.id} car={car} />
          </Link>
        </>
      ))}
      {!cars.length && !err && <Loading />}
      {err && <div>API not working!</div>}
    </div>
  );
}
