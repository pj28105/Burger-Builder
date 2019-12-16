import React from "react";

import styles from './Modal.module.css'; 

const modal = props => {
  return <div style={styles.Modal}>{props.children}</div>;
};

export default modal;
