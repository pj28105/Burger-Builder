import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildContols from "../../components/Burger/BuildContols/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Loader from "../../components/UI/Loader/Loader";
import withErrorHandler from "../../hoc/withErrorHandler";

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
      price: 4.0,
      isPurchasing: false,
      isLoading: false
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

  purchaseToggleHandler = () => {
    this.setState(prevState => {
      return { isPurchasing: !prevState.isPurchasing };
    });
  };

  placeOrder = () => {
    const order = {
      ingredients: this.state.ingredients,
      customer: {
        name: "Piyush Jain",
        email: "piyushjain964349@gmail.com",
        phone: "N/A",
        address: {
          street: "TestStreet",
          city: "Dwarka",
          state: "New Delhi"
        }
      },
      // This must be shifted to server
      price: this.state.price.toFixed(2),
      payementMethod: "COD"
    };
    this.setState({ isLoading: true });
    axios
      .post("orders.json", order)
      .then(response => {
        this.setState({ isLoading: false, isPurchasing: false });
        //console.log(response);
      })
      .catch(error => console.log(error));
  };

  render() {
    const isDisable = { ...this.state.ingredients };
    let isPurchasable = false;
    for (let key in isDisable) {
      isDisable[key] = this.state.ingredients[key] === 0;
      if (!isDisable[key]) isPurchasable = true;
    }
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        cancel={this.purchaseToggleHandler}
        placeOrder={this.placeOrder}
        price={this.state.price}
      />
    );

    if (this.state.isLoading) {
      orderSummary = <Loader />;
    }

    return (
      <>
        <Modal show={this.state.isPurchasing} hide={this.purchaseToggleHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildContols
          more={this.addIngredientHandler}
          less={this.removeIngredientHandler}
          isDisable={isDisable}
          price={this.state.price}
          isPurchasable={isPurchasable}
          order={this.purchaseToggleHandler}
        />
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
