# Features Scenarios from Module-2

## this file is used to store the features scenarios from module-2 and implement them in the tests

## this features have some corrections that were pointed out by the mentor 

Feature: Tool shop filters

  Scenario Outline: users, can filter items by different criteria 🟢

    Given the user is on the home page
    When the user select the "<filter>" filter
    Then the user should see the items ordered by "<field>" in "<order>" order

  Examples:
  | filter                     | field | order |
  | name,asc                   | name  | asc   |

Feature: log-in system

Scenario: Successful login with valid credentials 🟢
  Given the user is on the login page
  When the user enter a valid email 
  And the user enter a valid password
  And then the user click the submit button
  Then the user should be redirected to the user account page

Scenario: Attempt login with missing email
  Given the user is on the login page
  When the user leave the email blank
  And the user enter a valid password
  And the user click the submit button
  Then the user should see an error message saying the email is required

Scenario: Attempt login without entering the password
  Given the user is on the login page
  When the user enter a valid email
  And the user leave the password blank
  And then the user click the submit button
  Then the user should see an error message saying the password is required

Feature: register system

Scenario: Successful account registration with valid required fields 🟢
  Given the user is on the registration page
  When the user enters valid required information
  And then user submit the registration form
  Then the user should see a confirmation message that the account was successfully created

Scenario: Registration fails when first name is missing 🟢
  Given the user is on the registration page
  When the user enter all required fields except the first name
  And then the user submit the registration form
  Then the user should see a validation message indicating that the first name is required

Scenario: Registration fails when email format is invalid
  Given the user is on the registration page
  When the user enter all required fields with an invalid email format
  And then the user submit the registration form
  Then the user should see a validation message indicating that the email address is not valid

Scenario: Registration fails when password is empty
  Given the user is on the registration page
  When the user enter all required fields except the password
  And I submit the registration form
  Then I should see a validation message indicating that the password is required