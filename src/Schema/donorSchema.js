const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minlength: [2, "Name shouldn't be less than 2 character"],
    maxlength: [50, "Name shouldn't be exceed by 50 character"],
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: [true, "Email already exist"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address",
    ],
    required: [true, "Email address can not be empty"],
  },
  phoneNumber: {
    type: String,
    trim: true,
    require: [true, "Mobile number can't be empty"],
    unique: [true, "Mobile number already exist"],
    minlength: [10, "Please enter a valid phone number"],
    maxlength: [13, "Please enter a valid phone number"],
  },
  likeToDonate: {
    type: Boolean,
    required: true,
  },
  organName: {
    type: String,
    required: true,
    enum: ["Heart", "Kidney", "Lungs", "Liver", "Pancreas", "Intestine", "All of the above"]
  },
  additioanlComments: {
    type: String,
  }
},{ timestamps: true, versionKey: false });

const donor = mongoose.model("Donor", donorSchema);

module.exports = donor;