import React from "react";

import styles from "./Order.module.css";

const order = props => {
  const ingredients = [];
  for (let ingredient in props.ingredients) {
    ingredients.push(
      <span
        key={ingredient}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid grey",
          padding: "5px"
        }}
      >
        {ingredient} ({props.ingredients[ingredient]})
      </span>
    );
  }

  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredients}</p>
      <p>
        Price: <strong>USD {props.price}</strong>
      </p>
    </div>
  );
};

export default order;
