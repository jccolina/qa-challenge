Feature: Products page

Scenario: Check a product is not available with guest user
    Given I go to shop page
    And I select product category 'JavaScript'
    When I open product 'JS Data Structures and Algorithm'
    Then I should see product page
    Then I should see stock status 'Out of stock' on product page

# This test intentionally fails to show fails on report
Scenario: Check a product is not available with logged-in user
    Given I log in with a new user
    And I go to shop page
    And I select product category 'JavaScript'
    When I open product 'JS Data Structures and Algorithm'
    Then I should see product page
    Then I should see stock status 'Out of stockFails' on product page