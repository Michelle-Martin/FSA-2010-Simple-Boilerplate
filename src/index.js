import React, { Component } from "react";
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

class App extends Component {
  ComponentDidMount() {
    store.dispatch(loadCampuses());
    console.log("app mounted");
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

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
