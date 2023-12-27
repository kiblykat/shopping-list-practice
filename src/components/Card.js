import React, { useState } from "react";
import { PlusMinus } from "./PlusMinus";
import { Input } from "./Input";
import useStyles from "./CardStyles"; //using MUI

export const Card = () => {
  const classes = useStyles(); //using MUI

  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.card}>
          <PlusMinus label="➖" onClick={handleMinus} />
          {count}
          <PlusMinus label="➕" onClick={() => setCount(count + 1)} />
        </div>
        <div className={classes.input}>
          <Input product="Product Name" />
          <Input product="Price" />
        </div>
      </div>
    </>
  );
};
