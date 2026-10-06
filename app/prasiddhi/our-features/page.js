import Image from "next/image";
import { Award, Headphones, Medal, Users } from "lucide-react";

export default function WhyChooseUsPage() {
  const features = [
    {
      title: "Best In Industry",
      description:
        "Our objective is to help businesses improve customer relationships, sales performance and customer retention.",
      icon: Medal,
    },
    {
      title: "Award Winning",
      description:
        "The Best IT Solution With 10 Years of Experience Technology.",
      icon: Award,
    },
    {
      title: "Professional Staff",
      description:
        "We help traditional businesses move toward digital operations with customized technology.",
      icon: Users,
    },
    {
      title: "24/7 Support",
      description:
        "Prasiddhi Solutions provides reliable technical support whenever your business needs it.",
      icon: Headphones,
    },
  ];

  return (
    <main className="bg-(--background)">
      {/* Heading */}
      <section className="px-6 pb-12 pt-20 text-center md:pb-16 md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-(--accent)">
          Why Choose Us
        </p>

        <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight text-(--foreground) md:text-5xl">
          We Are Here to Grow Your Business Exponentially
        </h1>
      </section>

      {/* Features + Image */}
      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-3">
          {/* Left Features */}
          <div className="space-y-5">
            {features.slice(0, 2).map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-(--primary-light)">
                    <Icon size={23} className="text-(--primary)" />
                  </div>

                  <h2 className="text-lg font-bold text-(--primary)">
                    {feature.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-(--muted)">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-(--primary-light)" />

            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/feature.avif"
                alt="Why choose Prasiddhi Solutions"
                width={600}
                height={700}
                className="h-[500px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-5">
            {features.slice(2, 4).map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-(--primary-light)">
                    <Icon size={23} className="text-(--primary)" />
                  </div>

                  <h2 className="text-lg font-bold text-(--primary)">
                    {feature.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-(--muted)">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
