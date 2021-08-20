const appMockExpressSimulatingServerBehavior = require("../../app");

const indexMock = require("../../index.js");
jest.mock("../../app");

describe("index.js - app entry", () => {
  it("should call app.listen()", () => {
    expect(appMockExpressSimulatingServerBehavior.listen).toHaveBeenCalled();
  }); 
});
