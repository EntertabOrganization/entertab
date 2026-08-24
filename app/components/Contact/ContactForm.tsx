"use client";

import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";

export default function ContactForm() {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone",
        text: "Please enter a valid phone number with country code.",
        confirmButtonColor: "#54BF93"
      });
      return;
    }

    setIsLoading(true);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

    try {
      let endpoint = "/api/contact-us";
      const payload: {
        name: string;
        email: string;
        phoneNumber: string;
        message: string;
        serviceType?: string;
      } = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phone,
        message: formData.message,
      };

      if (pathname && pathname.startsWith("/services/")) {
        endpoint = "/api/services";
        const pathKey = pathname.split("/").pop();
        const mappings: Record<string, string> = {
          "website": "Website Development",
          "ui-ux": "UI/UX Design",
          "social-media": "Social Media Management",
          "mobile-app": "Mobile App Development",
          "VoIP": "VoIP Solutions",
          "sales": "Sales System",
          "purchasing": "Purchasing System",
          "project-managment": "Project Management System",
          "digital-transformation": "Digital Transformation Hub",
          "Inventory": "Inventory Management",
          "human-resources": "HR Management",
          "Helpdesk": "Helpdesk Solution",
          "crm": "CRM Solution",
          "accounting": "Accounting System",
          "digital-marketing": "Digital Marketing",
          "seo": "SEO",
          "content-writing": "Marketing Content Writing",
          "brand-building": "Brand Building",
          "ai-edge": "AI Edge AI Powered Automation & Intelligence"
        };
        payload.serviceType = mappings[pathKey || ""] || "Service Inquiry";
      }

      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Thank you! Your message has been sent successfully.",
        confirmButtonColor: "#54BF93"
      });
      setFormData({
        email: "",
        name: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        text: error instanceof Error ? error.message : "Failed to submit. Please check your connection and try again.",
        confirmButtonColor: "#54BF93"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#65C59D] rounded-3xl p-6 md:p-8 shadow-xl h-[800px] flex flex-col">
      <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-6">
        Let&apos;s Get in Touch
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
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-5">
            <label className="block text-white text-sm font-medium mb-1.5">
              Phone Number
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
                disabled: isLoading,
              }}
              numberInputProps={{
                className:
                  "w-full px-5 py-4 rounded-lg bg-white/90 text-text-dark text-base placeholder:text-text-light-gray focus:outline-none focus:ring-2 focus:ring-white/50",
                required: true,
                name: "phone",
                autoComplete: "tel",
                disabled: isLoading,
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
              Sending...
            </>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}
