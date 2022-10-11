@login
Feature: Login
  Eu como usuario
  Gostaria de fazer Login na aplicação
  Para acessar o sistema

  @login_success
  Scenario: Login with success
    Given I fill email
    And I fill password
    When I tap on Entrar
    Then I see the Salvar button