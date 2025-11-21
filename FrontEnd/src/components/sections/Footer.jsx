import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function FooterSection() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) return alert('Please enter a valid email');

    emailjs
      .send(
        'service_dummy123',    // dummy Service ID
        'template_dummy123',   // dummy Template ID
        { user_email: email }, // subscriber email
        'user_dummy123'        // dummy User ID
      )
      .then(() => {
        alert('Subscribed successfully!');
        e.target.reset();
      })
      .catch(() => {
        alert('Subscription failed (dummy IDs). Replace with real EmailJS IDs to send email.');
      });
  };

  return (
    <section
      id="contact"
      className="min-h-[75vh] flex flex-col justify-center items-center bg-white py-16"
    >
      <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-12 p-6">
        {/* Contact */}
        <div className="p-4">
          <h4 className="font-semibold text-lg text-gray-800">Contact</h4>
          <p className="mt-2 text-sm text-gray-700">123 Beach Road, Goa, India</p>
          <p className="mt-1 text-sm text-gray-700">Phone: +91 98765 43210</p>
        </div>

        {/* Social */}
        <div className="p-4">
          <h4 className="font-semibold text-lg text-gray-800">Social</h4>
          <div className="mt-2 flex gap-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="p-4">
          <h4 className="font-semibold text-lg text-gray-800">Newsletter</h4>
          <p className="mt-2 text-sm text-gray-700">Sign up for special offers and events.</p>
          <form className="mt-3 flex gap-2" onSubmit={handleSubscribe}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded-md text-gray-800 border border-gray-400 focus:outline-none focus:border-gray-600 transition"
            />
            <button
              type="submit"
              className="px-3 py-2 rounded-md bg-gray-200 text-gray-800 border border-gray-400 hover:bg-gray-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
