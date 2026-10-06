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
    <section className="relative h-[650px] overflow-hidden">
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
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      ))}

      {/* Center Content */}
      <div
        key={slide}
        className="relative z-10 flex h-full flex-col items-center mt-42 px-6 text-center animate-hero-content lg:px-60"
      >
        <h1
          key={slide}
          className="hero-text text-4xl font-bold text-white md:text-6xl"
        >
          {slides[slide].title}
        </h1>

        <p
          key={`description-${slide}`}
          className="hero-description mt-4 max-w-2xl text-white/90"
        >
          {slides[slide].description}
        </p>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-55 left-0 right-0 z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        {/* CTA → PAGE LINK */}
        <Link
          key={slide}
          href={slides[slide].href}
          className="site-button animate"
        >
          <span>{slides[slide].button}</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
        {/* CAROUSEL ARROWS */}
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setSlide((slide - 1 + slides.length) % slides.length)
            }
            className="hero-arrow-left group rounded-full border border-white/40 bg-black/20 p-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-lg active:scale-95"
          >
            <ArrowLeft
              size={20}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>
          <button
            onClick={() => setSlide((slide + 1) % slides.length)}
            className="hero-arrow-right group rounded-full border border-white/40 bg-black/20 p-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-lg active:scale-95"
          >
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
