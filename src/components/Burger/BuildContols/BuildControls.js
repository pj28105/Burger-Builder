import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.css";

const buildControls = props => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
  ];
  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price-: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(control => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            more={() => props.more(control.type)}
            less={() => props.less(control.type)}
            isDisable={props.isDisable[control.type]}
          />
        );
      })}
      <button className={styles.OrderButton} disabled={!props.isPurchasable}>ORDER NOW!</button>
    </div>
  );
};

export default buildControls;
