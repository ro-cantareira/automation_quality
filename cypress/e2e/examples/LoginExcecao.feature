Feature: Validação dos cenários de login

    Scenario: Validação Login inválido - email
        Given acessess page login
        When enter the invalid username and click login
        Then error message is displayed