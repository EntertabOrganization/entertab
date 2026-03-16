"use client";

import { useState } from "react";

interface ContactPageFormProps {
  title?: string;
  buttonText?: string;
  onSubmit?: (formData: any) => void;
}

const SERVICES = [
  "AI Edge - AI-Powered Automation & Intelligence",
  "Digital Transformation Hub",
  "Website Development",
  "Mobile App Development",
  "Brand Building",
  "Contact Center Solutions",
  "UI/UX Design",
  "Digital Marketing",
  "Marketing Content Writing",
  "Social Media Management",
];

export default function ContactPageForm({
  title = "Get in Touch",
  buttonText = "Send",
  onSubmit,
}: ContactPageFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    requiredServices: [] as string[],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      requiredServices: prev.requiredServices.includes(service)
        ? prev.requiredServices.filter((s) => s !== service)
        : [...prev.requiredServices, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="bg-[#65C59D] rounded-3xl p-6 md:p-8 shadow-xl min-h-[600px] flex flex-col"
    >
      <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-6">
        {title}
      </h3>

      <form onSubmit={handleSubmit} className="flex-1 min-h-0 flex flex-col gap-5">
        <div className="flex flex-col gap-5 flex-1 min-h-0">
          {/* Email */}
          <div className="mb-5">
            <label className="block text-black text-sm font-medium mb-1.5">
              email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-5 py-4 rounded-lg bg-[#E6E6E6] text-text-dark text-base placeholder:text-text-light-gray focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-black text-sm font-medium mb-1.5">
              name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="full name"
              className="w-full px-5 py-4 rounded-lg bg-[#E6E6E6] text-text-dark text-base placeholder:text-text-light-gray focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>

          {/* Required Service */}
          <div className="mb-5">
            <label className="block text-black text-sm font-medium mb-3">
              Required Service<span style={{ color: "#252432" }}>*</span>
            </label>
            <div className="space-y-2.5">
              {SERVICES.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={formData.requiredServices.includes(service)}
                    onChange={() => handleServiceChange(service)}
                    className="w-5 h-5 rounded border-2 border-white/40 bg-white/20 checked:bg-white checked:border-white text-green-600 cursor-pointer accent-white"
                  />
                  <span className="text-black text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="block text-black text-sm font-medium mb-1.5">
              message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="write your message..."
              rows={6}
              className="w-full px-5 py-4 rounded-lg bg-[#E6E6E6] text-text-dark text-base placeholder:text-text-light-gray focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
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
