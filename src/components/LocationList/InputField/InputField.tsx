import React from "react";
import { Props } from "./type";
import styles from "./InputField.module.scss";

const InputField: React.FC<Props> = (props) => {
  const { placeholder, value, onChangeHandler } = props;

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.inputField}
        value={value}
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
      />
    </div>
  );
};

export default InputField;
