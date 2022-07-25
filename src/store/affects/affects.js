import axios from "axios";
import { addUsersData } from "../actions/actions";
import { getUsersData } from "../actions/actions";
import { deleteUsersData } from "../actions/actions";
import { updateUsersData } from "../actions/actions";

export const getUsersDataThunk = () => {
  return async (dispatch) => {
    await axios
      .get("api/users")
      .then((response) => {
        dispatch(getUsersData(response.data.data));
      })
      .catch((error) => {
        console.log("request failed", error);
      });
  };
};

export const addUsersDataThunk = (data) => {
  return async (dispatch) => {
    await axios
      .post("api/users", data)
      .then((response) => {
        dispatch(addUsersData(response.data.data));
      })
      .catch((error) => {
        console.log("request failed", error);
      });
  };
};

export const deleteUsersDataThunk = (data) => {
  return async (dispatch) => {
    await axios
      .delete(`api/users/${data}`)
      .then((response) => {
        dispatch(deleteUsersData(response.data.data));
      })
      .catch((error) => {
        console.log("request failed", error);
      });
  };
};

export const updateUsersDataThunk = (data) => {
  return async (dispatch) => {
    await axios
      .put(`api/users/${data._id}`, data)
      .then((response) => {
        dispatch(updateUsersData(response.data.data));
      })
      .catch((error) => {
        console.log("request failed", error);
      });
  };
};
// Compare this snippet from src/store/reducers/reducers.js:
