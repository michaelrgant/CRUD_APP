import React from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";

export default function AddContactsViewModal(props) {
  const {
    setFirstName,
    setLastName,
    setNumber,
    handleSubmit,
    handlePostClose,
    viewPost,
  } = props;
  return (
    <div>
      <div className="model-box-view">
        <Modal
          show={viewPost}
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
                  placeholder="Please enter Last Name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setNumber(e.target.value)}
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
    </div>
  );
}
