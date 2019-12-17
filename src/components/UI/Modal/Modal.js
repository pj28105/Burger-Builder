import React from "react";

import styles from "./Modal.module.css";
import BackDrop from "../BackDrop/BackDrop";

const modal = props => {
  return (
    <>
      <BackDrop show={props.show} hide={props.hide} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;
