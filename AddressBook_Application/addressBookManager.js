// addressBookManager.js

const AddressBook = require('./addressBook');

class AddressBookManager {
    constructor() {
        this.addressBooks = [];
    }

    createAddressBook(name) {
        if (this.addressBooks.some(book => book.name === name)) {
            console.log(`Address Book "${name}" already exists!`);
            return;
        }
        const newBook = new AddressBook(name);
        this.addressBooks.push(newBook);
        console.log(`New Address Book "${name}" created successfully!`);
    }

    getAddressBook(name) {
        return this.addressBooks.find(book => book.name === name);
    }

    displayAllAddressBooks() {
        if (this.addressBooks.length === 0) {
            console.log("No Address Books available.");
        } else {
            console.log("Available Address Books:");
            this.addressBooks.forEach(book => 
                console.log(`- ${book.name} (Total Contacts: ${book.getContactCount()})`));
        }
    }
}

module.exports = AddressBookManager;
