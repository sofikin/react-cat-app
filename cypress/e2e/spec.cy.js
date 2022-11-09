describe('Visit the App', () => {
  it('Visits the Random Cat App', () => {
    cy.visit('http://localhost:3000/')

  })
})

describe('My First Test', () => {
  it('finds the content "Cat App"', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Cat App')
  })
})

describe('Display the Favorites', () => {
  it('Favorite a Cat"', () => {
    cy.visit('http://localhost:3000/', { timeout: 500000 })
    cy.contains('Show your favorites').click()
    cy.wait(10000)
    cy.get('.heart').should('exist')
        .then(listing => {
          const listingCount = Cypress.$(listing).length;
          cy.contains('Show your favorites').click()
          cy.wait(10000)
          cy.get('.heart').should('exist')
          cy.get('.heart').first().click().then(() => {
            cy.contains('Show your favorites').click()
            cy.get('.heart').then(listing => {
              expect(listing).to.have.length(listingCount+1);})
            })
        });


  })
  it('clicks the link "Show your favorites', () => {
    cy.contains('Show your favorites').click()
  })
})