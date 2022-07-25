import React from "react";
import { Button } from "react-bootstrap";

export default function HeaderCard(props) {
  return (
    <div>
      {" "}
      <div className="row">
        <div className="mt-5 mb-4">
          <h1 className=" d-flex justify-content-center">
            <img alt="phone logo" src={props.phoneLogo}></img>
            Phone Book App
          </h1>
          <div className="d-flex justify-content-around">
            <h2>
              {" "}
              <img alt="contacts logo" src={props.contactLogo}></img>Contacts
            </h2>
            <Button
              variant="primary"
              onClick={() => {
                props.handlePostShow();
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
                onChange={props.filteredHandler}
                className="form-control mt-4 fa fa-search border-end-0 border rounded-pill"
                placeholder="Search for contacts by last name..."
                value={props.SearchedContactsName}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
