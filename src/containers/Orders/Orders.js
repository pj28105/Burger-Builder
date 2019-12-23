import React, { Component } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axiosFirebase";
import Loader from "../../components/UI/Loader/Loader";
import withErrorHandler from "../../hoc/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    isLoading: true
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then(({ data }) => {
        const orders = [];
        for (let key in data) {
          orders.push({ id: key, ...data[key] });
        }
        this.setState({ orders: orders, isLoading: false });
      })
      .catch(err => {
        this.setState({ isLoading: false });
        console.log(err);
      });
  }

  render() {
    let orders = this.state.orders.map(order => {
      return (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      );
    });
    if (this.state.isLoading) {
      orders = (
        <div style={{ marginTop: "40vh" }}>
          {" "}
          <Loader />
        </div>
      );
    }
    return <div>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
