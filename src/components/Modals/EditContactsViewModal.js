import React from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";
export default function EditContactsViewModal(props) {
  const {
    viewEdit,
    handleEditClose,
    rowData,
    setFirstName,
    setLastName,
    setNumber,
    handleEdit,
  } = props;
  return (
    <div>
      <div className="model-box-view">
        <Modal
          show={viewEdit}
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
                  defaultValue={rowData.firstName}
                />
              </div>
              <div className="form-group mt-3">
                <label>lastName</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Please enter email"
                  defaultValue={rowData.lastName}
                />
              </div>
              <div className="form-group mt-3">
                <label>Number</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Please enter Number"
                  defaultValue={rowData.number}
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
}
