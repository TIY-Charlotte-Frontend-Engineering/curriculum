// Create a global variable that keeps track of the next ID we should assign
// to a contact. We use this in the `makeContactList()` function below.
var nextId = 0;
// Create a new Contact object that uses the values that we pass into our
// function here.
function makeContact(name, phone, addr) {
    return {
        name: name,
        phone: phone,
        // Create a new date object that represents the current time (the default)
        added: new Date(),
        // This will get set when we add the Contact to the ContactList
        id: undefined,
        addr: {
            street: addr.street,
            city: addr.city,
            state: addr.state,
        },
    };
}

function makeContactList() {
    return {
        binder: [],
        // Find a contact by name.
        find: function (name) {
            var results = [];
            // Look through all contacts one by one until we find one with the
            // right name.
            for (var i = 0; i < this.binder.length; i++) {
                // Check the name of each contact and push it onto the results array
                // if the name matches the input parameter.
                if (this.binder[i].name === name) {
                    results.push(this.binder[i]);
                }
            }

            // Return the array that's got all contacts with the specified name.
            return results;
        },
        // Find a contact by ID. Basically the same as above except we're looking through
        // to find elements with matching ID instead of name. Also ID's are unique so we
        // don't need to find more than one. We can quit as soon as we find one.
        get: function (id) {
            for (var i = 0; i < this.binder.length; i++) {
                if (this.binder[i].id === id) {
                    return this.binder[i];
                }
            }

            // If we make it to this point then we return null; that means there isn't
            // a contact in the list with this ID. `null` basically means 'no value.'
            return null;
        },
        add: function (contact) {
            // Use the global `nextId` value and then increment it.
            // Shorthand: contact.id = nextId++;
            contact.id = nextId;
            nextId = nextId + 1;

            this.binder.push(contact);
        },
        remove: function (id) {
            for (var i = 0; i < this.binder.length; i++) {
                // See if this is the item that needs to be deleted.
                if (this.binder[i].id === id) {
                    // Remove the element. There are several different functions
                    // you could've used for this.
                    this.binder.splice(i, 1);
                    // We can return right afterwards because ID's are unique; if we
                    // found an item to delete that means it won't exist anywhere else
                    // in the list.
                    return;
                }
            }
        },
    };
}

// Create a contact and store it in the `friend` variable
var friend = makeContact('Steve Carson', '8447991030', {
    street: '101 Persimmon St',
    city: 'Charlotte',
    state: 'NC',
});

// Testing 1, 2, 3
console.log(friend);

// Create a ContactList called `phoneBook` and add our Contact object to it.
var phoneBook = makeContactList();
phoneBook.add(friend);