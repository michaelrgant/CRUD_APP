import store from "../../../src/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import phoneLogo from "../../../src/phoneLogo.svg";
import contactLogo from "../../../src/contactsLogo.svg";

import HeaderCard from "./HeaderCard";

describe("HeaderCard", () => {
  let component;
  let handlePostShow = jest.fn();
  let filteredHandler = jest.fn();
  let searchedContactsName = jest.fn();
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <HeaderCard
          phoneLogo={phoneLogo}
          contactLogo={contactLogo}
          handlePostShow={handlePostShow}
          filteredHandler={filteredHandler}
          searchedContactsName={searchedContactsName}
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
  it("renders the phone logo", () => {
    expect(screen.getByAltText("phone logo")).toBeTruthy();
  })
  it("renders the contacts logo", () => {
    expect(screen.getByAltText("contacts logo")).toBeTruthy();
  })
  it("renders the add contacts button", () => {
    expect(screen.getByText("Add New Contacts")).toBeTruthy();
  })
  it("renders the search input", () => { expect(screen.getByPlaceholderText("Search for contacts by last name...")).toBeTruthy(); })
});
