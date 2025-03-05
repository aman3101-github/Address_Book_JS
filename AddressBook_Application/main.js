// main.js

const AddressBookManager = require('./addressBookManager');
const Contact = require('./contact');

// Create Address Book Manager
const manager = new AddressBookManager();

// Create Multiple Address Books
manager.createAddressBook("Personal");
manager.createAddressBook("Work");

// Get Address Books
const personalBook = manager.getAddressBook("Personal");
const workBook = manager.getAddressBook("Work");

// Add Contacts to "Personal" Address Book
try {
    personalBook.addContact(new Contact("Aman", "Prajapati", "82/A", "Bhopal",
        "Madhya Pradesh", "90001", "123-456-7809", "aman@example.com"));

    personalBook.addContact(new Contact("Adarsh", "Raghuwanshi", "82/A", "Indore",
        "Madhya Pradesh", "90051", "245-123-8745", "adarsh@example.com"));
} catch (error) {
    console.error(error.message);
}

// Add Contacts to "Work" Address Book
try {
    workBook.addContact(new Contact("Ravi", "Sharma", "120/B", "Mumbai",
        "Maharashtra", "40001", "111-222-3333", "ravi@example.com"));

    workBook.addContact(new Contact("Neha", "Verma", "150/C", "Bhopal",
        "Madhya Pradesh", "90002", "987-654-3210", "neha@example.com"));
} catch (error) {
    console.error(error.message);
}

//  View Persons by City
manager.viewPersonsByCity("Bhopal");

//  View Persons by State
manager.viewPersonsByState("Madhya Pradesh");
