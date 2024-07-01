import cert from "../fixtures/cert.json"
import certData from "../fixtures/certData.json"
import { setCertIntoStorage } from "../support/helper"
import runProjectPage from "../support/pages/RunProjectPage"
import basePage from "../support/pages/BasePage"
import BasePage from "../support/pages/BasePage"


describe('Перевірка даних сертифікату', () => {
  it('Перевірка даних сертифікату у таблиці та інфо-панелі', () => {

    //Запуск проекту
    runProjectPage.visit();
    runProjectPage.getRunProjectButton().click();

    //Встановлення сертифікату в Local Storage
    setCertIntoStorage(cert);

    //Показати блок з інформацію сертифікату та перевірка даних
    basePage.getAddButton().click()
    basePage.checkForCertData(certData);
  })
})
