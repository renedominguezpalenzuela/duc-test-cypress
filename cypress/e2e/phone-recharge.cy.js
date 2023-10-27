
describe('Phone Recharge', function () {

  beforeEach(() => {
    cy.visit(Cypress.env('site_url'))
    cy.get('#usr').type('darian.alvarez.t@gmail.com');
    cy.get('#pass').type('Buvosic8*');
    cy.get('#login-btn').click();
    cy.contains("Phone Recharge", { timeout: Cypress.env('timeout') }).click();
  })

  it('Carga pagina Phone Recharge correctamente', () => {
    cy.contains("Currency to pay for recharge", { timeout: Cypress.env('timeout') });
  })

  it('No se aceptan caracteres no numericos en el telefono 1', () => {
    const cadena = 'abcdefg'
    cy.get('#phone').type(cadena);
    cy.get('#phone').should('have.value', '');
  });

  it('No se aceptan caracteres no numericos en el telefono 2', () => {
    const numero = 'abcd546ef57g345'
    cy.get('#phone').type(numero);
    cy.get('#phone').should('have.value', '54657345');
  });

  it('Introduciendo un numero de telefono correcto', () => {
    const numero = '54657345'
    cy.get('#phone').type(numero);
    cy.get('#phone').should('have.value', '54657345');
  });

});