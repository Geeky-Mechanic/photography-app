import mongoose from 'mongoose';
/* import dotenv from 'dotenv';
dotenv.config(); */

export default async function connect () {
await mongoose.connect(process.env.MONGO_URL);
};