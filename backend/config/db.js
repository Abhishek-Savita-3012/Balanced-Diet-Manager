const mongoose = require('mongoose');
console.log(process.env.MONGO_URI)

const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
