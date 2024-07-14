const mongoose = require('mongoose');

// or true based on your preference
mongoose.set('strictQuery', false); 



const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      //"mongodb://GetMyTermin:NiYM%2C%2B%2CapLC%2B4J%2Ch%5E.AY@78.47.75.220:21329/"
      "mongodb://65.109.13.76:27017/myapp"
    )
    if (connection) {
      console.log("DB Connection established")
    }
  } catch (error) {
    console.log("error in connectToDatabase", error)
    throw error
  }
}

export default connectToDatabase
