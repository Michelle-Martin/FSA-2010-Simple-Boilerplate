import React from "react";
import { connect } from "react-redux";

class Campuses extends React.Component {
  componentDidMount() {
    this.props.loadCampuses();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.campuses.map((campus) => {
            return <li key={campus.id}> {campus.imageUrl} </li>;
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
