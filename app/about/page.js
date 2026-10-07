import Image from "next/image";
import { Check, Phone } from "lucide-react";

export default function AboutPage() {
  const features = [
    "Award Winning",
    "Professional Staff",
    "24/7 Support",                                          
    "Fair Prices",
  ];

  return (
    <main className="bg-(--background)">
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-(--accent)">
              About Us
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-(--foreground) md:text-4xl lg:text-5xl">
              The Best IT Solution With 10 Years of Experience
            </h1>

            <h2 className="mt-6 text-xl font-semibold text-(--primary)">
              Prasiddhi Solutions – Your Trusted IT & Digital Solutions
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-(--muted)">
              Prasiddhi Solutions is a technology-driven IT solutions and
              software development focused on helping businesses transform their
              ideas into powerful, scalable, secure, and easy-to-use digital
              solutions.
            </p>

            {/* Features */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--primary-light)">
                    <Check size={17} className="text-(--primary)" />
                  </div>

                  <span className="text-sm font-semibold text-(--foreground)">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Phone */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--accent)">
                <Phone size={20} className="text-white" />
              </div>

              <div>
                <p className="text-xs font-medium text-(--muted)">
                  Call to ask any question
                </p>

                <p className="mt-1 text-lg font-bold text-(--primary)">
                  +9990100424
                </p>
              </div>
            </div>
          </div>

          {/* Right Huge Image */}
          <div className="relative">
            {/* Background Shape */}
            <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-(--primary-light)" />

            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/about-us.jpg"
                alt="Prasiddhi Solutions"
                width={700}
                height={700}
                className="h-[450px] w-full object-cover md:h-[550px]"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-(--primary) px-6 py-5 text-white shadow-xl hover:bg-(--primary-light)">
              <p className="text-3xl font-bold">215+</p>
              <p className="text-sm text-white/80">Projects done</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
