import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.css";

const buildControls = props => {
  const labels = Object.keys(props.ingredients);
  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price-: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {labels.map(label => {
        return (
          <BuildControl
            key={label}
            label={label}
            more={() => props.more(label)}
            less={() => props.less(label)}
            isDisable={props.isDisable[label]}
          />
        );
      })}
      <button
        className={styles.OrderButton}
        disabled={!props.isPurchasable}
        onClick={props.order}
      >
        ORDER NOW!
      </button>
    </div>
  );
};

export default buildControls;
