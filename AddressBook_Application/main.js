const AddressBookManager = require('./addressBookManager');
const Contact = require('./contact');

// Create Address Book Manager
const manager = new AddressBookManager();

// Create an Address Book
manager.createAddressBook("Personal");

// Get Address Book
const personalBook = manager.getAddressBook("Personal");

// Add Contacts
try {
    const contact1 = new Contact("Aman", "Prajapati", "82/A", "Bhopal", "Madhya Pradesh", "90001", "123-456-7809", "aman@example.com");
    const contact2 = new Contact("Adarsh", "Raghuwanshi", "82/B", "Indore", "Maharashtra", "90051", "245-123-8745", "adarsh@example.com");
    const contact3 = new Contact("Vikas", "Sharma", "83/C", "Rajsaman", "Rajasthan", "90234", "999-111-2222", "vikas@example.com");

    personalBook.addContact(contact1);
    personalBook.addContact(contact2);
    personalBook.addContact(contact3);
} catch (error) {
    console.error(error.message);
}

// Display Contacts Before Sorting
console.log("\nBEFORE SORTING:");
personalBook.displayAllContacts();

//  Sort by Name
console.log("\nSORTING CONTACTS BY NAME...");
personalBook.sortContactsByName();
personalBook.displayAllContacts();

//  Sort by City
console.log("\nSORTING CONTACTS BY CITY...");
personalBook.sortContactsByCity();
personalBook.displayAllContacts();

//  Sort by State
console.log("\nSORTING CONTACTS BY STATE...");
personalBook.sortContactsByState();
personalBook.displayAllContacts();

//  Sort by Zip
console.log("\nSORTING CONTACTS BY ZIP...");
personalBook.sortContactsByZip();
personalBook.displayAllContacts();
