
/* Create a new router. */
module.exports = Backbone.Router.extend({
    // 'views' can be anything (including macaroni)
    // this is passed in from the constructor. views.a
    // is the listView (see app.js).
    //
    // we're doing this because we need the views in our
    // router.
    initialize: function (views) {
        // When I pass the obj into the AppRouter
        // constructor, it gets passed as a param
        // to initialize().
        console.log(views);
        // Save the views to the Router so that we 
        // can access them from anywhere in the router.
        // 'this' refers to the router, see showCreate()
        // down below for how we use it
        this.views = views;
    },

    // Built-in. When someone goes to #create, run the 
    // showCreate() function. Normally these will toggle
    // visibility.
    //
    // 'create' needs to match the hashtag name.
    // this is saying 'when someone visits #create call function
    // showCreate()'
    routes: {
        // Set the 'home page', i.e. when there's no hash fragment
        // by setting an empty route.
        '': 'hideAll',
        'create': 'showCreate',
        'list': 'showList',
        // colon means that we've got a variable here
        'details/:eventId': 'showDetailed',
    },

    // eventId from the route is being passed in as the ID 
    // for showDetailed. The name eventId is unimportant.
    showDetailed: function (id) {
        // id = parseInt(id);
        console.log('good day')
        // console.log('got event id ' + eventId)
        // hide the other views
        // tell detailed view which event to show
        this.views.c.render(id);
        // show the detailed view 
    },

    hideAll: function () {
        this.views.a.el.classList.add('hidden');    // hide 
        this.views.b.el.classList.add('hidden');    // hide 
    },

    /**
     * Toggling the visibility of views.
     */
    showCreate: function () {
        console.log('showing create');
        this.views.a.el.classList.add('hidden');    // hide 
        this.views.b.el.classList.remove('hidden'); // show
    },

    showList: function () {
        console.log('showing list');
        this.views.a.el.classList.remove('hidden'); // hide 
        this.views.b.el.classList.add('hidden');    // show
    },
});