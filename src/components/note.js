import React from "react";
import Rodal from "rodal";
import { Popover, Button, Form } from "antd";
import NumberPicker from "./numberPicker";
// import "./css/dashboard.css";
import "rodal/lib/rodal.css";
import "antd/dist/antd.css";

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      note: this.props.tData
    };
    this.submitNote = this.submitNote.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false, note: null });
  }

  changenote = (event, date) => {
    let note = event.target.value;
    this.setState({ note: note });
    console.log("note val:", note);

    let noteDate = date;
    noteDate = this.props.value; //get the date from dashbord to this child component
    console.log("date:", noteDate);
    this.props.onClick(note, noteDate);
  };

  submitNote = event => {
    event.preventDefault();
    // const updatedData = {
    //   id: Math.random().toString(),
    //   date: "",
    //   parameter: this.state.note,
    //   val: event
    // };
    this.setState({ visible: false, tData: event });
    // this.props.onSubmit(updatedData);

    console.log("substatenote", this.state.note);
    console.log("subpropsnote", this.props.note);
  };

  closeWindow = () => {
    this.setState({ visible: false, note: null });
  };

  content = (
    <div>
      <p>write your spend!</p>
    </div>
  );

  render() {
    return (
      <div>
        <Popover content={this.content} trigger="hover">
          <Button
            value={this.state.note}
            onClick={this.show}
            style={{
              height: "100px",
              width: "90%",
              color: "rgba(0, 0, 0, 0.8)",
              wordWrap: "break-all ",
              background: "skyblue",
              marginBottom: "2%"
            }}
          >
            <span>📝</span>
            {this.props.note}
            {this.state.note}
          </Button>

          <NumberPicker></NumberPicker>
        </Popover>

        <Rodal
          visible={this.state.visible}
          onClose={this.hide}
          value="write here"
        >
          <div
            style={{
              fontSize: "20px",
              color: "white",
              background: "skyblue",
              height: "100%"
            }}
          >
            <Form id="hideAttForm" onSubmit={this.submitNote}>
              <h4
                for="text"
                style={{
                  fontSize: "20px",
                  color: "white",
                  background: "skyblue"
                }}
              >
                daily spend note
              </h4>
              <textarea
                type="text"
                onChange={this.changenote}
                onClose={this.hide}
                placeholder=""
                style={{ height: "100px", width: "200px" }}
              />
              <br></br>

              <Button
                type="button"
                onClick={this.hide}
                value="Cancel"
                style={{
                  background: "lightgrey",
                  margin: "2%",
                  color: "white"
                }}
              >
                Cancel
              </Button>
              <Button
                type="button"
                value="Submit"
                onClick={this.submitNote}
                style={{ background: "yellow", margin: "2%", color: "white" }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Rodal>
      </div>
    );
  }
}
export default Note;
