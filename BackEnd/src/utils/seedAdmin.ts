import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from '../models/Admin';

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('MongoDB connected');

    const exists = await Admin.findOne({ email: 'admin@resort.com' });
    if (!exists) {
      await Admin.create({ email: 'admin@resort.com', password: 'admin123' });
      console.log('Admin created: admin@resort.com / admin123');
    } else {
      console.log('Admin already exists');
    }

    await mongoose.disconnect();
    console.log('MongoDB disconnected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedAdmin();
