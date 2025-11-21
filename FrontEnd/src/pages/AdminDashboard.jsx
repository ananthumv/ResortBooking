import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          navigate('/admin/login');
          return;
        }

        const res = await axios.get('https://resortbooking-v7er.onrender.com/api/admin/bookings', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(res.data);
      } catch (err) {
        console.error(err);
        navigate('/admin/login');
      }
    };

    fetchBookings();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="container-wide mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">All Bookings</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          Logout
        </button>
      </div>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((b) => (
            <div key={b._id} className="bg-white shadow rounded p-4 hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{b.fullName}</h3>
              <p><span className="font-medium">Email:</span> {b.email}</p>
              <p><span className="font-medium">Phone:</span> {b.phone}</p>
              <p><span className="font-medium">Room:</span> {b.roomType}</p>
              <p><span className="font-medium">Guests:</span> {b.guests}</p>
              <p>
                <span className="font-medium">Check In:</span> {new Date(b.checkIn).toLocaleDateString()}
              </p>
              <p>
                <span className="font-medium">Check Out:</span> {new Date(b.checkOut).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
