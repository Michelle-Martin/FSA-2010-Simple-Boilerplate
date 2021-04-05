import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const SET_CAMPUSES = "SET_CAMPUSES";
const SET_STUDENTS = "SET_STUDENTS";
const initialState = [];

const campusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;

    default:
      return state;
  }
};
const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;

    default:
      return state;
  }
};

//action creator
export const setCampuses = (campuses) => {
  return {
    campuses,
    type: SET_CAMPUSES,
  };
};
export const setStudents = (students) => {
  return {
    students,
    type: SET_STUDENTS,
  };
};
export const getCampuses = () => {
  return async (dispatch) => {
    const { data: campuses } = await axios.get("/campuses");
    console.log(campuses);
    dispatch(setCampuses(campuses));
  };
};
export const getStudents = () => {
  return async (dispatch) => {
    const { data: students } = await axios.get("/students");
    console.log(students);
    dispatch(setStudents(students));
  };
};

const root = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
});

const store = createStore(root, applyMiddleware(thunk, logger));

export default store;
