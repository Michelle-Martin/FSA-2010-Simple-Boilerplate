import React, { Component } from "react";
import { connect } from "react-redux";
import store, {
  loadCampuses,
  getStudents,
  deleteCampus,
  createCampus,
} from "../store";
import { HashRouter as Router, Route } from "react-router-dom";
import Campuses from "./Campuses";
import Students from "./Students";
import SingleCampus from "./SingleCampus";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Nav from "./Nav";

const app = document.querySelector("#app");

// const Nav = ({ location: { pathname } }) => {};

class _App extends Component {
  ComponentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <Router>
        <div>
          <Route component={Nav} />
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/students" component={Students} />
          <Route
            path="/campuses/:id"
            render={({ match }) => <SingleCampus id={match.params.id * 1} />}
          />
        </div>
      </Router>
    );
  }
}

// const mapState = (campuses) => {
//   return {
//     campuses,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   load: () => dispatch(getCampuses()),
// });

const App = connect(
  ({ campuses }) => ({ campuses }),
  (dispatch) => {
    return {
      load: () => dispatch(loadCampuses()),
    };
  }
)(_App);

render(
  <Provider store={store}>
    <_App />
  </Provider>,
  app
);
