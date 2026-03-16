"use client";

import { useState } from "react";

interface CareerPageFormProps {
  title?: string;
  buttonText?: string;
  onSubmit?: (formData: any) => void;
}

const POSITIONS = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Product Manager",
  "QA Engineer",
  "DevOps Engineer",
  "Data Scientist",
  "Business Analyst",
  "Project Manager",
];

const EXPERIENCE_LEVELS = [
  "0-1 years",
  "1-3 years",
  "3-5 years",
  "5-7 years",
  "7-10 years",
  "10+ years",
];

const EMPLOYMENT_TYPES = [
  "Full-Time",
  "Part-Time",
  "Contract",
  "Internship",
  "Freelance",
];

export default function CareerPageForm({
  title = "Let's Get in Touch",
  buttonText = "Send",
  onSubmit,
}: CareerPageFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    position: "",
    yearsOfExperience: "",
    employmentType: "",
    cvFile: null as File | null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, cvFile: file }));
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
    <div className="bg-[#65C59D] rounded-3xl p-6 md:p-8 shadow-xl min-h-[600px] flex flex-col">
      <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-6">
        {title}
      </h3>

      <form
        onSubmit={handleSubmit}
        className="flex-1 min-h-0 flex flex-col gap-5"
      >
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

          {/* Position / Specialisation */}
          <div className="mb-5">
            <label className="block text-black text-sm font-medium mb-1.5">
              Position / Specialisation
            </label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-lg bg-[#E6E6E6] text-text-dark text-base focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            >
              <option value="">Please Select</option>
              {POSITIONS.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>

          {/* Years of Experience */}
          <div className="mb-5">
            <label className="block text-black text-sm font-medium mb-1.5">
              Years of Experience
            </label>
            <select
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-lg bg-[#E6E6E6] text-text-dark text-base focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            >
              <option value="">Please Select</option>
              {EXPERIENCE_LEVELS.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* Type of Employment */}
          <div className="mb-5">
            <label className="block text-black text-sm font-medium mb-1.5">
              Type of employment
            </label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-lg bg-[#E6E6E6] text-text-dark text-base focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            >
              <option value="">Please Select</option>
              {EMPLOYMENT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* CV Upload */}
          <div className="mb-5">
            <label className="block text-black text-sm font-medium mb-1.5">
              CV Upload
            </label>
            <input
              type="file"
              name="cvFile"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="w-full px-5 py-4 rounded-lg bg-[#E6E6E6] text-text-dark text-base file:bg-gray-500 file:text-white file:border-none file:px-3 file:py-2 file:rounded file:cursor-pointer"
            />
            {formData.cvFile && (
              <p className="text-sm text-black mt-2">
                File: {formData.cvFile.name}
              </p>
            )}
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
