const TIMEOUT_MS = 20000;

describe("Embedding SDK: metabase-nodejs-react-sdk-embedding-sample compatibility", () => {
  it("should open an Interactive Question", () => {
    cy.visit({
      url: "/",
    });

    expect(cy.findByText("Orders by product category", {timeout: TIMEOUT_MS}).should("exist"));
  });
});
