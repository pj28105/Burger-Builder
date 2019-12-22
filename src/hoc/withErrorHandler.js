import React, { Component } from "react";

import Modal from "../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };
      this.reqIncpt = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resIncpt = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmHandler = () => {
      this.setState({ error: null });
    };

    componentWillUnmount = () => {
      axios.interceptors.request.eject(this.reqIncpt);
      axios.interceptors.response.eject(this.resIncpt);
    }

    render() {
      return (
        <>
          <Modal show={this.state.error} hide={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
