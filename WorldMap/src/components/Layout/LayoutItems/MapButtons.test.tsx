import React from "react";
import ReactDOM from "react-dom";
import { MapButtons } from "./MapButtons";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("MapButtons Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MapButtons />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const tree = renderer.create(<MapButtons />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("MapButtons Component Logic", () => {

  });
});
