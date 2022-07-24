import { GET_USERS_DATA } from "../constants/constants";
import { ADD_USER_DATA } from "../constants/constants";
import { DELETE_USER_DATA } from "../constants/constants";
import { UPDATE_USER_DATA } from "../constants/constants";

const usersData = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_DATA:
      return action.data;
    case ADD_USER_DATA:
      return [...state, action.data];
    case UPDATE_USER_DATA:
      console.log("this is update data", action.data);
      console.log("this is update state", state);
      return state.map((user) => {
        if (user._id === action.data._id) {
          return { ...user, ...action.data };
        } else {
          return user;
        }
      });
    case DELETE_USER_DATA:
      return state.filter((user) => user._id !== action.data._id);
    default:
      return state;
  }
};

export default usersData;
