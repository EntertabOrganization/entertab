"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "./TestimonialCard";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

const testimonials = [
  {
    quote:
      "We trusted Entertab to prove the value of corporate identity designs, and they quickly impressed us with their expertise and strategies that boosted our brand presence and clarity. Their support helped us manage our identity effectively across multiple markets.",
    name: "Salem",
    role: "Product Manager",
    rating: 5,
    imageSrc: "/salem.png",
  },
  {
    quote:
      "EnterTab transformed our digital presence completely. Their team was professional, creative, and always on time. The results exceeded our expectations and our customer engagement increased significantly.",
    name: "Ahmed",
    role: "CEO",
    rating: 5,
    imageSrc: "/adam.png",
  },
  {
    quote:
      "Working with EnterTab was a game-changer for our business. Their innovative approach to web development and digital marketing helped us reach new markets and grow our revenue.",
    name: "Sarah",
    role: "Marketing Director",
    rating: 5,
    imageSrc: "/Emma.png",
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
    <section className="py-12 md:py-16" style={{ backgroundColor: "#E9F7F1" }}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="Testimonials"
          className="mb-8 md:mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left - Testimonial Card */}
          <div key={current} className="testimonial-blur-enter">
            <TestimonialCard
              quote={testimonials[current].quote}
              name={testimonials[current].name}
              role={testimonials[current].role}
              rating={testimonials[current].rating}
              imageSrc={testimonials[current].imageSrc}
            />
          </div>

          {/* Right - Description + Navigation */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1E1E1F] leading-[44px] tracking-[-0.02em] mb-[36px]">
              Our true story is written in the success of our clients.
            </h3>
            <p
              className={`text-[#707072] font-medium not-italic text-[24px] leading-[32px] tracking-[0em] mb-8 ${poppins.className}`}
            >
              Our clients are the best storytellers of our journey—their
              experiences and impressions are proof of our commitment to
              delivering tangible and sustainable results.
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={goPrev}
                className="w-[46.68042755126953px] h-[43px] rounded-[12px] px-4 py-[10px] gap-2 bg-[#65C59D] opacity-100 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8145 0.834961C12.1674 0.830097 12.5142 0.925461 12.8125 1.1084L12.832 1.12012L12.8525 1.13086C13.1787 1.30708 13.4437 1.57264 13.6182 1.89258C13.7926 2.21253 13.8692 2.57495 13.8389 2.93555L13.8369 2.9541V2.97266C13.8148 3.54835 13.7452 4.31459 13.7451 4.98828V4.99121C13.7461 5.34643 13.649 5.6959 13.4629 6.00195C13.2768 6.308 13.009 6.55992 12.6865 6.72852L12.668 6.7373L12.6514 6.74805C11.1819 7.60892 9.70701 8.48282 8.22754 9.37012C7.63626 9.72422 7.03684 10.102 6.36133 10.5156L3.83398 12.0625H6.53125C6.71777 12.2094 6.88041 12.3392 7.04883 12.4639C8.79225 13.7543 10.5712 15.0863 12.3545 16.3477L12.3818 16.3652C12.6893 16.5652 12.935 16.8435 13.0938 17.168C13.2523 17.4922 13.3182 17.8525 13.2861 18.21L13.2852 18.2197V18.2305C13.2616 18.5967 13.2493 18.9641 13.2363 19.3096C13.2232 19.6604 13.2089 19.9949 13.1807 20.3252L13.1797 20.3369L13.167 20.4766C13.129 20.7752 13.0201 21.062 12.8477 21.3135C12.6506 21.6009 12.3777 21.8317 12.0566 21.9805C11.7352 22.1292 11.3777 22.1899 11.0234 22.1553C10.6694 22.1206 10.3324 21.9925 10.0479 21.7852L10.041 21.7803L8.16016 20.4287C6.27901 19.0705 4.3969 17.692 2.51465 16.2988L2.50879 16.2939L2.3252 16.1533C1.90775 15.8127 1.56275 15.3938 1.31055 14.9209C1.05834 14.448 0.904373 13.9313 0.856445 13.4014L0.842773 13.1738C0.817169 11.9553 0.855123 10.7362 0.956055 9.52148L0.958008 9.49609L0.958984 9.4707C0.975604 8.72473 1.18216 7.99434 1.56055 7.34668C1.93894 6.69901 2.47652 6.15381 3.12598 5.76367H3.12695L3.13086 5.76074C5.66442 4.21597 8.23339 2.68671 10.7979 1.15332L10.8125 1.14453L10.8262 1.13574C11.1189 0.944953 11.4618 0.839904 11.8145 0.834961Z" stroke="white" strokeWidth="1.67" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="w-[46.68042755126953px] h-[43px] rounded-[12px] px-4 py-[10px] gap-2 bg-[#65C59D] opacity-100 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Next testimonial"
              >
                <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.86621 0.834961C2.51324 0.830097 2.16647 0.925461 1.86816 1.1084L1.84863 1.12012L1.82812 1.13086C1.502 1.30708 1.23696 1.57264 1.0625 1.89258C0.888072 2.21253 0.811487 2.57495 0.841797 2.93555L0.84375 2.9541V2.97266C0.865847 3.54835 0.935514 4.31459 0.935547 4.98828V4.99121C0.934532 5.34643 1.0317 5.6959 1.21777 6.00195C1.40388 6.308 1.67169 6.55992 1.99414 6.72852L2.0127 6.7373L2.0293 6.74805C3.4988 7.60892 4.97365 8.48282 6.45312 9.37012C7.04441 9.72422 7.64382 10.102 8.31934 10.5156L10.8467 12.0625H8.14941C7.96289 12.2094 7.80025 12.3392 7.63184 12.4639C5.88842 13.7543 4.10948 15.0863 2.32617 16.3477L2.29883 16.3652C1.99134 16.5652 1.74569 16.8435 1.58691 17.168C1.42835 17.4922 1.36249 17.8525 1.39453 18.21L1.39551 18.2197V18.2305C1.41903 18.5967 1.43139 18.9641 1.44434 19.3096C1.45748 19.6604 1.47173 19.9949 1.5 20.3252L1.50098 20.3369L1.51367 20.4766C1.55168 20.7752 1.66055 21.062 1.83301 21.3135C2.03006 21.6009 2.30292 21.8317 2.62402 21.9805C2.94543 22.1292 3.30293 22.1899 3.65723 22.1553C4.01125 22.1206 4.34827 21.9925 4.63281 21.7852L4.63965 21.7803L6.52051 20.4287C8.40166 19.0705 10.2838 17.692 12.166 16.2988L12.1719 16.2939L12.3555 16.1533C12.7729 15.8127 13.1179 15.3938 13.3701 14.9209C13.6223 14.448 13.7763 13.9313 13.8242 13.4014L13.8379 13.1738C13.8635 11.9553 13.8255 10.7362 13.7246 9.52148L13.7227 9.49609L13.7217 9.4707C13.7051 8.72473 13.4985 7.99434 13.1201 7.34668C12.7417 6.69901 12.2041 6.15381 11.5547 5.76367H11.5537L11.5498 5.76074C9.01624 4.21597 6.44727 2.68671 3.88281 1.15332L3.86816 1.14453L3.85449 1.13574C3.5618 0.944953 3.21891 0.839904 2.86621 0.834961Z" stroke="white" strokeWidth="1.67" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
