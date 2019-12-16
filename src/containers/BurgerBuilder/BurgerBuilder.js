import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildContols from "../../components/Burger/BuildContols/BuildControls";

const INGREDIENTS_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.7,
  meat: 1.3
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      price: 4.0
    };
  }

  addIngredientHandler = type => {
    const prevState = {
      ...this.state
    };
    prevState.ingredients[type] = prevState.ingredients[type] + 1;
    prevState.price = prevState.price + INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: prevState.ingredients,
      price: prevState.price
    });
  };

  removeIngredientHandler = type => {
    const prevState = {
      ...this.state
    };
    if (prevState.ingredients[type] === 0) {
      return;
    }
    prevState.ingredients[type] = prevState.ingredients[type] - 1;
    prevState.price = prevState.price - INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: prevState.ingredients,
      price: prevState.price
    });
  };

  render() {
    const isDisable = { ...this.state.ingredients };
    let isPurchasable = false;
    for (let key in isDisable) {
      isDisable[key] = this.state.ingredients[key] === 0;
      if (!isDisable[key]) isPurchasable = true;
    }
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildContols
          more={this.addIngredientHandler}
          less={this.removeIngredientHandler}
          isDisable={isDisable}
          price={this.state.price}
          isPurchasable={isPurchasable}
        />
      </>
    );
  }
}

export default BurgerBuilder;
