// export default connect(mapState, mapDispatch)(EditContacts);
import React, { useEffect, useState } from "react";
import phoneLogo from "../phoneLogo.svg";
import ViewModal from "./ViewModal";
import AddContactsModal from "./AddContactsModal";
import EditContactsView from "./EditContactsViewModal";
import { connect } from "react-redux";
import {
  getUsersDataThunk,
  addUsersDataThunk,
  deleteUsersDataThunk,
  updateUsersDataThunk,
} from "../store/affects/affects";
import contactLogo from "../contactsLogo.svg";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import axios from "axios";

const EditContacts = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [SearchedContactsName, setSearchedContactsName] = useState("");
  const [Delete, setDelete] = useState(false);

  //Id for update record and Delete
  const [id, setId] = useState("");
  const [Data, setData] = useState([]);
  const [RowData, SetRowData] = useState([]);
  const [ViewShow, SetViewShow] = useState(false);
  const handleViewShow = () => {
    SetViewShow(true);
  };
  const handleViewClose = () => {
    SetViewShow(false);
  };

  //For Editing Model
  const [ViewEdit, SetEditShow] = useState(false);
  const handleEditShow = (contact) => {
    SetEditShow(true);
    setFirstName(contact.firstName);
    setLastName(contact.lastName);
    setNumber(contact.number);
  };
  const handleEditClose = () => {
    SetEditShow(false);
  };

  //For Adding New Data Model
  const [ViewPost, SetPostShow] = useState(false);
  const handlePostShow = () => {
    SetPostShow(true);
  };

  const handlePostClose = () => {
    SetPostShow(false);
  };

  // Function for filtering contacts by last name
  const filteredContacts = (searchedContactsName) => {
    return function (contacts) {
      return (
        contacts.lastName
          .toLowerCase()
          .includes(searchedContactsName.toLowerCase()) ||
        contacts.firstName
          .toLowerCase()
          .includes(searchedContactsName.toLowerCase()) 

      );
    };
  };

  const filteredHandler = (event) => {
    event.preventDefault();
    setSearchedContactsName(event.target.value);
  };

  const handleSubmit = () => {
    const data = {
      firstName,
      lastName,
      number,
    };
    props.addContacts(data);
    setFirstName("");
    setLastName("");
    setNumber("");
    handlePostClose();
  };

  const handleEdit = () => {
    const data = {
      firstName,
      lastName,
      number,
      _id: id,
    };

    props.updateContacts(data);

    setFirstName("");
    setLastName("");
    setNumber("");
    handleEditClose();
  };

  //handle Delete Function
  const handleDelete = () => {
    props.deleteContact(id);
    handleViewClose();
  };

  useEffect(() => {
    props.getContacts();
  }, []);
  const data = props.contacts;
  return (
    <div>
      <div className="row">
        <div className="mt-5 mb-4">
          <h1 className=" d-flex justify-content-center">
            <img alt="logo" src={phoneLogo}></img>
            Phone Book App
          </h1>
          <div className="d-flex justify-content-around">
            <h2>
              {" "}
              <img alt="logo" src={contactLogo}></img>Contacts
            </h2>
            <Button
              variant="primary"
              onClick={() => {
                handlePostShow();
              }}
            >
              <i className="fa fa-plu"></i>
              Add New Contacts
            </Button>
          </div>
          <form className="row g-6 center justify-content-center">
            <i className="fa fa-search"></i>
            <div className="col-7">
              <input
                type="search"
                onChange={filteredHandler}
                className="form-control mt-4 fa fa-search border-end-0 border rounded-pill"
                placeholder="Search for contacts by last name..."
                value={SearchedContactsName}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Number</th>
                <th>Menue</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data
                  .filter(filteredContacts(SearchedContactsName))
                  .map((contact) => (
                    <tr key={contact._id}>
                      <td>{contact.firstName}</td>
                      <td>{contact.lastName}</td>
                      <td>{contact.number}</td>
                      <td style={{ minWidth: 190 }}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={() => {
                            handleViewShow();
                            SetRowData(contact);
                          }}
                        >
                          View
                        </Button>
                        |
                        <Button
                          size="sm"
                          variant="warning"
                          onClick={() => {
                            handleEditShow(contact);
                            SetRowData(contact);
                            setId(contact._id);
                          }}
                        >
                          Edit
                        </Button>
                        |
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => {
                            handleViewShow();
                            SetViewShow(true);
                            SetRowData(contact);
                            setId(contact._id);
                            setDelete(true);
                          }}
                        >
                          Delete
                        </Button>
                        |
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* View Modal */}
      <ViewModal
        ViewShow={ViewShow}
        handleViewClose={handleViewClose}
        RowData={RowData}
        Delete={Delete}
        handleDelete={handleDelete}
      />
      {/* Modal for submiting data to database */}
      <AddContactsModal
        ViewPost={ViewPost}
        handlePostClose={handlePostClose}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setNumber={setNumber}
        handleSubmit={handleSubmit}
      />
      {/* Modal for Editing users records */}
      <EditContactsView
        ViewEdit={ViewEdit}
        handleEditClose={handleEditClose}
        setFirstName={setFirstName}
        RowData={RowData}
        setLastName={setFirstName}
        setNumber={setNumber}
        handleEdit={handleEdit}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(deleteUsersDataThunk(id)),
    getContacts: () => dispatch(getUsersDataThunk()),
    addContacts: (data) => dispatch(addUsersDataThunk(data)),
    updateContacts: (data) => dispatch(updateUsersDataThunk(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditContacts);
