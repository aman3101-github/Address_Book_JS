// main.js
const AddressBook = require('./addressBook');
const Contact = require('./contact');

// Create an instance of AddressBook
const addressBook = new AddressBook();

// Add a sample contact
const contact1 = new Contact("Aman", "Prajapati", "82/A", "Bhopal",
    "Bhpl", "10001", "123-456-7890", "aman.prajapati@example.com");

// Add contact to Address Book
addressBook.addContact(contact1);

// Display all contacts
addressBook.displayAllContacts();
