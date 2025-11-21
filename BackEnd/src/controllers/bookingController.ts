import { Request, Response } from 'express';
import Booking from '../models/Booking';
import { validateBooking } from '../utils/validation';

// POST /bookings
export const createBooking = async (req: Request, res: Response) => {
  try {
    const errors = validateBooking(req.body);
    if (errors.length > 0) return res.status(400).json({ errors });

    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /bookings
export const getBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
