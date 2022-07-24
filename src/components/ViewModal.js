import React from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";

export default function ViewModal(props) {
  return (
    <div className="model-box-view">
      <Modal
        show={props.ViewShow}
        onHide={props.handleViewClose}
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
                value={props.RowData.firstName}
                readOnly
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                value={props.RowData.lastName}
                readOnly
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                value={props.RowData.number}
                readOnly
              />
            </div>

            {props.Delete && (
              <Button
                type="submit"
                className="btn btn-danger mt-4"
                onClick={props.handleDelete}
              >
                Delete Contacts
              </Button>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleViewClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
