import React, { Component } from "react";
import DateRange from "../DateRangePicker/dateRangePicker";
import moment from "moment";
// import axios from "axios";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.studentTable = [];
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      user: {
        //trainer self
        firstname: "",
        lastname: "",
        email: "",
        className: ["Fbw1", "Fbw2"],
        schoolName: "DCI",
        role: "trainer",
        attendance: [
          {
            date: "01.12.2019",
            entry: "10:39 am",
            exit: "04:45 pm",
            timeDiff: "08:00 am",
            status: "Late",
            attNote: "late train",
            trainerNote: null,
            attachments: []
          },
          {
            date: "02.12.2019",
            entry: "12:00 am",
            exit: "17:00 am",
            timeDiff: "07:00 am",
            status: "Late",
            attNote: null,
            trainerNote: "please offer me a prove, thanks ",
            attachments: []
          },
          {
            date: "03.12.2019",
            entry: "11:00 am",
            exit: "13:00 am",
            timeDiff: "05:00 am",
            status: "Late",
            attNote: "Bus was late. Plase find enclosed attachments",
            trainerNote: null,
            attachments: "03.12.2019_1.jpg",
            alert: null
          },
          {
            date: "04.12.2019",
            entry: null,
            exit: null,
            timeDiff: "02:00 am",
            status: "Late",
            attNote: null,
            trainerNote: "ok",
            attachments: []
          },
          {
            date: "05.12.2019",
            entry: "08:00 am",
            exit: "16:00 am",
            timeDiff: "08:00 am",
            status: "On Time",
            attNote: null,
            trainerNote: null,
            attachments: []
          },
          {
            date: "06.12.2019",
            entry: "08:00 am",
            exit: "16:00 am",
            timeDiff: "08:00 am",
            status: "On Time",
            attNote: null,
            trainerNote: null,
            attachments: []
          },
          {
            date: "07.12.2019",
            entry: "08:00 am",
            exit: "16:00 am",
            timeDiff: "08:00 am",
            status: "On Time",
            attNote: null,
            trainerNote: null,
            attachments: []
          },
          {
            date: "08.12.2019",
            entry: "08:30 am",
            exit: "16:00 am",
            timeDiff: "04:00 am",
            status: "On Time",
            attNote: "Bus was late. Plase find enclosed attachments",
            trainerNote: null,
            attachments: "08.12.2019_1.jpg"
          },
          {
            date: "09.12.2019",
            entry: "08:30 am",
            exit: "16:00 am",
            timeDiff: "08:00 am",
            status: "On Time",
            attNote: null,
            trainerNote: null,
            attachments: []
          },
          {
            date: "10.12.2019",
            entry: "08:00 am",
            exit: "16:00 am",
            timeDiff: "08:00 am",
            status: "On Time",
            attNote: null,
            trainerNote: null,
            attachments: []
          }
        ]
      },
      tData: [],
      selectedStudent: "",
      studentList: [],
      selectStudentTable: [],
      date: date,
      entry: "",
      exit: "",
      startDate: "",
      endDate: "",
      dateDiff: "",
      attNote: "",
      trainerNote: "",
      attachments: "",
      status: "",
      hours1: "",
      min1: "",
      hours2: "",
      min2: "",
      sec1: "",
      sec2: "",
      timeDiff: "",
      catchDate: false
    };

    this.getDateDiff = this.getDateDiff.bind(this);
    //     this.HandleEnterTimeReset = this.HandleEnterTimeReset.bind(this);
    //     this.HandleAttendenceNote = this.HandleAttendenceNote.bind(this);
    //     this.HandleAttachment = this.HandleAttachment.bind(this);
  }

  //   componentDidMount() {
  //     axios({
  //       method: "get",
  //       url: "https://attrc.herokuapp.com/api/dashboard/",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-auth-token": localStorage.getItem("jwtToken")
  //       }
  //     }).then(res => {
  //       const user = res.data.result.user;
  //       console.log(user);
  //       this.setState({ user: user });
  //       console.log(this.state.user);
  //     });
  //   }

  //   HandleEnterTimeReset(val, date) {
  //     //selected entrytime
  //     let entry = val;
  //     console.log("entry time", entry);

  //     //selected date
  //     let entryDate = date;
  //     console.log("entry time date", entryDate);

  //     let matchArr = [];
  //     let entryDates = this.state.tData.map(entryDate => {
  //       var entryDate = date;
  //       console.log(entryDate);
  //       matchArr = this.state.user.attendance.filter(val => {
  //         return val.date === entryDate;
  //       });
  //       if (matchArr.length > 0) {
  //         matchArr[0].entry = entry;
  //         this.setState({ attendance: [...matchArr] });
  //       }
  //       console.log("Entry reset matchArr", matchArr);
  //       console.log("this.state.user.entry", this.state.tData);
  //     });

  //     this.setState({
  //       entry: entry //to reset the entrytime to the state and send it to the trainer entry time
  //     });
  //   }

  //   HandleAttendenceNote(val, date) {
  //     var attNote = val;
  //     console.log("attNote val", attNote);

  //     //pass the selected date from textedit from child component
  //     var attDate = date;
  //     console.log("attNote val selected date", attDate);

  //     let matchArr = [];
  //     let attDates = this.state.tData.map((attDate, i) => {
  //       var attDate = date;
  //       console.log(attDate);
  //       matchArr = this.state.user.attendance.filter((val, i) => {
  //         return val.date === attDate;
  //       });
  //       console.log("matchArr attNote update", matchArr);

  //       if (matchArr.length > 0) {
  //         matchArr[0].attNote = attNote;
  //         this.setState({ attendance: [...matchArr], attNote: attNote });
  //       }
  //     });
  //   }

  //   HandleAttachment(val, date) {
  //     let attachments = val;
  //     console.log("attachment value", attachments);

  //     var fileDate = date;
  //     console.log("attachment date", fileDate);

  //     let matchArr;
  //     let fileDates = this.state.tData.map((fileDate, i) => {
  //       matchArr = this.state.user.attendance.filter((val, i) => {
  //         return val.date === fileDate;
  //       });
  //       console.log("attachment final matchArr", matchArr);

  //       if (matchArr.length > 0) {
  //         matchArr[0].attachments = attachments;

  //         this.setState({
  //           attendance: [...matchArr],
  //           attachments: attachments
  //         });
  //       }
  //     });
  //   }

  getDateDiff = (dateDiff, startDate, endDate) => {
    this.setState({
      dateDiff: dateDiff,
      startDate: startDate,
      endDate: endDate
    });
    var tempData = [];

    this.finalTable = [];
    console.log("diff", this.state.dateDiff);
    console.log("start", this.state.startDate);
    console.log("end", this.state.endDate);

    if (endDate !== undefined) {
      for (let i = 0; i < this.state.dateDiff; i++) {
        tempData.push({
          date: moment(this.state.startDate).format("DD.MM.YYYY"),
          entry: null,
          attNote: null,
          attachments: null
        });
        console.log("diff", this.state.dateDiff);
        console.log("a1", [...tempData]);
        this.setState({
          tData: [...tempData]
        });
        console.log("a2", this.state.tData);
        //for loop the real-time clicked data
        if (startDate !== null) {
          startDate.setDate(startDate.getDate() + 1);
        } else {
          let today = new Date();
          return today;
        }
      }
    } else {
      tempData.push({
        date: moment(this.state.startDate).format("DD.MM.YYYY"),
        entry: null,
        attNote: null,
        attachments: null
      });
      console.log("a1", [...tempData]);
      this.setState({
        tData: [...tempData]
      });
      console.log("a2", this.state.tData);
    }

    this.attendance = [];
    let match;
    let cloneData = [...this.state.tData];
    //to map the function
    let realDates = this.state.tData.map((realDate, i) => {
      match = this.state.user.attendance.filter(val => {
        return val.date === realDate.date;
      });
      console.log("realClick", realDate.date);

      if (match.length > 0) {
        cloneData[i] = { ...match[0] };
        this.setState({ tData: [...cloneData] });
        console.log("final dummy data", [...this.state.tData]);
      }

      /*       let selectEntryTimeResult;
      if (this.state.user.role == "trainer") {
        selectEntryTimeResult = (
          <EntryTimeSelect
            onSave={this.HandleEnterTimeReset}
            onChange={this.HandleEnterTimeReset}
            entry={this.state.tData[i].entry}
            value={realDate.date} //to match the rel click to the cliked date
          />
        );
      } else if (this.state.user.role == "manager") {
        selectEntryTimeResult = (
          <EntryTimeSelect
            onSave={this.HandleEnterTimeReset}
            onChange={this.HandleEnterTimeReset}
            entry={this.state.tData[i].entry}
            value={realDate.date} //to match the rel click to the cliked date
          />
        );
      } else {
        selectEntryTimeResult = this.state.tData[i].entry;
      }

      let studentNoteResult;
      if (this.state.user.role == "attendee") {
        studentNoteResult = (
          <AttendenceNote
            onClick={this.HandleAttendenceNote}
            onClose={this.HandleAttendenceNote}
            onChange={this.HandleAttendenceNote}
            attNote={this.state.tData[i].attNote}
            onCancel={this.HandleAttendenceNote}
            value={realDate.date} //from getDateDiff event
          />
        );
      } else {
        studentNoteResult = this.state.tData[i].attNote;
      }

      let uploadResult;
      if (this.state.user.role == "attendee") {
        uploadResult = (
          <Upload
            onClick={this.HandleAttachment}
            onChange={this.HandleAttachment}
            attachments={this.state.tData[i].attachments}
            value={realDate.date}
          />
        );
      } else if (this.state.user.role == "trainer") {
        uploadResult = (
          <Upload
            onClick={this.HandleAttachment}
            onChange={this.HandleAttachment}
            attachments={this.state.tData[i].attachments}
            value={realDate.date}
          />
        );
      } else if (this.state.user.role == "manager") {
        uploadResult = (
          <Upload
            onClick={this.HandleAttachment}
            onChange={this.HandleAttachment}
            attachments={this.state.tData[i].attachments}
            value={realDate.date}
          />
        );
      } else {
        uploadResult = this.state.tData[i].attachments;
      }

 */

      this.finalTable.push(
        <tr key={i} align="center">
          <td>{this.state.tData[i].date} </td>
          <td>1</td>
          <td>2</td>
          <td>3</td>

          {/* <td>{selectEntryTimeResult}</td>
          <td>{studentNoteResult}</td>
          <td>{uploadResult}</td> */}
        </tr>
      );

      // startDate.setDate(startDate.getDate() + 1);
      this.setState({
        catchDate: true
      });
      console.log("realDate", realDate.date);
    });
  };

  render() {
    return (
      <div className="dashboard">
        <h4>Select your Data here</h4>
        <DateRange
          onClose={this.getDateDiff}
          dateDiff={this.state.dateDiff}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <td>{this.finalTable}</td>
      </div>
    );
  }
}

export default Dashboard;
