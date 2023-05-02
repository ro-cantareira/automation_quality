import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("i acesses the home page", () => {
    cy.visit("https://loja.electrolux.com.br/");
})

Given("acessess home page", () => {
    cy.visit("https://automationexercise.com");
})

When("acessess login", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click({force:true})
})

When("enter the invalid username and password and click submit", () => {
    cy.get('[data-qa="login-email"]').type('testlogin@test.com')
    cy.get('[data-qa="login-password"]').type('password{enter}')
})

Then("error message is displayed", () => {
    cy.wait(500)
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!')
})