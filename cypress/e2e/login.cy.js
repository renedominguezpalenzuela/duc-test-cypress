

describe('Pagina home', function () {

  beforeEach(() => {
    cy.visit(Cypress.env('site_url'))
  })

  it('Carga pagina home', () => {
    cy.contains('SIGN IN');
  })

  it('Estado del API', function () {
    cy.get('#test-api-btn' ).click();    
    //cy.contains("API is UP and runnig OK");
    cy.contains("API is UP and runnig OK", {timeout: Cypress.env('timeout')});
  })

  it('Login usuario prueba', function () {
    cy.get('#usr').type('darian.alvarez.t@gmail.com');
    cy.get('#pass').type('Buvosic8*');
    cy.get('#login-btn').click()
    

    //cy.url( ).should('contain', `${Cypress.env('site_url')}/main.html`)
    cy.url( {timeout: Cypress.env('timeout')}).should('contain', `${Cypress.env('site_url')}/main.html`)
    cy.location('pathname', {timeout: Cypress.env('timeout')}).should('include', '/main');
    //cy.contains('Transactions List');
    cy.contains('Transactions List', {timeout: Cypress.env('timeout')});
  })

})