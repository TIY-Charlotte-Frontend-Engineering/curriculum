/**
 * REVIEW
 * 
 * Controllers      Controller
 * Glue between templates and services. Gets information from services and adds
 * to scope, defines functions that are called in templates that affect services.
 * 
 * Service          Model
 * Storing and working with data. Making AJAX requests. Specifically NOT anything
 * that has to do with display.
 * 
 * Component        View / controller
 * Pairing of a controller and a template. Useful because they allow us
 * to break our code up into REUSABLE pieces.
 * 
 * We've used components in two different ways:
 *   - Big components: Routing (<ui-view>) to represent a 'page'
 *   - Small components: Pokemon (<pokemon>) and other small, reusable UI components
 * 
 * Components can (and often should) be nested.
 * 
 * Filter           View
 * Modify how information is displayed.
 * 
 * Templates        View
 * Main tool for displaying stuff. Very similar to HTML files, but have
 * Angular-specific extensions that allow us to access $scope. Register
 * event listeners and user interactions too.
 * 
 * Routers          Routing
 * Affect all layers. Determine what code executes based on URL. Simulate
 * multiple pages on a single page.
 */