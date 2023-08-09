import React from "react";
import styles from "./Mission.module.css";
import { useGetRocketImgQuery } from "../../redux";

const Mission = ({ title, date, info, rocketID }) => {
  const { data, isLoading } = useGetRocketImgQuery(rocketID);

  return (
    <div className={styles.mission}>
      {!isLoading && (
        <img
          className={styles.mission__img}
          src={data.flickr_images[0]}
          alt="rocket"
        />
      )}
      <div className={styles.mission__info}>
        <h4>{title}</h4>
        <p>
          Дата запуска: <span>{date}</span>
        </p>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Mission;
