const Contact = require('./contact');

class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        try {
            // Prevent duplicate entries
            const isDuplicate = this.contacts.some(
                c => c.firstName === contact.firstName && c.lastName === contact.lastName
            );
            if (isDuplicate) {
                throw new Error(`Contact ${contact.firstName} ${contact.lastName} already exists in ${this.name}.`);
            }

            this.contacts.push(contact);
            console.log(`Contact added successfully to ${this.name}!`);
        } catch (error) {
            console.error(error.message);
        }
    }

    findContactByName(firstName, lastName) {
        return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    deleteContact(firstName, lastName) {
        const index = this.contacts.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact ${firstName} ${lastName} deleted successfully from ${this.name}.`);
        } else {
            console.log(`Contact ${firstName} ${lastName} not found in ${this.name}.`);
        }
    }

    // Sort contacts by Name (case-insensitive)
    sortContactsByName() {
        this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
        console.log("Contacts sorted alphabetically by first name.");
    }

    // Sort contacts by City (case-insensitive)
    sortContactsByCity() {
        this.contacts.sort((a, b) => a.city.localeCompare(b.city));
        console.log("Contacts sorted alphabetically by City.");
    }

    // Sort contacts by State (case-insensitive)
    sortContactsByState() {
        this.contacts.sort((a, b) => a.state.localeCompare(b.state));
        console.log("Contacts sorted alphabetically by State.");
    }

    // Sort contacts by Zip (numerical order)
    sortContactsByZip() {
        this.contacts.sort((a, b) => parseInt(a.zip) - parseInt(b.zip));
        console.log("Contacts sorted numerically by Zip Code.");
    }

    displayAllContacts() {
        if (this.contacts.length === 0) {
            console.log(`No contacts found in ${this.name}.`);
        } else {
            console.log(`\nAddress Book: ${this.name}`);
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
    }
}

module.exports = AddressBook;
