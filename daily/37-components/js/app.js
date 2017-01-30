
const app = angular.module('SnaxApp', []);

const controllers = [
    require('./controllers/snacklist'),
    require('./controllers/receiptlist'),
    require('./controllers/snackbutton'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}

/**
 * Define a component.
 * 
 * - First parameter is a name. Names should match what you want
 * the element to be called in HTML, with the exception of converting
 * KEBABCASE (this-is-kebab-case) into CAMELCASE (thisIsCamelCase).
 * 
 * - Second parameter is an object that defines what the component is.
 */

/**
 * A basic component will have two key parts:
 *   - Template: what HTML should show up in the DOM 
 *   - Controller: what controller is used to render the template
 */
app.component('snackButton', {
    // Note: we're asking Angular to go get another file for us, 
    // and that's risky business if we're reading it straight from
    // their computer. We need to use a webserver (npm install -g serve).
    //
    // Then access your files from the webserver instead of directly
    // from your computer. Your computer is referred to as 'localhost',
    // so we want to access http://localhost:3000.
    templateUrl: 'templates/snack-button.html',
    /* Declare my inputs to this component */
    bindings: {
        // name of binding: type of binding
        // '<' means one-way binding (components cannot CHANGE the value, read only)
        // '=' means two-way binding (components CAN change the value, read / write)
        // '&' means what we're passing is a function
        xyz: '<', 
        tappedOn: '&', // made this name up
    },
    controller: 'SnackButtonController',
});