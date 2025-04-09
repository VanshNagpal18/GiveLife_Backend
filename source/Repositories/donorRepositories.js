const donor = require("../Schema/donorSchema");

async function createDonor(donorDetails){

    try {
        const response = await donor.create(donorDetails);
        return response;
    } catch (error) {
        console.error("Error creating donor:", error);

        if (error.name === 'ValidationError') {
            // Collect all schema validation messages
            const messages = Object.values(error.errors).map(err => err.message);

            throw {
                status: 400,
                message: "Validation Error",
                errors: messages
            };
        }

        if (error.code === 11000) {
            // Handle unique field errors (like email or phone)
            const field = Object.keys(error.keyValue)[0];
            return {
                status: 409,
                message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`,
            };
        }

        throw {
            status: 500,
            message: "Failed to create donor",
            error: error.message
        };
    }
}

module.exports = {
    createDonor
}