import React, { useState } from "react";
import { Button } from "./Button";
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
          <Button label="➖" onClick={handleMinus} />
          {count}
          <Button label="➕" onClick={handlePlus} />
        </div>
        <div className={styles.input}>
          <Input />
          <Input />
        </div>
      </div>
    </>
  );
};
