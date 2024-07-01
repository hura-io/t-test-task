import certData from '../../fixtures/certData.json'

class BasePage {
  getAddButton() {
    return cy.contains('a', `${certData.SubjectCN}`);
  }

  checkForCertData(certData) {
    for (var key in certData) {
      cy.contains('th', `${key}`).next().should('have.text', `${certData[key]}`);
    }
  }
}

export default new BasePage;
