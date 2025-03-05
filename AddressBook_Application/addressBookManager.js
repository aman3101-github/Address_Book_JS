// addressBookManager.js

const AddressBook = require('./addressBook');

class AddressBookManager {
    constructor() {
        this.addressBooks = [];
    }

    createAddressBook(name) {
        if (this.addressBooks.some(book => book.name === name)) {
            console.log(` Address Book "${name}" already exists!`);
            return;
        }
        const newBook = new AddressBook(name);
        this.addressBooks.push(newBook);
        console.log(` New Address Book "${name}" created successfully!`);
    }

    getAddressBook(name) {
        return this.addressBooks.find(book => book.name === name);
    }

    displayAllAddressBooks() {
        if (this.addressBooks.length === 0) {
            console.log(" No Address Books available.");
        } else {
            console.log(" Available Address Books:");
            this.addressBooks.forEach(book => console.log(`- ${book.name}`));
        }
    }

    getTotalContacts() {
        return this.addressBooks.reduce((total, book) => total + book.getContactCount(), 0);
    }

    //  View Persons by City across all Address Books
    viewPersonsByCity(city) {
        const results = this.addressBooks.flatMap(book => 
            book.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase())
                         .map(contact => `${contact.firstName} ${contact.lastName} ( ${book.name})`)
        );

        console.log(`\n People in City: ${city}`);
        console.log(results.length ? results.join("\n") : "No contacts found.");
    }

    //  View Persons by State across all Address Books
    viewPersonsByState(state) {
        const results = this.addressBooks.flatMap(book => 
            book.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase())
                         .map(contact => `${contact.firstName} ${contact.lastName} ( ${book.name})`)
        );

        console.log(`\n People in State: ${state}`);
        console.log(results.length ? results.join("\n") : "No contacts found.");
    }
}

module.exports = AddressBookManager;
