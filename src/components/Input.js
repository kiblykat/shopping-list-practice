import styles from "./Input.module.css";

export const Input = () => {
  return (
    <div className={styles.input}>
      <label>Product Name</label>
      <input placeholder="input" />
    </div>
  );
};
