import store from "../../../src/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import Contacts from "./Contacts";


describe("Contacts", () => {
  let component;
  beforeEach(() => {
   component = render(
      <Provider store={store}>
        <Contacts />
      </Provider>
    );
  });
  afterEach(() => {
    component = null;
  });
  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
});
