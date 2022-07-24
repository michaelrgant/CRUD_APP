import React from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";

export default function AddContactsModal(props) {
  return (
    <div>
      <div className="model-box-view">
        <Modal
          show={props.ViewPost}
          onHide={props.handlePostClose}
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
                  onChange={(e) => props.setFirstName(e.target.value)}
                  placeholder="Please enter First Name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => props.setLastName(e.target.value)}
                  placeholder="Please Last Name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => props.setNumber(e.target.value)}
                  placeholder="Please enter Number"
                />
              </div>

              <Button
                type="submit"
                className="btn btn-success mt-4"
                onClick={props.handleSubmit}
              >
                Add Contacts
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handlePostClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
