import React from "react";
import Rodal from "rodal";
import { Popover, Button, Form } from "antd";
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
    console.log("date:", date);
    this.props.onClick(note, date);
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
              width: "100%",
              color: "rgba(0, 0, 0, 0.8)",
              wordWrap: "break-all ",
              background: "skyblue"
            }}
          >
            <span> 📝</span>
            {this.props.note}
            {this.state.note}
          </Button>
        </Popover>
        <Rodal
          visible={this.state.visible}
          onClose={this.hide}
          value="write here"
        >
          <div>
            <Form id="hideAttForm" onSubmit={this.submitNote}>
              <h4 for="text" style={{ fontSize: "14px", color: "purple" }}>
                daily spend note
              </h4>
              <textarea
                type="text"
                onChange={this.changenote}
                onClose={this.hide}
                placeholder="write here..."
              />
              <br></br>

              <Button type="button" onClick={this.hide} value="Cancel">
                Cancel
              </Button>
              <Button type="button" value="Submit" onClick={this.submitNote}>
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
