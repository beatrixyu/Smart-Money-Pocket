import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Main from "./components/main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Welcome , easily record your daily spending here!</h1>

        <div>
          <button>
            <Link to="/homepage">Go To Add Money Spend</Link>
          </button>
          <button>
            <Link to="/dashboard">Go To Money Record</Link>
          </button>
          <button>
            <Link to="/">Go BACK</Link>
          </button>
        </div>
        <Route path="/homepage" component={Main}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/"></Route>
      </Router>
    </div>
  );
}

// mongodb+srv://smart-pocket:1988915roro@cluster0-9eok3.mongodb.net/test?retryWrites=true&w=majority

export default App;
