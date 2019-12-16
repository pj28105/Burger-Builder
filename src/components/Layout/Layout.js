import React from "react";

import styles from "./Layout.module.css";

const layout = props => {
  return (
    <>
      <div>Toolbar SideDrawer BackDrop</div>
      <main className={styles.Content}>{props.children}</main>
    </>
  );
};

export default layout;
