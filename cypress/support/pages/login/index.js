/// <reference types='Cypress' />

const elLoginPage =require('./elements').elements

class LoginPage{
    accessPage(){
     cy.visit("https://automationexercise.com/login");
    }

    typeEmail(){
     cy.get(elLoginPage.inputEmail).type("teste@gmail.com")
    }

    typePassword(){
     cy.get(elLoginPage.inputPassword).type("password")
    }

    clickBtnLogin(){
     cy.get(elLoginPage.btnLogin).click()
    }

    validateMsg(){
     cy.get(elLoginPage.msgAlerta).should('be.visible')
    }
}
export default new LoginPage()