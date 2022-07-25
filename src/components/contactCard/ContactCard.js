import React from "react";
import { Button } from "react-bootstrap";
import { Fragment } from "react";

export default function ContactsCard(props) {
  const {
    contact,
    handleViewShow,
    setRowData,
    handleEditShow,
    setId,
    setDelete,
    setViewShow,
  } = props;
  return (

      <tr>
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
        <td>{contact.number}</td>
        <td style={{ minWidth: 190 }}>
          <Button
            size="sm"
            variant="primary"
            onClick={() => {
              handleViewShow();
              setRowData(contact);
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
              setRowData(contact);
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
              setViewShow(true);
              setRowData(contact);
              setId(contact._id);
              setDelete(true);
            }}
          >
            Delete
          </Button>
          |
        </td>
      </tr>
  );
}
