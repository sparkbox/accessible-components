import 'cypress-each';

const pages = ['/', '/accordion', '/dialog', '/disclosure', '/tabs'];

const terminalLog = (violations) => {
  cy.task('log', `${violations.length} accessibility violation(s) detected`);

  const violationData = violations.map(
    ({
      id, impact, description, nodes,
    }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    }),
  );

  cy.task('table', violationData);
};

const checkAccessibility = () => {
  cy.injectAxe();
  ['macbook-15', 'ipad-mini', 'iphone-6'].forEach((size) => {
    cy.viewport(size);
    cy.checkA11y(null, null, terminalLog);
  });
};

describe('automated accessibility checks', () => {
  it.each(pages)('passes automated accessibility checks: %s', (page) => {
    cy.visit(page);
    checkAccessibility();
  });
});
