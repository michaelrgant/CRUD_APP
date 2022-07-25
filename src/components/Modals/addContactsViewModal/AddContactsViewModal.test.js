import store from "../../../store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import AddContactsViewModal from "./AddContactsViewModal";

describe("AddContactsViewModal", () => {
  let component;
  let handleSubmit = jest.fn();
  let handlePostClose = jest.fn();
  let viewPost = jest.fn();
  let setFirstName = jest.fn();
  let setLastName = jest.fn();
  let setNumber = jest.fn();

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <AddContactsViewModal
          setFirstName={setFirstName}
          setLastName={setLastName}
          setNumber={setNumber}
          handleSubmit={handleSubmit}
          handlePostClose={handlePostClose}
          viewPost={viewPost}
        />
      </Provider>
    );
  });
  afterEach(() => {
    component = null;
  });
  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
  it("renders the add contacts modal", () => {
    expect(screen.getByText("Add Contacts")).toBeTruthy();
  })
  it("renders the first name input", () => {
    expect(screen.getByPlaceholderText("Please enter First Name")).toBeTruthy();
  })
  it("renders the last name input", () => {
    expect(screen.getByPlaceholderText("Please enter Last Name")).toBeTruthy();
  })
  it("renders the number input", () => {
    expect(screen.getByPlaceholderText("Please enter Number")).toBeTruthy();
  })
  it("renders the submit button", () => {
    expect(screen.getByText("Add Contacts")).toBeTruthy();
  })
  it("renders the close button", () => {
    expect(screen.getByText("Close")).toBeTruthy();
  })
  
});
