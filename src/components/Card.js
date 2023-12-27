import React, { useState } from "react";
import { PlusMinus } from "./PlusMinus";
import styles from "./Card.module.css";
import { Input } from "./Input";

export const Card = () => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <PlusMinus label="➖" onClick={handleMinus} />
          {count}
          <PlusMinus label="➕" onClick={handlePlus} />
        </div>
        <div className={styles.input}>
          <Input product="Product Name" />
          <Input product="Price" />
        </div>
      </div>
    </>
  );
};
