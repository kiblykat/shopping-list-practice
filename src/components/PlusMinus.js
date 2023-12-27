import React from "react";
import styles from "./PlusMinus.module.css";
import Button from "@mui/material/Button";

export const PlusMinus = ({ label, onClick }) => {
  return (
    <div className={styles.container}>
      <Button className={styles.button} variant="contained" onClick={onClick}>
        {label}
      </Button>
    </div>
  );
};
