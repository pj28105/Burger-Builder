import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";
import axios from "../../../axiosFirebase";
import Loader from "../../../components/UI/Loader/Loader";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    isLoading: false
  };

  orderHandler = event => {
    event.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
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
      // This must be shifted to back-end
      price: this.props.price.toFixed(2),
      payementMethod: "COD"
    };
    this.setState({ isLoading: true });
    axios
      .post("orders.json", order)
      .then(response => {
        this.setState({ isLoading: false });
        //console.log(response);
        this.props.history.push('/');
      })
      .catch(error => console.log(error));
  };

  render() {
    let form = (
      <form>
        <input
          className={styles.Input}
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className={styles.Input}
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <input
          className={styles.Input}
          type="text"
          name="street"
          placeholder="Street"
          required
        />
        <input
          className={styles.Input}
          type="text"
          name="postal"
          placeholder="Postal"
          required
        />
        <Button btnType="Success" func={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.isLoading) {
      form = <Loader />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter Your Contact Details</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
