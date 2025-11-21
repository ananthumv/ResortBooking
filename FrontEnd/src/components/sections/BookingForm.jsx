import React, { useState } from 'react';
import axios from 'axios';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    roomType: 'Standard',
    guests: 1,
    checkIn: '',
    checkOut: '',
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const errs = [];
    const today = new Date();
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);

    if (!formData.fullName.trim()) errs.push('Full name is required.');
    if (!formData.email.trim()) errs.push('Email is required.');
    if (!formData.phone.trim()) errs.push('Phone number is required.');

    if (!formData.checkIn) errs.push('Check-in date is required.');
    else if (checkInDate < today.setHours(0,0,0,0)) errs.push('Check-in date must be in the future.');

    if (!formData.checkOut) errs.push('Check-out date is required.');
    else if (checkOutDate <= checkInDate) errs.push('Check-out date must be after check-in.');

    if (formData.guests < 1) errs.push('Guests must be at least 1.');

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateForm();
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    setErrors([]);

    try {
      await axios.post('https://resortbooking-v7er.onrender.com/api/bookings', formData);
      alert('Booking successful!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        roomType: 'Standard',
        guests: 1,
        checkIn: '',
        checkOut: '',
      });
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || 'Booking failed, please try again.');
    }
  };

  return (
    <section id="booking" className="py-16 bg-gray-50">
      <div className="container-wide max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">Book Your Stay</h3>

        {/* Display Validation Errors */}
        {errors.length > 0 && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">
            <ul className="list-disc list-inside">
              {errors.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        <form className="grid gap-6 md:grid-cols-2 md:gap-8" onSubmit={handleSubmit}>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Suite</option>
          </select>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            placeholder="Number of Guests"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary-dark transition shadow-md"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
