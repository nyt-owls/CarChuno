import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-reveal";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./View.module.css";

export default function View() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/cars/${id}`)
      .then(data => data.json())
      .then(carDetails => setCar(carDetails));
  }, [id]);

  return (
    <>
      {car && (
        <Fade cascade>
          <div className={styles.view}>
            <img
              className={styles.mainImg}
              src={car.floatingImg}
              alt={car.name}
              width={400}
            />
            <div className={styles.details}>
              <div>{car.manufacturer + " " + car.name}</div>
              <div>N-cap rating: {car["n-cap"]} stars</div>
              <div>Mileage: {car.mileage}</div>
              <Carousel defaultWait={2000}>
                {car.photos.map(iurl => {
                  return (
                    <Slide right>
                      <img src={iurl} width={300} alt={car.name} />
                    </Slide>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </Fade>
      )}
    </>
  );
}
