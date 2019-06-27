/// <reference types="Cypress" />

describe("Accessibility checks", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.injectAxe()
    cy.wait(500)
  })
  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y()
  })
  it("Navigates to posts and checks for accessibility violations", () => {
    // FIXME:
    cy.get('[data-cy="post-title"]').click({ multiple: true }).checkA11y();
    cy.getByText(/Blog/i).click();
  })
})
