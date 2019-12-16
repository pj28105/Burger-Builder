import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from "./Burger.module.css";

const burger = props => {
  let transformIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return Array(props.ingredients[ingredient])
        .fill("Something")
        .map((_, index) => {
          return (
            <BurgerIngredient
              type={ingredient}
              key={ingredient + "_" + index}
            />
          );
        });
    })
    .flat(1);
    if(transformIngredients.length === 0){
        transformIngredients = <p>Please start adding ingredients!</p>
    }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
