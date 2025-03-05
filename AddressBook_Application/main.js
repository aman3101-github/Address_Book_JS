// main.js

const AddressBookManager = require('./addressBookManager');
const Contact = require('./contact');

// Create Address Book Manager
const manager = new AddressBookManager();

// Create an Address Book
manager.createAddressBook("Personal");

// Get Address Book
const personalBook = manager.getAddressBook("Personal");

// Add Contacts to "Personal" Address Book
try {
    const contact1 = new Contact("Aman", "Prajapati", "82/A", "Bhopal",
        "CADA", "90001", "123-456-7809", "aman@example.com");

    const contact2 = new Contact("Adarsh", "Raghuwanshi", "82/A", "Bhopal",
        "DACA", "90051", "245-123-8745", "adarsh@example.com");

    const duplicateContact = new Contact("Aman", "Prajapati", "90/B", "Indore",
        "DACA", "45201", "987-654-3210", "aman.duplicate@example.com");

    personalBook.addContact(contact1);
    personalBook.addContact(contact2);
    
    // Trying to add a duplicate contact
    console.log("\n Trying to add duplicate contact...");
    personalBook.addContact(duplicateContact);
} catch (error) {
    console.error(error.message);
}

// Display Contacts
console.log("\n Address Book Contacts:");
console.log();
personalBook.displayAllContacts();
