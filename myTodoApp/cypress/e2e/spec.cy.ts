describe('My First Test', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.intercept('POST', '/').as('addTask')
    
  })  

  it('Visits the initial project page', () => {
    cy.contains('Todos')
  })

  it('Should check for an input box and a button', () => {
    cy.get('[data-cy="inputBox"]').should('exist');
    cy.get('[data-cy="button"]').should('exist'); 
  })

  it('Should check if the is a check box, data item and a delete button', () => {
    cy.get('[data-cy="checkBox"]').should('exist');
    cy.get('[data-cy="data-item"]').should('exist');
    cy.get('[data-cy="dltBtn"]').should('exist');
    cy.get('[data-cy="dltBtn"]').should('contain.text', 'Delete');
  })

  it('Should check if the the are 2 item with the lenght of 2', () => {
    cy.get('[data-cy="itemsLength"]').should('have.length', 2)
    cy.get('[data-cy="data-item"]').eq(0).should('contain.text', 'Task 1');
    cy.get('[data-cy="data-item"]').eq(1).should('contain.text', 'Task 2');
  })

  it('Should check if the task label exist', () => {
    cy.get('[data-cy="tasksLabel"]').should('exist');
    cy.get('[data-cy="tasksLabel"]').should('contain.text', '2 items left');
  })

  // it('Should type Task 3 in the Input box and click the add button', () => {
  //   // cy.get('[data-cy="inputBox"]').type('Task 3');
  //   // cy.get('[data-cy="button"]').click();

  //   // // Wait for the POST request to complete
  //   // cy.wait('@addTask')

  //   // // Wait for page reload
  //   // cy.reload()

  //   //  // Add a small wait if needed
  //   //  cy.wait(1000) // Note: Using explicit waits should be avoided if possible

  //   // // Then visit the page
  //   // cy.visit('/')

  //   // // Wait for element to exist before proceeding
  //   // cy.get('[data-cy="data-item"]').should('exist');

  //   cy.get('[data-cy="itemsLength"]').should('have.length', 3)
  //   cy.get('[data-cy="data-item"]').eq(2).should('contain.text', 'Task 3');
  //   cy.get('[data-cy="tasksLabel"]').should('contain.text', '3 items left');
  // })


})
