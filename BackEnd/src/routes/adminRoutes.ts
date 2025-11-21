import { Router, Response } from 'express';
import Admin from '../models/Admin';
import Booking from '../models/Booking';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { AuthRequest, adminAuth } from '../middleware/auth';

dotenv.config();

const router = Router();

/**
 * @route   POST /api/admin/create
 * @desc    Create default admin (for seeding/testing)
 * @access  Public
 */
router.post('/create', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await Admin.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Admin already exists' });

    const admin = new Admin({ email, password });
    await admin.save();
    res.status(201).json({ message: 'Admin created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @route   POST /api/admin/login
 * @desc    Login admin and return JWT
 * @access  Public
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt:', email, password);

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

    console.log('Stored hash:', admin.password);
    const isMatch = await admin.comparePassword(password);
    console.log('Password match:', isMatch);

    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @route   GET /api/admin/bookings
 * @desc    Get all bookings (protected route)
 * @access  Admin
 */
router.get('/bookings', adminAuth, async (req: AuthRequest, res: Response) => {
  try {
    console.log('Admin ID:', req.admin?.id);
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
