import React from "react";

import { connect } from "react-redux";
import { deleteCampus, createCampus, loadCampuses } from "../store";
import { Link } from "react-router-dom";

const Campuses = ({ campuses }) => {
  console.log(campuses);
  return (
    <div>
      <button onClick={createCampus}> Add New Campus </button>
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
};
// class Campuses extends React.Component {
//   componentDidMount() {
//     this.props.loadCampuses();
//   }
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.campuses.map((campus) => {
//             return (
//               <li key={campus.id}>

//                 <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
//                 <img
//                   className="logo"
//                   height="100"
//                   width="100"
//                   src={campus.imageURL}
//                 ></img>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// const mapState = (state) => {
//   console.log("this is state", state.campuses);
//   return {
//     campuses: state.campuses,
//   };
// };
const mapStateToProps = (campuses) => {
  return { campuses };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCampus: (campus) => dispatch(createCampus(campus)),
    deleteCampus: (campus) => dispatch(deleteCampus(campus)),
    loadCampuses: () => dispatch(loadCampuses(campuses)),
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getCampuses: () => dispatch(loadCampuses(campuses)),
//   };
// };

// const mapDispatchToProps= (dispatch)=> {
//     return {
//       ..create..delete
//     }
// }
export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
