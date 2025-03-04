class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // Method to display contact details
    displayContact() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}`);
        console.log(`Phone: ${this.phoneNumber}`);
        console.log(`Email: ${this.email}`);
        console.log();
    }
}

// Export the Contact class for use in other files
module.exports = Contact;