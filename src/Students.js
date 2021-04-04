import React from "react";
import { connect } from "react-redux";
import { getStudents } from "../store";

class Students extends React.Component {
  componentDidMount() {
    this.props.loadStudents();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.students.map((student) => {
            return <li key={student.id}> {student.firstName} </li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("this is state", state.students);
  return {
    students: state.students,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadStudents: () => dispatch(getStudents()),
  };
};

export default connect(mapState, mapDispatchToProps)(Students);
