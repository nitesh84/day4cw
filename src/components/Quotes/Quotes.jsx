import React from "react";
import styles from "./Quotes.module.css";

const Quotes = ({ quote, author }) => {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>"{quote}"</p>
      <p className={styles.author}>- {author}</p>
    </div>
  );
};

export default Quotes;
