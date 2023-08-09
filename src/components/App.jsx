import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "./Header";
import Mission from "./Mission";
import { useGetLaunchesQuery } from "../redux";

export const App = () => {
  const { data = [], isLoading } = useGetLaunchesQuery();
  const [sortLaunches, setSortLaunches] = useState("toOld");
  const [launches, setLaunches] = useState([]);

  const formatDate = (time) => {
    const date = new Date(time);
    const options = { day: "numeric", month: "long", year: "numeric" };

    return date.toLocaleDateString("ru-RU", options);
  };

  const unix2015 = 1420059600;
  const unix2020 = 1577826000;

  if (!isLoading) {
    data.map(
      (launch) =>
        launch.success &&
        launch.date_unix > unix2015 &&
        launch.date_unix < unix2020 &&
        launches.push(launch)
    );
  }

  const successLaunches2015to2019 = launches;
  const successLaunches2019to2015 = successLaunches2015to2019.reverse();

  useEffect(() => {
    switch (sortLaunches) {
      case "toOld":
        setLaunches(successLaunches2019to2015);
        break;
      case "toNew":
        setLaunches(successLaunches2015to2019);
        break;
      default:
        setLaunches(successLaunches2019to2015);
    }
  }, [sortLaunches]);

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Header />
        <main>
          <div className={styles.filter}>
            <p>Показать с начала</p>
            <select
              className={styles.filter__select}
              onChange={(e) => setSortLaunches(e.target.value)}
            >
              <option value="toOld" default>
                последние
              </option>
              <option value="toNew">первые</option>
            </select>
          </div>
          {isLoading && <h4>Loading...</h4>}
          {!isLoading &&
            launches.map((launch) => (
              <Mission
                key={launch.id}
                title={launch.name}
                date={formatDate(launch.date_utc)}
                info={launch.details}
                rocketID={launch.rocket}
              />
            ))}
        </main>
        <footer className={styles.footer}>Created by Misha Lubarets</footer>
      </div>
    </div>
  );
};
