import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';



import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function AppWrapper() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/admin/login" element={<AdminLogin onLogin={() => navigate('/admin/dashboard')} />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
      <AppWrapper />
  );
}

