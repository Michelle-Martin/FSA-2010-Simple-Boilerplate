import React, { Component } from "react";
import { getCampuses } from "../store";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import Campuses from "./Campuses";
import Students from "./Students";
import SingleCampus from "./SingleCampus";

class App extends Component {
  constructor(props) {
    super(props);
  }
  ComponentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <Router>
        <div>
          <div id="topPhoto">
            <img src="data:image/jpeg;base64,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" />
            <Link to="/"> Campuses</Link>
            <Link to="/students"> Students</Link>
          </div>

          <Switch>
            <Route exact path="/" component={Campuses} />
            <Route path="/students" component={Students} />
            <Route path="campuses/:id" component={SingleCampus} />
          </Switch>
        </div>
      </Router>
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
