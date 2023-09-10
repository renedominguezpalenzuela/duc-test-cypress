

describe('Pagina home', function () {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Carga pagina home', () => {
    cy.contains('SIGN IN');
  })

  it('Estado del API', function () {
    cy.get('#test-api-btn').click()
    cy.contains("API is UP and runnig OK");
  })

  it('Login usuario prueba', function () {
    cy.get('#usr').type('darian.alvarez.t@gmail.com');
    cy.get('#pass').type('Buvosic8*');
    cy.get('#login-btn').click();
    cy.url({timeout: 60000}).should('contain', 'http://localhost:3000/main.html')
    cy.location('pathname', {timeout: 60000}).should('include', '/main');
    cy.contains('Transactions List', {timeout: 60000});
  })

})