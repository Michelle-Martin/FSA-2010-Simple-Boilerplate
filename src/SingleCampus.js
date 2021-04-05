import React from "react";
import { connect } from "react-redux";
import { deleteCampus } from "../store";

const SingleCampus = ({ campus, deleteCampus }) => {
  if (!campus) {
    return null;
  }
  return (
    <div>
      {campus.name}
      <button onClick={() => deleteCampus(campus)}> Delete This Campus</button>
    </div>
  );
};

const mapStateToProps = (state, otherProps) => {
  const campus =
    state.campuses.find(
      (campus) => campus.id === otherProps.match.params.id * 1
    ) || {};
  return {
    campus,
  };
};

// class SingleCampus extends React.Component {
//     constructor(){

//     }
//   componentDidMount() {
//     this.props.loadCampuses();
//     console.log(this.props);
//   }

//   render() {
//     return (
//       <div>
//         {this.props.match.params.id}
//         <ul>
//           {this.props.campuses
//             .map((campus) => {
//               return (
//                 <li key={campus.id}>
//                   {campus.name}
//                   <img
//                     className="logo"
//                     height="100"
//                     width="100"
//                     src={campus.imageURL}
//                   ></img>
//                 </li>
//               );
//             })
//             .filter((campus) => campus.id === this.props.match.params.id)}
//         </ul>
//         <div>details </div>
//       </div>
//     );
//   }
// }

// const mapState = (state) => {
//   return {
//     campuses: state.campuses,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadCampuses: () => dispatch(getCampuses()),
//   };
// };

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    deleteCampus: (campus) => dispatch(deleteCampus(campus, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
