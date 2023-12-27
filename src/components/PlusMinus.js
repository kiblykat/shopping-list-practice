import React from "react";
import styles from "./Button.module.css";
import Button from "@mui/material/Button";

export const PlusMinus = ({ label, onClick }) => {
  return (
    <div className={styles.container}>
      <Button variant="contained" className={styles.button} onClick={onClick}>
        {label}
      </Button>
    </div>
  );
};
