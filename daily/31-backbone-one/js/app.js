/**
 * Separation of concerns
 * 
 * Big applications get way, way harder if everything is related to everything else.
 * You can avoid this by somehow 'separating' similar things from unrelated things.
 */
const IngredientsModel = require('./models/ingredients');
const IngredientsView = require('./views/ingredients');

/* First, create a model. */
// let IngredientsModel = 

/* Then work through how to display + interact with the model. */
// let IngredientView = 

window.addEventListener('load', function () {
    let ingredients = new IngredientsModel();

    let mainView = new IngredientsView({
        /* 
        The 'kingdom' the view is in charge of. All elements within this element 
        are solely controlled by this view. 
        */
        el: document.querySelector('body'), // el = element
        model: ingredients, // model = the model to update when times are changing
    });
});