import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getCampuses } from "../store";

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
                {campus.name}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2R_ae_CqD2EKOTo6r6JkrkhtctHLcVKSUEnQQOxRHTyyrDe_H71S4SItPb-DtuDDO84YodONJ&usqp=CAc"></img>
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
