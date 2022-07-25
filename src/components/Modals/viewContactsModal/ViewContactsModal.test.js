import store from "../../../store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import ViewContactsModal from "./ViewContactsModal";

describe("ViewContactsModal", () => {
  let component;
  let handleViewClose = jest.fn();
  let rowData = {
    firstName: "John",
    lastName: "Doe",
    number: "1234567890",
  };
  let handleDelete = jest.fn();
  let Delete = jest.fn();
  let viewShow = jest.fn();
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <ViewContactsModal
          viewShow={viewShow}
          handleViewClose={handleViewClose}
          rowData={rowData}
          handleDelete={handleDelete}
          Delete={Delete}
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


  it("renders the close button", () => {
    expect(screen.getByText("Close")).toBeTruthy();
  });

});
