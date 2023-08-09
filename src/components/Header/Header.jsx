import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__info}>
        <h1 className={styles.title}>
          Успешные миссии
          <br />
          <span className={styles.title_accent}>SpaceX</span>
        </h1>
        <h3 className={styles.subtitle}>2015–2019</h3>
      </div>
    </header>
  );
};

export default Header;
