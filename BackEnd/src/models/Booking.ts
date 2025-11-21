import { Schema, model } from 'mongoose';

interface IBooking {
  fullName: string;
  email: string;
  phone: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  roomType: string;
  createdAt?: Date;
}

const bookingSchema = new Schema<IBooking>({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guests: { type: Number, required: true, min: 1 },
  roomType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model<IBooking>('Booking', bookingSchema);
