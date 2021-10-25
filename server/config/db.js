import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected!'.cyan.underline);
  } catch (err) {
    console.log(err.message.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
