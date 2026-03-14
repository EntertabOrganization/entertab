"use client";

import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface ContactPageFormProps {
  title?: string;
  buttonText?: string;
  onSubmit?: (formData: any) => void;
}

export default function ContactPageForm({
  title = "Get in Touch",
  buttonText = "Send",
  onSubmit,
}: ContactPageFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.phone || !isValidPhoneNumber(formData.phone)) return;

    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="bg-[#65C59D] rounded-3xl p-6 md:p-8 shadow-xl min-h-[600px] flex flex-col">
      <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-6">
        {title}
      </h3>

      <form onSubmit={handleSubmit} className="flex-1 min-h-0 flex flex-col gap-5">
        <div className="flex flex-col gap-5 flex-1 min-h-0">
          {/* Email */}
          <div className="mb-5">
            <label className="block text-white text-sm font-medium mb-1.5">
              email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-5 py-4 rounded-lg bg-white/90 text-text-dark text-base placeholder:text-text-light-gray focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-white text-sm font-medium mb-1.5">
              name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="full name"
              className="w-full px-5 py-4 rounded-lg bg-white/90 text-text-dark text-base placeholder:text-text-light-gray focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-5">
            <label className="block text-white text-sm font-medium mb-1.5">
              phone number
            </label>

            <PhoneInput
              international
              defaultCountry="US"
              value={formData.phone}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, phone: value ?? "" }))
              }
              placeholder="please enter phone number"
              className="w-full"
              countrySelectProps={{
                className:
                  "px-5 py-4 rounded-lg bg-white/90 text-text-dark text-base focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer",
              }}
              numberInputProps={{
                className:
                  "w-full px-5 py-4 rounded-lg bg-white/90 text-text-dark text-base placeholder:text-text-light-gray focus:outline-none focus:ring-2 focus:ring-white/50",
                required: true,
                name: "phone",
                autoComplete: "tel",
              }}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="block text-white text-sm font-medium mb-1.5">
              message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="write your message..."
              rows={6}
              className="w-full px-5 py-4 rounded-lg bg-white/90 text-text-dark text-base placeholder:text-text-light-gray focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3.5 bg-btn-dark text-white text-base font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
