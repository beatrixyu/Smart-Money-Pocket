import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Main from "./main";
import Dashboard from "./Dashboard/dashboard";
import "../App.css";

class Sidebar extends React.Component {
  state = {};
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
      <div>
        <div id="mySidenav" className="sidenav">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.closeNav}
          >
            &times;
          </a>
          <Router>
            <button>
              <Link to="/homepage">Go To Add Money Spend</Link>
            </button>
            <button>
              <Link to="/dashboard">Go To Money Record</Link>
            </button>
          </Router>
        </div>

        <div id="main">
          <span
            styles={{ fontSize: "30", cursor: "pointer" }}
            onClick={this.openNav}
          >
            &#9776; open
          </span>
        </div>
      </div>
    );
  }
}

export default Sidebar;
// function Navbar() {
//   const openNav = () => {
//     if (
//       document.getElementById("mySidenav") &&
//       document.getElementById("main")
//     ) {
//       document.getElementById("mySidenav").style.width = "250px";
//       document.getElementById("main").style.marginLeft = "250px";
//     }
//   };

//   const closeNav = () => {
//     if (
//       document.getElementById("mySidenav") &&
//       document.getElementById("main")
//     ) {
//       document.getElementById("mySidenav").style.width = "0";
//       document.getElementById("main").style.marginLeft = "0";
//     }
//   };

//   return (
//     <div classNameName="navbar">
//       <Router>
//         <div id="mySidenav" classNameName="sidenav">
//           <a
//             // href="javascript:void(0)"
//             classNameName="closebtn"
//             onClick={closeNav()}
//           >
//             &times;
//           </a>
//           <a href="#">About</a>
//           <a href="#">Services</a>
//           <a href="#">Clients</a>
//           <a href="#">Contact</a>
//           <button>
//             <Link to="/homepage">Go To Add Money Spend</Link>
//           </button>
//           <button>
//             <Link to="/dashboard">Go To Money Record</Link>
//           </button>
//         </div>

//         <span
//           style={{ fontSize: "30px", cursor: "pointer" }}
//           onClick={openNav()}
//         >
//           &#9776; open
//         </span>

//         <Route path="/homepage" component={Main}></Route>
//         <Route path="/dashboard" component={Dashboard}></Route>
//       </Router>
//     </div>
//   );
// }

// export default Navbar;
