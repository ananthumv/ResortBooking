import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://resortbooking-v7er.onrender.com/api/admin/login', formData);
      localStorage.setItem('adminToken', res.data.token);
      navigate('/admin/dashboard'); 
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          className="border px-3 py-2 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border px-3 py-2 rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-primary text-dark px-4 py-2 rounded hover:bg-primary-dark"
        >
          Login
        </button>
      </form>
    </div>
  );
}
