import React from "react";
import NumberPicker from "react-number-picker";

import "react-number-picker/dist/style.css";

const Wrapper = class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100.0,
      currency: "U$",
      showDecimal: true,
      date: new Date()
    };
  }

  handleChange(new_value, date) {
    var today = new Date();
    let dateOfMoney =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      "-" +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();
    console.log("new value", new_value, dateOfMoney);
    this.setState({ value: new_value, dateOfMoney });
  }

  render() {
    return (
      <NumberPicker
        value={this.state.value}
        currency={this.state.currency}
        showDecimal={this.state.showDecimal}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
};

export default Wrapper;
