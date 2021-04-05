import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"> Home </Link>
        <Link to="/campuses"> Campuses</Link>
        <Link to="/students"> Students</Link>
      </div>
    );
  }
}
export default Nav;
