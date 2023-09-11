
describe('Phone Recharge', function () {

  beforeEach(() => {
    cy.visit(Cypress.env('site_url'))
    cy.get('#usr').type('darian.alvarez.t@gmail.com');
    cy.get('#pass').type('Buvosic8*');
    cy.get('#login-btn').click();
    cy.contains("Phone Recharge", {timeout: Cypress.env('timeout')}).click();
  })

  it('Carga pagina Phone Recharge correctamente', () => {
    //cy.wait(10000); 
    cy.contains("Currency to pay for recharge",  {timeout: Cypress.env('timeout')});   
  })

 

})