# PlanetsCypress
A cypress test to verify the responses of a service

PROJECT DIRECTORIES
- Integration
  -Tests
We have the test folder which contains the tests to be run

-Support
  -Pages
We have the Testpage where all the methods are defined and later called in the tests for reusability

CYPRESS.JOSN
The baseurl is store din the config cypress.json

MAIN.YML
The actions are deifned in the yml file and after each push to github, the npm dependencies are installed and the tests are run 


TESTS
We have tests all with assertions 
"Test - verify Headers",
"Test - verify Response from GET"
"Test - verify Response Time"
"Mock response to return new value"
"Test POST with service"
