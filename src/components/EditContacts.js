// export default connect(mapState, mapDispatch)(EditContacts);
import React, { useEffect, useState } from "react";
import phoneLogo from "../phoneLogo.svg";
import contactLogo from "../contactsLogo.svg";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import axios from "axios";

const EditContacts = (props) => {
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
  const handleEditShow = () => {
    SetEditShow(true);
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

  //Define here local state that store the form Data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setnumber] = useState("");
  const [SearchedContactsName, setSearchedContactsName] = useState("");
  const [Delete, setDelete] = useState(false);

  //Id for update record and Delete
  const [id, setId] = useState("");

  // Function for filtering contacts by last name
  const filteredContacts = (searchedContactsName) => {
    return function (contacts) {
      return contacts.lastName
        .toLowerCase()
        .includes(searchedContactsName.toLowerCase());
    };
  };

  const filteredHandler = (event) => {
    event.preventDefault();
    setSearchedContactsName(event.target.value);
  };

  //Here we will get all users data
  const GetUsersData = () => {
    const url = "api/users";
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;
        if (status !== "SUCCESS") {
          alert(message, status);
        } else {
          setData(data);
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = () => {
    const url = "api/users";
    const Credentials = { firstName, lastName, number };
    axios
      .post(url, Credentials)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;
        if (status !== "SUCCESS") {
          alert(message, status);
        } else {
          alert(message);
          //window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    const url = `api/users/${id}`;
    const Credentials = { firstName, lastName, number };
    axios
      .put(url, Credentials)
      .then((response) => {
        const result = response.data;
        const { status, message } = result;
        if (status !== "SUCCESS") {
          alert(message, status);
        } else {
          alert(message);
         // window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  //handle Delete Function
  const handleDelete = () => {
    const url = `api/users/${id}`;
    axios
      .delete(url)
      .then((response) => {
        const result = response.data;
        console.log(result);
        const { status, message } = result;
        if (status !== "SUCCESS") {
          alert(message, status);
        } else {
          console.log(status);
          alert(message);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //call this function in useEffect
  console.log(ViewShow, RowData);
  console.log(props);
  useEffect(() => {
    GetUsersData();
  }, []);
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
              {Data.filter(filteredContacts(SearchedContactsName)).map(
                (contact) => (
                  <tr key={contact._id}>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.number}</td>
                    <td style={{ minWidth: 190 }}>
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => {
                          handleViewShow(SetRowData(contact));
                        }}
                      >
                        View
                      </Button>
                      |
                      <Button
                        size="sm"
                        variant="warning"
                        onClick={() => {
                          handleEditShow(
                            SetRowData(contact),
                            setId(contact._id)
                          );
                        }}
                      >
                        Edit
                      </Button>
                      |
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => {
                          handleViewShow(
                            SetRowData(contact),
                            setId(contact._id),
                            setDelete(true)
                          );
                        }}
                      >
                        Delete
                      </Button>
                      |
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      <div className="model-box-view">
        <Modal
          show={ViewShow}
          onHide={handleViewClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>View Contacts Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.firstName}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.lastName}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.number}
                  readOnly
                />
              </div>

              {Delete && (
                <Button
                  type="submit"
                  className="btn btn-danger mt-4"
                  onClick={handleDelete}
                >
                  Delete Contacts
                </Button>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleViewClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Modal for submiting data to database */}
      <div className="model-box-view">
        <Modal
          show={ViewPost}
          onHide={handlePostClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add new Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Please enter First Name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Please Last Name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setnumber(e.target.value)}
                  placeholder="Please enter Number"
                />
              </div>

              <Button
                type="submit"
                className="btn btn-success mt-4"
                onClick={handleSubmit}
              >
                Add Contacts
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handlePostClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Modal for Editing users records */}
      <div className="model-box-view">
        <Modal
          show={ViewEdit}
          onHide={handleEditClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <label>firstName</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Please enter Name"
                  defaultValue={RowData.firstName}
                />
              </div>
              <div className="form-group mt-3">
                <label>lastName</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Please enter email"
                  defaultValue={RowData.lastName}
                />
              </div>
              <div className="form-group mt-3">
                <label>Number</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setnumber(e.target.value)}
                  placeholder="Please enter Number"
                  defaultValue={RowData.number}
                />
              </div>

              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={handleEdit}
              >
                Edit Contacts
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default EditContacts;
