import store from "../../store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ContactTable from "./ContactTable";

describe("ContactTable", () => {
  let component;
  let handleViewShow = jest.fn();
  let setRowData = jest.fn();
  let handleDelete = jest.fn();
  let setDelete = jest.fn();
  let setViewShow = jest.fn();
  let handleEditShow = jest.fn();
  let setId = jest.fn();
  let searchedContactsName = "";
  let filteredContacts = jest.fn((current) => current);
  let data = null;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <ContactTable
          searchedContactsName={searchedContactsName}
          data={data}
          setRowData={setRowData}
          filteredContacts={filteredContacts}
          handleViewShow={handleViewShow}
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
  it("render table and displays Column First Name", () => {
    expect(screen.getByText("First Name")).toBeTruthy();
  });
  it("render table and displays Column Last Name", () => {
    expect(screen.getByText("Last Name")).toBeTruthy();
  });
  it("render table and displays Column Number", () => {
    expect(screen.getByText("Number")).toBeTruthy();
  });
});
