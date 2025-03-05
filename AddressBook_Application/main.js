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
        "Madhya Pradesh", "90001", "123-456-7809", "aman@example.com");

    const contact2 = new Contact("Adarsh", "Raghuwanshi", "82/A", "Indore",
        "Madhya Pradesh", "90051", "245-123-8745", "adarsh@example.com");

    const contact3 = new Contact("Ravi", "Sharma", "120/B", "Mumbai",
        "Maharashtra", "40001", "111-222-3333", "ravi@example.com");

    personalBook.addContact(contact1);
    personalBook.addContact(contact2);
    personalBook.addContact(contact3);
} catch (error) {
    console.error(error.message);
}

//  Searching for persons in Madhya Pradesh
console.log("\n Searching for persons in Madhya Pradesh:");
const personsInMP = personalBook.searchByState("Madhya Pradesh");
console.log(personsInMP.length ? personsInMP.join("\n") : "No contacts found.");

//  Searching for persons in Maharashtra
console.log("\n Searching for persons in Maharashtra:");
const personsInMH = personalBook.searchByState("Maharashtra");
console.log(personsInMH.length ? personsInMH.join("\n") : "No contacts found.");
