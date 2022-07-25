import { GET_USERS_DATA } from "../constants/constants";
import { ADD_USER_DATA } from "../constants/constants";
import { DELETE_USER_DATA } from "../constants/constants";
import { UPDATE_USER_DATA } from "../constants/constants";

export const getUsersData = (data) => {
  return {
    type: GET_USERS_DATA,
    data,
  };
};

export const addUsersData = (data) => {
  return {
    type: ADD_USER_DATA,
    data,
  };
}
export const deleteUsersData = (data) => {
  return {
    type: DELETE_USER_DATA,
    data,
  };
}

export const updateUsersData = (data) => {
  return {
    type: UPDATE_USER_DATA,
    data,
  };
}
