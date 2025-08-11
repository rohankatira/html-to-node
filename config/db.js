const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rohankatira1:12345@cluster0.trplcev.mongodb.net/"
    );
    console.log(" Database connected");
  } catch (err) {
    console.error(" MongoDB connection failed:", err.message);
  }
};

module.exports = connectDB;
