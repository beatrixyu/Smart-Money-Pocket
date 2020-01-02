import React from "react";
import RangePicker from "react-range-picker";

class DateRangePicker extends React.Component {
  onDateChanges = (stDate, enDate) => {
    let startDate = stDate;
    let endDate = enDate;
    let dateDiff = Math.round((endDate - startDate) / (1000 * 3600 * 24)) + 1;
    console.log(
      " olddatediff ",
      Math.round((endDate - startDate) / (1000 * 3600 * 24) + 1)
    );

    console.log("oldStart", startDate);
    console.log("oldend", endDate);

    this.setState({
      startDate: startDate,
      endDate: endDate,
      dateDiff: dateDiff
    });
    console.log("newStart", startDate);
    console.log("end", endDate);
    console.log(
      " newdatediff ",
      Math.round((endDate - startDate) / (1000 * 3600 * 24) + 1)
    );

    // this.props.onDateSelected(dateDiff, startDate, endDate);
    this.props.onClose(dateDiff, startDate, endDate);
  };

  render() {
    return (
      <div
        className="RangePicker"
        style={{
          color: "rgba(0, 0, 0, 0.8)"
        }}
      >
        <RangePicker onClose={this.onDateChanges} />
      </div>
    );
  }
}

export default DateRangePicker;
