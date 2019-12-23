import React from "react";

import styles from "./CheckoutSummary.module.css";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = props => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We Hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" func={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" func={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
