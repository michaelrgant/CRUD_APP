
import React, { useEffect, useState } from "react";
import phoneLogo from "../../phoneLogo.svg";
import ContactTable from "../contactTable/ContactTable"
import ViewModal from "../Modals/ViewContactsModal";
import AddContactsViewModal from "../Modals/AddContactsViewModal";
import EditContactsViewModal from "../Modals/EditContactsViewModal";
import HeaderCard from "../header/HeaderCard";
import { connect } from "react-redux";
import {
  getUsersDataThunk,
  addUsersDataThunk,
  deleteUsersDataThunk,
  updateUsersDataThunk,
} from "../../store/affects/affects";
import contactLogo from "../../contactsLogo.svg";

const Contacts = (props) => {
  const [viewPost, setPostShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [searchedContactsName, setSearchedContactsName] = useState("");
  const [Delete, setDelete] = useState(false);

  //Id for update record and Delete
  const [id, setId] = useState("");
  const [rowData, setRowData] = useState([]);
  const [viewShow, setViewShow] = useState(false);
  const handleViewShow = () => {
    setViewShow(true);
  };
  const handleViewClose = () => {
    setViewShow(false);
  };

  //For Editing Model
  const [viewEdit, setEditShow] = useState(false);
  const handleEditShow = (contact) => {
    setEditShow(true);
    setFirstName(contact.firstName);
    setLastName(contact.lastName);
    setNumber(contact.number);
  };
  const handleEditClose = () => {
    setEditShow(false);
  };

  //For Adding New Data Model
  const handlePostShow = () => {
    setPostShow(true);
  };

  const handlePostClose = () => {
    setPostShow(false);
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
      <HeaderCard
        phoneLogo={phoneLogo}
        contactLogo={contactLogo}
        handlePostShow={handlePostShow}
        filteredHandler={filteredHandler}
        searchedContactsName={searchedContactsName}
      />
      <ContactTable
        searchedContactsName={searchedContactsName}
        data={data}
        setRowData={setRowData}
        filteredContacts={filteredContacts}
        handleViewShow={handleViewShow}
        handleEditShow={handleEditShow}
        handleDelete={handleDelete}
        setId={setId}
        setDelete={setDelete}
        setViewShow={setViewShow}
      />

      {/* View Modal */}
      <ViewModal
        viewShow={viewShow}
        handleViewClose={handleViewClose}
        rowData={rowData}
        Delete={Delete}
        handleDelete={handleDelete}
      />
      {/* Modal for submiting data to database */}
      <AddContactsViewModal
        viewPost={viewPost}
        handlePostClose={handlePostClose}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setNumber={setNumber}
        handleSubmit={handleSubmit}
      />
      {/* Modal for Editing users records */}
      <EditContactsViewModal
        viewEdit={viewEdit}
        handleEditClose={handleEditClose}
        setFirstName={setFirstName}
        rowData={rowData}
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
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
