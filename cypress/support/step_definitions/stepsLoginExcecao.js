import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../pages/login'

Given("acessess page login", () =>{
    //visitar a página de login
    LoginPage.accessPage()
})

When ("enter the invalid username and click login", () =>{
    //preencher o campo email, com um email inválido
    LoginPage.typeEmail()
    //preencher o campo password
    LoginPage.typePassword()
    //clicar no botão login
    LoginPage.clickBtnLogin()
})

Then ("error message is displayed", () =>{
    //validar mensagem de alerta
    LoginPage.validateMsg()
})