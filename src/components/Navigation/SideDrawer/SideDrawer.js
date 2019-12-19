import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import BackDrop from "../../UI/BackDrop/BackDrop";

const sideDrawer = props => {
  let cssClasses = [styles.SideDrawer,styles.Open];
  if(!props.show){
    cssClasses[1] = styles.Close;
  }
  return (
    <>
      <BackDrop show={props.show} hide={props.hide}/>
      <div className={cssClasses.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;