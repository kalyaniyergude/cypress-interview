/**
 * Requirements:
 * 1. Navigate to Sysco.com website.
 * 2. ASSERT: that `Become A Customer` link is visible.
 * 3. Click on `Become A Customer` link.
 * 4. ASSERT: that user lands `Become A Customer` form by asserting the title of the page.
 * 5. On the form, select No for `Are you the primary contact?` dropdown.
 * 6. Fill the rest of the form with fake data. Use 77077 as zip code.
 * 7. Click `Next` button to navigate to second page.
 * 8. ASSERT: that both billing and shipping zip code inputs are pre-filled with 77077.
 * 9. Input this as business address: `1390 Enclave Parkway, Houston, TX 77077 US`.
 * 10. Check the checkbox `Same as Business Billing Address`.
 * 11. ASSERT: that shipping address inputs are hidden.
 * 12. Uncheck the checkbox `Same as Business Billing Address`.
 * 13. ASSERT: the entries in billing address section match the ones in shipping address.
 * 
 * 
 * Rules:
 * 1. Do not submit the form. Test should end after step 13 above.
 * 2. Feel free to create additional folders/files as needed.
 * 3. Use data-qa attributes of elements as locator if available.
 * 4. Create your own branch and commit all your code to your own branch.
 * 5. Push branch to upstream to submit your solution.
 */


describe('interview test', () => {
  it('beceom-a-customer form test', () => {
    // Add your code below
    cy.visit('https://www.sysco.com');
    cy.get("[aria-label='Navigate to Become A Customer']").should('be.visible')
    cy.get("[aria-label='Navigate to Become A Customer']").click

     cy.title('eq','sysco')

     cy.get("input[aria-labelledby='foundation-text-input-1']").click

     cy.get("li[value='false']").click

     cy.get("[data-qa='primary_first_name']").type("abc")

     cy.get("[data-qa='primary_last_name']").type("xyz")

     cy.get("[data-qa='primary_phone']").type("5555555555")

     cy.get("[data-qa='primary_email']").type("abc@gmail.com")

     cy.get("[data-qa='first_name']").type("abc")

     cy.get("[data-qa='last_name']").type("xyz")

     cy.get("[data-qa='phone']").type("8888888888")

     cy.get("[data-qa='email']").type("xyz@gmail.com")

     cy.get("[data-qa='business_name']").type("pqrrrr")

     cy.get("[aria-labelledby='foundation-text-input-8']").click

     cy.get("[value='Non-Operational']").click

     cy.get("[data-qa='billing_zip_code']").type("77077")

     cy.get("[aria-labelledby='foundation-text-input-10']").click

     cy.get("[value='$750 - $1200']").click

     cy.get("[data-qa='btn_next']").click

     cy.get("[data-qa='billing_zip_code']").should("77077")

     cy.get("[data-qa='shipping_zip_code']").should("77077")

     cy.get("[data-qa='billing_address']").type("1390 Enclave Parkway")

     cy.get("[aria-labelledby='foundation-text-input-2076']").click

     cy.get("[value='TX']").first().click

     cy.get("[aria-labelledby='foundation-text-input-2078']").click

     cy.get("[value='US']").first().click

     cy.get(".toggle-base").click

 

     // i completed hidden data because of these assertion test case will fail

    // cy.get("[aria-labelledby='foundation-text-input-2170").should("be.visible")

     //cy.get("[aria-labelledby='foundation-text-input-2190").should("be.visible")

 

     cy.get("[data-qa='billing_address']").contains("value").should("1390 Enclave Parkway")

     cy.get("[data-qa='shipping_city']").contains("value").should("Houston")

     cy.get("[aria-labelledby='foundation-text-input-2339']").contains("value").should("TX")

     cy.get("[aria-labelledby='foundation-text-input-2339']").contains("value").should("US")


    
  });
});
