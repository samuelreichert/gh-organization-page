/* eslint-disable no-undef */

describe('GitHub Organization Page app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Show basic organization information like name and image', () => {
    cy.get('.org-logo').should('be.visible');
    cy.get('.org-name').should('be.visible');
    cy.get('.org-website').should('be.visible');
  });

  it('Show pinned repositories if the organization has any', () => {
    cy.get('.pinned-repositories-title').should('be.visible');

    cy.get('.pinned-repo-item').then(($repos) => {
      if ($repos) {
        cy.get('.pinned-repo-name').first().should('be.visible');
        cy.get('.pinned-repo-description').first().should('be.visible');
      }
    });
  });

  it('Show repositories list if the organization has any', () => {
    cy.get('.repos-list-title').should('be.visible');

    cy.get('.repository-item').then(($repos) => {
      if ($repos) {
        cy.get('.repository-name').first().should('be.visible');
        cy.get('.repository-description').first().should('be.visible');
        cy.get('.repository-meta-info').first().should('be.visible');
      }
    });
  });
});
