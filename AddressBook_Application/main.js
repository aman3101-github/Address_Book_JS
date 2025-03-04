// main.js

const AddressBookManager = require('./addressBookManager');
const Contact = require('./contact');

// Create Address Book Manager
const manager = new AddressBookManager();

// Create an Address Book
manager.createAddressBook("Personal");

// Get Address Book
const personalBook = manager.getAddressBook("Personal");

// Add a Contact
try {
    const contact1 = new Contact("Aman", "Prajapati", "82/A", "Bhopal",
        "CADA", "90001", "123-456-7809", "aman@example.com");
    personalBook.addContact(contact1);
} catch (error) {
    console.error(error.message);
}

// Display Contacts Before Editing
console.log("\n BEFORE EDITING:");
personalBook.displayAllContacts();

// Find and Edit Contact
console.log("\n Finding and Editing Contact...");
personalBook.editContact("Aman", "Prajapati", {
    phoneNumber: "123-457-0895",
    email: "aman.prajapati@example.com",
    address: "123/A"
});

// Display Contacts After Editing
console.log("\n AFTER EDITING:");
personalBook.displayAllContacts();
