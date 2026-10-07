"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Hero() {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: "Digital Solutions That Drive Business Growth",
      description:
        "We create innovative digital solutions for modern businesses.",
      button: "Explore Services",
      href: "/services",
      image: "/slide-1.jpeg",
    },
    {
      title: "Technology For A Smarter Future",
      description:
        "Powerful technology and strategic solutions built around your business.",
      button: "Learn More",
      href: "/about",
      image: "/slide-2.jpg",
    },
  ];

  return (
    <section
      id="hero"
      className="relative h-[560px] overflow-hidden sm:h-[600px] lg:h-[650px]"
    >
      {/* Background Slides */}
      {slides.map((el, index) => (
        <div
          key={el.title}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            slide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${el.image})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
      ))}

      {/* Center Content */}
      <div
        key={slide}
        className="relative z-10 flex h-full flex-col items-center px-5 pt-28 text-center animate-hero-content sm:px-8 sm:pt-32 md:pt-36 lg:px-20 lg:pt-40 xl:px-40"
      >
        <h1
          key={slide}
          className="hero-text max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {slides[slide].title}
        </h1>

        <p
          key={`description-${slide}`}
          className="hero-description mt-4 max-w-xl text-sm leading-6 text-white/90 sm:text-base md:text-lg md:leading-7"
        >
          {slides[slide].description}
        </p>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-40 left-0 right-0 z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-5 sm:bottom-40 sm:px-8 md:bottom-40 lg:bottom-44 lg:px-30">
        {/* CTA → PAGE LINK */}
        <Link
          key={slide}
          href={slides[slide].href}
          className="site-button group animate !px-3 !py-2 text-xs sm:!px-5 sm:!py-2.5 sm:text-sm"
        >
          <span>{slides[slide].button}</span>

          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        {/* CAROUSEL ARROWS */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() =>
              setSlide((slide - 1 + slides.length) % slides.length)
            }
            className="hero-arrow-left group rounded-full border border-white/40 bg-black/20 p-2.5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-lg active:scale-95 sm:p-3"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1 sm:h-5 sm:w-5"
            />
          </button>

          <button
            onClick={() => setSlide((slide + 1) % slides.length)}
            className="hero-arrow-right group rounded-full border border-white/40 bg-black/20 p-2.5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-lg active:scale-95 sm:p-3"
          >
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
