/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/hellblade-senuas-sacrifice-pack')

    cy.getByDataCy("game-info").within(() => {
      cy.findByRole('heading', { name: /Hellblade: Senua's Sacrifice/i }).should('exist')
      cy.findByText(/Includes the VR Edition of the critically acclaimed BAFTA/i).should('exist')
      cy.findByText('$14.00').should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    // gallery
    cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 0)

    // content
    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })

    cy.getByDataCy('content').children().should('have.length.at.least', 2)
  });
});
