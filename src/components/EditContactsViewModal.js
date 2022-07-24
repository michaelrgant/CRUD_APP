import React from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";
export default function EditContactsView(props) {
  return (
    <div>
      <div className="model-box-view">
        <Modal
          show={props.ViewEdit}
          onHide={props.handleEditClose}
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
                  onChange={(e) => props.setFirstName(e.target.value)}
                  placeholder="Please enter Name"
                  defaultValue={props.RowData.firstName}
                />
              </div>
              <div className="form-group mt-3">
                <label>lastName</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => props.setLastName(e.target.value)}
                  placeholder="Please enter email"
                  defaultValue={props.RowData.lastName}
                />
              </div>
              <div className="form-group mt-3">
                <label>Number</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => props.setNumber(e.target.value)}
                  placeholder="Please enter Number"
                  defaultValue={props.RowData.number}
                />
              </div>

              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={props.handleEdit}
              >
                Edit Contacts
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleEditClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
