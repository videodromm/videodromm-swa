describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/Controller')
    cy.contains('#container', 'Inbox')
  })
})
