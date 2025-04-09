const { registerDonor } = require("../Service/donorService");

async function createDonor(req, res) {

    console.log(req.body);

    try {
        const response = await registerDonor(req.body);
        return res.status(201).json({
            message: "Donor Registered successfully",
            success: true,
            data: response,
            error: {}
        })
    } catch (error) {
        console.error("Error in donor registration:", error);
    
        return res.status(error.statusCode || 500).json({
            message: error.message || "Internal Server Error",
            success: false,
            data: {},
            error: error.errors || error.error || {}
        });
    }
    
}

module.exports = {
    createDonor
}