import styles from "./Input.module.css";

export const Input = ({ product }) => {
  return (
    <div className={styles.container}>
      <label>{product}</label>
      <input className={styles.input} placeholder="input" />
    </div>
  );
};
