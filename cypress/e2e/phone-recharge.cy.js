
describe('Phone Recharge', function () {

  beforeEach(() => {
    //cy.visit('http://localhost:3000')
    cy.visit(Cypress.env('site_url'))
    cy.get('#usr').type('darian.alvarez.t@gmail.com');
    cy.get('#pass').type('Buvosic8*');
    cy.get('#login-btn').click();
    
    //cy.url().should('contain', `${Cypress.env('site_url')}/main.html`)
    //cy.url( {timeout: Cypress.env('timeout')*2}).should('contain', `${Cypress.env('site_url')}/main.html`)
   
    
    //cy.contains("Phone Recharge",  {timeout: Cypress.env('timeout')*2}).click();
    cy.contains("Phone Recharge", {timeout: Cypress.env('timeout')}).click();
  })

  it('Carga pagina Phone Recharge correctamente', () => {
    //cy.wait(10000);
  
    cy.contains("Currency to pay for recharge",  {timeout: Cypress.env('timeout')});
    //cy.contains("Currency to pay for recharge",  {timeout: Cypress.env('timeout')});

   
  })

 //Agregar logout

})