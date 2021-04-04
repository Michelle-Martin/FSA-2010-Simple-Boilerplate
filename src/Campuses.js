import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getCampuses } from "../store";
import { Link } from "react-router-dom";

class Campuses extends React.Component {
  componentDidMount() {
    this.props.loadCampuses();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.campuses.map((campus) => {
            return (
              <li key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                <img
                  className="logo"
                  height="100"
                  width="100"
                  src={campus.imageURL}
                ></img>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("this is state", state.campuses);
  return {
    campuses: state.campuses,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadCampuses: () => dispatch(getCampuses()),
  };
};

export default connect(mapState, mapDispatchToProps)(Campuses);
