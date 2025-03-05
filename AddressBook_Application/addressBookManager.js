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
            this.addressBooks.forEach(book => console.log(`- ${book.name}`));
        }
    }

    getTotalContacts() {
        return this.addressBooks.reduce((total, book) => total + book.getContactCount(), 0);
    }

    // View Persons by City
    viewPersonsByCity(city) {
        const results = this.addressBooks.flatMap(book =>
            book.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase())
                         .map(contact => `${contact.firstName} ${contact.lastName} (Address Book: ${book.name})`)
        );

        console.log(`\nPeople in City: ${city}`);
        console.log(results.length ? results.join("\n") : "No contacts found.");
    }

    // View Persons by State
    viewPersonsByState(state) {
        const results = this.addressBooks.flatMap(book =>
            book.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase())
                         .map(contact => `${contact.firstName} ${contact.lastName} (Address Book: ${book.name})`)
        );

        console.log(`\nPeople in State: ${state}`);
        console.log(results.length ? results.join("\n") : "No contacts found.");
    }

    // Count Persons by City
    countPersonsByCity() {
        const cityCount = this.addressBooks.flatMap(book => book.contacts)
            .reduce((countMap, contact) => {
                countMap[contact.city] = (countMap[contact.city] || 0) + 1;
                return countMap;
            }, {});

        console.log("\nContact Count by City:");
        Object.entries(cityCount).forEach(([city, count]) =>
            console.log(`${city}: ${count} contact(s)`)
        );
    }

    // Count Persons by State
    countPersonsByState() {
        const stateCount = this.addressBooks.flatMap(book => book.contacts)
            .reduce((countMap, contact) => {
                countMap[contact.state] = (countMap[contact.state] || 0) + 1;
                return countMap;
            }, {});

        console.log("\nContact Count by State:");
        Object.entries(stateCount).forEach(([state, count]) =>
            console.log(`${state}: ${count} contact(s)`)
        );
    }
}
module.exports = AddressBookManager;
