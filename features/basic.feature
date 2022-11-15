Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Scenario: Login functionality with Valid User Name and Password
    Given I Login into Orange HRM 
    Then I should see the Dashboard page

  Scenario: Login to HRM and go to Admin Tab
    Given I Login into Orange HRM
    When I go to Admin Tab
    Then I should see the "System"
    Then I should see the "Users"
