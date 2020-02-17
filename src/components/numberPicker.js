import React from "react";
import NumberPicker from "react-number-picker";

import "react-number-picker/dist/style.css";

const Wrapper = class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100.0,
      currency: "U$",
      showDecimal: true
    };
  }

  handleChange(new_value) {
    console.log("new value", new_value);
    this.setState({ value: new_value });
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
