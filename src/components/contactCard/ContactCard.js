import React from "react";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { BsPencilSquare, BsDisplay } from "react-icons/bs";

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
    <tr >
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.number}</td>
      <td style={{ minWidth: 190 }}>
        <Button
          size="sm"
          alt="Edit"
          variant="info"
          onClick={() => {
            handleViewShow();
            setRowData(contact);
          }}
        >
          <BsDisplay />
        </Button>
        |
        <Button
          size="sm"
          alt="Edit"
          variant="warning"
          onClick={() => {
            handleEditShow(contact);
            setRowData(contact);
            setId(contact._id);
          }}
        >
          <BsPencilSquare />
        </Button>
        |
        <Button
          size="sm"
          alt="Delete"
          variant="danger"
          onClick={() => {
            handleViewShow();
            setViewShow(true);
            setRowData(contact);
            setId(contact._id);
            setDelete(true);
          }}
        >
          <FaTrash />
        </Button>
        |
      </td>
    </tr>
  );
}
