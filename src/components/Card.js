import React, { useState } from "react";
import { PlusMinus } from "./PlusMinus";
import styles from "./Card.module.css";
import { Input } from "./Input";
import { Typography, makeStyles } from "@mui/material";

export const Card = () => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <PlusMinus label="➖" onClick={handleMinus} />
          {count}
          <PlusMinus label="➕" onClick={() => setCount(count + 1)} />
        </div>
        <div className={styles.input}>
          <Input product="Product Name" />
          <Input product="Price" />
        </div>
      </div>
    </>
  );
};
