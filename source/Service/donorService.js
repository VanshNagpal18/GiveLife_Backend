const { createDonor } = require("../Repositories/donorRepositories");

async function registerDonor(donorDetails){

    const newDonor = await createDonor({
        fullName : donorDetails.fullName,
        dob : donorDetails.dob,
        email : donorDetails.email,
        phoneNumber : donorDetails.phoneNumber,
        likeToDonate : donorDetails.likeToDonate,
        organName : donorDetails.organName,
        additioanlComments : donorDetails.additioanlComments
    })

    if(!newDonor){
        throw { message : "Something went wrong, Unable to create donor", statusCode: 500 }
    }

    return newDonor;

}

module.exports = {
    registerDonor
}