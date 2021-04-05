import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getCampuses, getCampus } from "../store";

class SingleCampus extends React.Component {
  //   componentDidMount() {
  //     this.props.getCampus();
  //     console.log(this.props);
  //   }

  render() {
    console.log("this is props2", this.props);
    return (
      <div>
        {/* {" "}
        {this.props.campuses.find(
          (campus) => campus.id === this.props.match.params.id
        )}{" "} */}
      </div>
    );
  }
}

const mapState = (state) => {
  console.log(state);
  return {
    campuses: state.campuses,
  };
};

export default connect(mapState)(SingleCampus);
