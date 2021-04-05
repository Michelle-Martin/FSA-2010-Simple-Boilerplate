import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getCampuses } from "../store";

class SingleCampus extends React.Component {
  componentDidMount() {
    this.props.loadCampuses();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        {this.props.match.params.id}
        <ul>
          {this.props.campuses
            .map((campus) => {
              return (
                <li key={campus.id}>
                  {campus.name}
                  <img
                    className="logo"
                    height="100"
                    width="100"
                    src={campus.imageURL}
                  ></img>
                </li>
              );
            })
            .filter((campus) => campus.id === this.props.match.params.id)}
        </ul>
        <div>details </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campuses: state.campuses,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadCampuses: () => dispatch(getCampuses()),
  };
};

export default connect(mapState, mapDispatchToProps)(SingleCampus);
