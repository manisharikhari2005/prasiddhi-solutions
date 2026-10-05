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
    <section className="relative h-[550px] overflow-hidden">
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
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center animate-hero-content"
      >
        <h1 className="max-w-4xl text-4xl font-bold text-white md:text-6xl">
          {slides[slide].title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/80">
          {slides[slide].description}
        </p>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        {/* CTA → PAGE LINK */}
        <Link
          href={slides[slide].href}
          className="rounded-lg bg-(--primary) px-4 py-2 md:px-6 md:py-3 font-medium text-white transition hover:bg-(--primary-dark)"
        >
          {slides[slide].button}
        </Link>

        {/* CAROUSEL ARROWS */}
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setSlide((slide - 1 + slides.length) % slides.length)
            }
            className="rounded-full border border-white/40 bg-black/20 p-3 text-white transition hover:bg-white hover:text-black"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={() => setSlide((slide + 1) % slides.length)}
            className="rounded-full border border-white/40 bg-black/20 p-3 text-white transition hover:bg-white hover:text-black"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
