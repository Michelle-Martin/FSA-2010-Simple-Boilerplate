import React, { Component } from "react";
import { getCampuses } from "../store";
import { connect } from "react-redux";
import Campuses from "./Campuses";

class App extends Component {
  constructor(props) {
    super(props);
  }
  ComponentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <div>
        Hello
        <Campuses />
      </div>
    );
  }
}

const mapState = (campuses) => {
  return {
    campuses,
  };
};

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(getCampuses()),
});
export default connect(mapState, mapDispatchToProps)(App);
