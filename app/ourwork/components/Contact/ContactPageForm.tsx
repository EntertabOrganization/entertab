"use client";

import { useState } from "react";
import Swal from "sweetalert2";

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
  "SEO",
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

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceChange = (service: string) => {
    if (isLoading) return;
    setFormData((prev) => ({
      ...prev,
      requiredServices: prev.requiredServices.includes(service)
        ? prev.requiredServices.filter((s) => s !== service)
        : [...prev.requiredServices, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.requiredServices.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please select at least one required service.",
        confirmButtonColor: "#54BF93"
      });
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
      return;
    }

    setIsLoading(true);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

    try {
      const response = await fetch(`${apiUrl}/api/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          requiredService: formData.requiredServices.join(", "),
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit project inquiry.");
      }

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Project inquiry submitted successfully! We will get back to you soon.",
        confirmButtonColor: "#54BF93"
      });
      setFormData({
        email: "",
        name: "",
        requiredServices: [],
        message: "",
      });
    } catch (error: any) {
      console.error("Project Inquiry submission error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        text: error.message || "Failed to submit. Please check your connection and try again.",
        confirmButtonColor: "#54BF93"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#65C59D] rounded-3xl p-6 md:p-8 shadow-xl min-h-[600px] flex flex-col  "
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
              disabled={isLoading}
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
              disabled={isLoading}
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
                  className={`flex items-center gap-3 cursor-pointer group ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.requiredServices.includes(service)}
                    onChange={() => handleServiceChange(service)}
                    className="w-5 h-5 rounded border-2 border-white/40 bg-white/20 checked:bg-white checked:border-white text-green-600 cursor-pointer accent-white"
                    disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3.5 bg-btn-dark text-white text-base font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 ${
            isLoading ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            buttonText
          )}
        </button>
      </form>
    </div>
  );
}
