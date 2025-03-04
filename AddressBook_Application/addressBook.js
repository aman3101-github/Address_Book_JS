// Import Contact class
const Contact = require('./contact'); 

class AddressBook {
    constructor() {
         // Array to store contacts
        this.contacts = [];
    }

    // Add a new contact
    addContact(contact) {
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    // Display all contacts
    displayAllContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            console.log("Address Book Contacts:");
            this.contacts.forEach(contact => contact.displayContact());
        }
    }
}

// Export the AddressBook class
module.exports = AddressBook;
