import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const LOAD_CAMPUSES = "LOAD_CAMPUSES";
const DELETE_CAMPUS = "DELETE_CAMPUS";
const CREATE_CAMPUS = "CREATE_CAMPUS";
const SET_STUDENTS = "SET_STUDENTS";

//action creators
const _loadCampuses = (campuses) => {
  return {
    type: LOAD_CAMPUSES,
    campuses,
  };
};
const _createCampus = (campus) => {
  type: CREATE_CAMPUS, campus;
};
const _deleteCampus = (campus) => ({
  type: DELETE_CAMPUS,
  campus,
});

const _setStudents = (students) => {
  return {
    students,
    type: SET_STUDENTS,
  };
};

//reducers
const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_CAMPUSES:
      state = action.campuses;
      break;
    case CREATE_CAMPUS:
      state = [...state, action.campus];
      break;
    case DELETE_CAMPUS:
      state = state.filter((campus) => campus.id !== action.campus.id);
      break;
  }
  return state;
};

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      state = action.students;
      break;
  }
  return state;
};

const root = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
});

//effects
const loadCampuses = () => {
  return (dispatch) => {
    return axios
      .get("/campuses")
      .then((response) => response.data)
      .then((campuses) => dispatch(_loadCampuses(campuses)));
  };
};

const getStudents = () => {
  return async (dispatch) => {
    const { data: students } = await axios.get("/students");
    console.log(students);
    dispatch(_setStudents(students));
  };
};

const createCampus = (campus) => {
  return (dispatch) => {
    return axios
      .post("/campuses", campus)
      .then((res) => res.data)
      .then((campus) => dispatch(_createCampus(campus)));
  };
};
const deleteCampus = (campus, history) => {
  return (dispatch) => {
    return axios
      .delete(`/campuses/${id}`)
      .then((res) => res.data)
      .then(() => dispatch(_deleteCampus(campus)))
      .then(() => history && history.push("/campuses"));
  };
};

const store = createStore(root, applyMiddleware(thunk, logger));

export default store;

export { loadCampuses, getStudents, deleteCampus, createCampus };
