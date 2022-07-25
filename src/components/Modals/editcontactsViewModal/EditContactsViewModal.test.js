import store from "../../../store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import EditContactsViewModal from "./EditContactsViewModal";

describe("EditContactsViewModal", () => {
  let component;
  let handleEditClose = jest.fn();
  let rowData = {
    firstName: "John",
    lastName: "Doe",
    number: "1234567890",
  }
  let setFirstName = jest.fn();
  let setLastName = jest.fn();
  let setNumber = jest.fn();
  let handleEdit = jest.fn();
  let viewEdit = jest.fn();
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <EditContactsViewModal
          handleEditClose={handleEditClose}
          viewEdit={viewEdit}
          rowData={rowData}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setNumber={setNumber}
          handleEdit={handleEdit}
        />
      </Provider>
    );
  })
  afterEach(() => {
    component = null;
  });
  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
  it("renders the first name input", () => {
    expect(screen.getByPlaceholderText("Please enter First Name")).toBeTruthy();
  })
  it("renders the last name input", () => {
    expect(screen.getByPlaceholderText("Please enter Last Name")).toBeTruthy();
  })
  it("renders the number input", () => {
    expect(screen.getByPlaceholderText("Please enter Number")).toBeTruthy();
  })

  it("renders the close button", () => {
    expect(screen.getByText("Close")).toBeTruthy();
  })
});
