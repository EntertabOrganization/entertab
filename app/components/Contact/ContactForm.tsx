"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-primary rounded-3xl p-6 md:p-8 shadow-xl">
      <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">
        Let&apos;s Get in Touch
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-white text-sm font-medium mb-1.5">
            email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-text-dark text-sm placeholder:text-text-light-gray focus:outline-none focus:ring-2 focus:ring-white/50"
            required
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-white text-sm font-medium mb-1.5">
            name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="full name"
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-text-dark text-sm placeholder:text-text-light-gray focus:outline-none focus:ring-2 focus:ring-white/50"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-white text-sm font-medium mb-1.5">
            Phone Number
          </label>
          <select
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer"
          >
            <option value="">Please Select</option>
            <option value="+1">+1 (US)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+966">+966 (KSA)</option>
            <option value="+971">+971 (UAE)</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-white text-sm font-medium mb-1.5">
            message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="write your message..."
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-text-dark text-sm placeholder:text-text-light-gray focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3.5 bg-btn-dark text-white text-base font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
}
