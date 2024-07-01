export function setCertIntoStorage(cert) {
  cy.window().then((win) => {
    const certValue = [cert.value]
    win.localStorage.setItem(`${cert.key}`, `${JSON.stringify(certValue)}`);
  });

  cy.reload();

}