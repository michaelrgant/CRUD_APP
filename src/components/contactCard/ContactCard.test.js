import store from "../../store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ContactsCard from "./ContactCard";

describe("ContactsCard", () => {
  let component;
  let handleViewShow = jest.fn();
  let setRowData = jest.fn();
  let contact = {
    firstName: "John",
    lastName: "Doe",
    number: "1234567890",
  };
  let handleEditShow = jest.fn();
  let setId = jest.fn();
  let setDelete = jest.fn();
  let setViewShow = jest.fn();
  let handleDelete = jest.fn();

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <ContactsCard
          contact={contact}
          handleViewShow={handleViewShow}
          setRowData={setRowData}
          handleEditShow={handleEditShow}
          handleDelete={handleDelete}
          setId={setId}
          setDelete={setDelete}
          setViewShow={setViewShow}
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
  it("renders the contact's first name", () => {
    expect(screen.getByText("John")).toBeTruthy();
  });
  it("renders the contact's last name", () => {
    expect(screen.getByText("Doe")).toBeTruthy();
  });
  it("renders the contact's number", () => {
    expect(screen.getByText("1234567890")).toBeTruthy();
  });
  it("renders the view button", () => {
    expect(screen.getByText("View")).toBeTruthy();
  });
  it("renders the edit button", () => {
    expect(screen.getByText("Edit")).toBeTruthy();
  });
  it("renders the delete button", () => {
    expect(screen.getByText("Delete")).toBeTruthy();
  });
});
