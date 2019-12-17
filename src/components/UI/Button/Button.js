import React from "react";

import styles from "./Button.module.css";

const button = props => {
  return (
    <button
      className={[styles.Button, styles[props.btnType]].join(" ")}
      onClick={props.func}
    >
      {props.children}
    </button>
  );
};

export default button;
