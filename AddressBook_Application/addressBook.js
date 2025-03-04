// addressBook.js

// Import Contact class
const Contact = require('./contact'); 

class AddressBook {
    constructor() {
        // Array to store contacts
        this.contacts = []; 
    }

    // Add a new contact with validation
    addContact(contact) {
        try {
            this.contacts.push(contact);
            console.log("Contact added successfully!");
        } catch (error) {
            console.error(error.message);
        }
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

// Export AddressBook class
module.exports = AddressBook;
