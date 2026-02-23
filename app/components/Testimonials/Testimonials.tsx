"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "We trusted Entertab to prove the value of corporate identity designs, and they quickly impressed us with their expertise and strategies that boosted our brand presence and clarity. Their support helped us manage our identity effectively across multiple markets.",
    name: "Salem",
    role: "Product Manager",
    rating: 5,
  },
  {
    quote:
      "EnterTab transformed our digital presence completely. Their team was professional, creative, and always on time. The results exceeded our expectations and our customer engagement increased significantly.",
    name: "Ahmed",
    role: "CEO",
    rating: 5,
  },
  {
    quote:
      "Working with EnterTab was a game-changer for our business. Their innovative approach to web development and digital marketing helped us reach new markets and grow our revenue.",
    name: "Sarah",
    role: "Marketing Director",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const goNext = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const goPrev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-12 md:py-16 bg-mint/40">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="Testimonials"
          underline
          className="mb-8 md:mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left - Testimonial Card */}
          <div className="transition-all duration-500">
            <TestimonialCard
              quote={testimonials[current].quote}
              name={testimonials[current].name}
              role={testimonials[current].role}
              rating={testimonials[current].rating}
            />
          </div>

          {/* Right - Description + Navigation */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-text-dark leading-snug mb-4">
              Our true story is written in the success of our clients.
            </h3>
            <p className="text-text-gray text-sm md:text-base leading-relaxed mb-8">
              Our clients are the best storytellers of our journey—their
              experiences and impressions are proof of our commitment to
              delivering tangible and sustainable results.
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white text-primary transition-all duration-300 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 5.5L8 12l6.5 6.5" />
                  <path d="M20.5 5.5L14 12l6.5 6.5" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white text-primary transition-all duration-300 cursor-pointer"
                aria-label="Next testimonial"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.5 5.5L16 12L9.5 18.5" />
                  <path d="M3.5 5.5L10 12L3.5 18.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
