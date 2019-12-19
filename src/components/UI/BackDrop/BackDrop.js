import React from "react";

import styles from "./BackDrop.module.css";

const backDrop = props => {
  return props.show ? (
    <div className={styles.BackDrop} onClick={props.hide}></div>
  ) : null;
};

export default backDrop;