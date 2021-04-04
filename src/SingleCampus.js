import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getCampuses } from "../store";
import { Link } from "react-router-dom";

class SingleCampus extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>hi</h1>
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadCampuses: () => dispatch(getCampuses()),
//   };
// };

export default SingleCampus;
