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
        //console.log("this is response from the getUser thunk", response.data);
        dispatch(getUsersData(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addUsersDataThunk = (data) => {
  console.log("this is data from the thunk", data);
  return async (dispatch) => {
    await axios
      .post("api/users", data)
      .then((response) => {
        //console.log("this is response from the updateUsers thunk", response.data.data);
        dispatch(addUsersData(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteUsersDataThunk = (data) => {
  return async (dispatch) => {
    await axios
      .delete(`api/users/${data}`)
      .then((response) => {
        console.log(
          "this is response from the deleteUsers thunk",
          response.data.data
        );
        dispatch(deleteUsersData(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateUsersDataThunk = (data) => {
  return async (dispatch) => {
    await axios
      .put(`api/users/${data._id}`, data)
      .then((response) => {
        console.log(
          "this is response from the updateUsers thunk",
          response.data.data
        );
        dispatch(updateUsersData(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
// Compare this snippet from src/store/reducers/reducers.js:
