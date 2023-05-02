Feature: Teste prático formulário - aula 02

    Scenario: Preencher os campos de input do formulário
        Given acessess home page
        When acessess login
        When enter the invalid username and password and click submit
        Then error message is displayed