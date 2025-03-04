// contact.js
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address, "Address");
        this.city = this.validateAddress(city, "City");
        this.state = this.validateAddress(state, "State");
        this.zip = this.validateZip(zip);
        this.phoneNumber = this.validatePhone(phoneNumber);
        this.email = this.validateEmail(email);
    }

    // Validation for First and Last Name
    validateName(name, fieldName) {
        // Starts with Capital, Min 3 characters
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; 
        if (!nameRegex.test(name)) {
            throw new Error(`Invalid ${fieldName}: "${name}". Must start with a capital and have at least 3 characters.`);
        }
        return name;
    }

    // Validation for Address, City, and State
    validateAddress(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`Invalid ${fieldName}: "${value}". Must have at least 4 characters.`);
        }
        return value;
    }

    // Validation for ZIP Code (5-digit or 5+4 format)
    validateZip(zip) {
        const zipRegex = /^\d{5}(-\d{4})?$/; // Matches 12345 or 12345-6789
        if (!zipRegex.test(zip)) {
            throw new Error(`Invalid ZIP Code: "${zip}". Must be in format 12345 or 12345-6789.`);
        }
        return zip;
    }

    // Validation for Phone Number (XXX-XXX-XXXX or (XXX) XXX-XXXX)
    validatePhone(phone) {
        const phoneRegex = /^(\(\d{3}\)\s\d{3}-\d{4}|\d{3}-\d{3}-\d{4})$/;
        if (!phoneRegex.test(phone)) {
            throw new Error(`Invalid Phone Number: "${phone}". Must be in format XXX-XXX-XXXX or (XXX) XXX-XXXX.`);
        }
        return phone;
    }

    // Validation for Email
    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error(`Invalid Email: "${email}". Must be in a valid format (e.g., user@example.com).`);
        }
        return email;
    }

    // Display Contact Details
    displayContact() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(` Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}`);
        console.log(` Phone: ${this.phoneNumber}`);
        console.log(`Email: ${this.email}`);
        console.log();
    }
}

// Export Contact class
module.exports = Contact;
