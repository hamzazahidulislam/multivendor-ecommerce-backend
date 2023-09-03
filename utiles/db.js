const mongoose = require("mongoose");

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewURLParser: true });
    console.log("database connect successful....");
  } catch (error) {
    console.log(error.message);
  }
};
