class RunProjectPage {
  visit() {
    cy.visit('/');
  }

  getRunProjectButton() {
    return cy.get('button', {timeout: 5000});
  }
}

export default new RunProjectPage;
