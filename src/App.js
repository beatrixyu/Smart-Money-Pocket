import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Main from "./components/main";
import "./App.css";

class App extends React.Component {
  openNav = () => {
    if (
      document.getElementById("mySidenav") &&
      document.getElementById("main")
    ) {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
  };

  closeNav = () => {
    if (
      document.getElementById("mySidenav") &&
      document.getElementById("main")
    ) {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <aside>
            <nav>
              <div id="mySidenav" className="sidenav">
                <a
                  href="javascript:void(0)"
                  className="closebtn"
                  onClick={this.closeNav}
                >
                  &times;
                </a>
                <button style={{ background: "white" }}>
                  <Link to="/homepage">Go To Add Money Spend</Link>
                </button>
                <button style={{ background: "white" }}>
                  <Link to="/dashboard">Go To Money Record</Link>
                </button>
              </div>

              <div id="main">
                <span
                  styles={{ fontSize: "30", cursor: "pointer" }}
                  onClick={this.openNav}
                >
                  &#9776; open
                </span>
              </div>
            </nav>
          </aside>
          <main>
            <h1>Welcome , easily record your daily spending here!</h1>
            <Route path="/homepage" component={Main}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>

            <button>
              <Link to="/">Go BACK</Link>
            </button>

            <Route exact path="/"></Route>
          </main>
        </Router>
      </div>
    );
  }
}

// mongodb+srv://smart-pocket:1988915roro@cluster0-9eok3.mongodb.net/test?retryWrites=true&w=majority

export default App;
