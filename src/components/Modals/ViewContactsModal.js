import React from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";

export default function ViewContactsModal(props) {
  const {rowData, handleViewClose, handleViewShow, viewShow,handleDelete} = props;
  return (
    <div className="model-box-view">
      <Modal
        show={viewShow}
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
                value={rowData.firstName}
                readOnly
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                value={rowData.lastName}
                readOnly
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                value={rowData.number}
                readOnly
              />
            </div>

            {props.Delete && (
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
  );
}
