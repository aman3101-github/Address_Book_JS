// addressBook.js

const Contact = require('./contact');

class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        // Check for duplicates using filter()
        const isDuplicate = this.contacts.filter(c => 
            c.firstName === contact.firstName && c.lastName === contact.lastName).length > 0;

        if (isDuplicate) {
            console.log(` Contact ${contact.firstName} ${contact.lastName} already exists in ${this.name}.`);
            return;
        }

        this.contacts.push(contact);
        console.log(` Contact added successfully to ${this.name}!`);
    }

    findContactByName(firstName, lastName) {
        return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    editContact(oldFirstName, oldLastName, newDetails) {
        const contact = this.findContactByName(oldFirstName, oldLastName);
        if (!contact) {
            console.log(` Contact ${oldFirstName} ${oldLastName} not found in ${this.name}.`);
            return;
        }

        try {
            contact.firstName = newDetails.firstName ? contact.validateName(newDetails.firstName, "First Name") : contact.firstName;
            contact.lastName = newDetails.lastName ? contact.validateName(newDetails.lastName, "Last Name") : contact.lastName;
            contact.address = newDetails.address ? contact.validateAddress(newDetails.address, "Address") : contact.address;
            contact.city = newDetails.city ? contact.validateAddress(newDetails.city, "City") : contact.city;
            contact.state = newDetails.state ? contact.validateAddress(newDetails.state, "State") : contact.state;
            contact.zip = newDetails.zip ? contact.validateZip(newDetails.zip) : contact.zip;
            contact.phoneNumber = newDetails.phoneNumber ? contact.validatePhone(newDetails.phoneNumber) : contact.phoneNumber;
            contact.email = newDetails.email ? contact.validateEmail(newDetails.email) : contact.email;

            console.log(` Contact updated successfully in ${this.name}!`);
        } catch (error) {
            console.error(` Update failed: ${error.message}`);
        }
    }

    deleteContact(firstName, lastName) {
        const initialLength = this.contacts.length;

        // Remove contact using filter()
        this.contacts = this.contacts.filter(contact => 
            contact.firstName !== firstName || contact.lastName !== lastName);

        if (this.contacts.length < initialLength) {
            console.log(` Contact ${firstName} ${lastName} deleted successfully from ${this.name}!`);
        } else {
            console.log(` Contact ${firstName} ${lastName} not found in ${this.name}.`);
        }
    }

    getContactCount() {
        return this.contacts.length;
    }

    displayAllContacts() {
        if (this.contacts.length === 0) {
            console.log(` No contacts found in ${this.name}.`);
        } else {
            console.log(` Address Book: ${this.name} (Total Contacts: ${this.getContactCount()})`);
            this.contacts.forEach(contact => contact.displayContact());
        }
    }
}

module.exports = AddressBook;
