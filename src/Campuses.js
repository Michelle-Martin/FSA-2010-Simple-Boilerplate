import React from "react";

import { connect } from "react-redux";
import { getCampuses } from "../store";
import { Link } from "react-router-dom";

class Campuses extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.load();
    console.log("moutned!");
  }
  render() {
    const campuses = this.props.campuses || [];
    console.log("props is: ", this.props);
    return (
      <div>
        <ul>
          {campuses.map((campus) => {
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
    campuses: state.campusesReducer.campuses,
  };
};
const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(getCampuses()),
});

// const mapDispatchToProps= (dispatch)=> {
//     return {
//       ..create..delete
//     }
// }
export default connect(mapState, mapDispatchToProps)(Campuses);
