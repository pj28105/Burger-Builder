import React from "react";

import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from './DrawerToggle/DrawerToggle';

const toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle toggleSideDrawer={props.toggleSideDrawer}/>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
