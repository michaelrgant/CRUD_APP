import store from "../src/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../src/components/App";

describe("App", () => {
  let component;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <App />
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


