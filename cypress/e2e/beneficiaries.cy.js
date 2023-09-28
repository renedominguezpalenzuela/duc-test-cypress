
describe('Beneficiarios', function () {


  beforeEach(() => {

    //login
    cy.visit(Cypress.env('site_url'))
    cy.get('#usr').type('darian.alvarez.t@gmail.com');
    cy.get('#pass').type('Buvosic8*');
    cy.get('#login-btn').click();


    cy.intercept('POST', 'https://backend.ducapp.net/api/private/users/beneficiary', {
      fixture: 'allbeneficiarys.json'
    }).as("datos1")

  
    cy.intercept('POST', 'https://backend.ducapp.net/api/private/users/beneficiary/update', {
      fixture: 'beneficiaryupdate.json'
    })



  })


  it('Carga pagina Beneficiaries correctamente', () => {


    



    //hacer clic en opcion beneficiarios (entrar a pagina de beneficiarios)
    cy.contains("Beneficiaries", { timeout: Cypress.env('timeout') }).click();

    //cy.wait('@DatosIniciales')


    //comprueba que carga la pagina de beneficarios ok
    cy.contains("Select Beneficiary", { timeout: Cypress.env('timeout') });

    //selecciona el primer beneficiario 
    cy.get('#benListaBeneficiarios').select('61cb9757dade96db7e490cb6').should('have.value', '61cb9757dade96db7e490cb6');

    //selecciona fila en la tabla de beneficiarios y comprueva el CI
    //cy.get('#container-listbeneficiary > tbody > tr.odd > td:nth-child(2)').should('93040907788')

    //Comprueba que existe un beneficiario en el table data con el id dado
   // cy.wait('@datos1')
    cy.get('#container-listbeneficiary').contains("td", "93040907788");



    cy.intercept('POST', 'https://backend.ducapp.net/api/private/users/beneficiary', {
      fixture: 'allbeneficiarys2.json'
    }).as("datos2")

    
    //Cambiar valor del CI
    cy.get('#benID').type('93040907782')

    //Salvar beneficiario
    cy.get('#benSaveBeneficiario').click()

    //cy.wait('@datos2')
    cy.get('.swal2-confirm').click()


    //Comprueba que existe un beneficiario en el table data con el id modificado
    //cy.get('#container-listbeneficiary').contains("td", "93040907782");




    //modificar valor del id



  })







})