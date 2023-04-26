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
    
  });
});
