import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div>
          <Link to="/">
            <button className="logo">NextConnect</button>
          </Link>
        </div>
        <div className="end">
          <Link to="/create-profile">
            <button className="profile">Create Profile</button>
          </Link>
          <button className="signout">Sing Out</button>
        </div>
      </div>
    );
  }
}
export default Navbar;
