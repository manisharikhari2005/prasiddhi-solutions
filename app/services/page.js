import {
  Code2,
  Globe,
  Server,
  LayoutDashboard,
  Wrench,
  BriefcaseBusiness,
  TrendingUp,
  Building2,
  Phone,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Website Design & Development",
      description:
        "We design and develop professional, responsive and user-friendly websites that help businesses establish a strong online presence.",
      icon: Globe,
    },
    {
      title: "Web Application Development",
      description:
        "We develop customized web applications according to business requirements, processes and workflows.",
      icon: Code2,
    },
    {
      title: "Web API & Backend Development",
      description:
        "We build secure, scalable and high-performance APIs that connect websites, mobile applications, third-party systems and business applications.",
      icon: Server,
    },
    {
      title: "UI Application Development",
      description:
        "We create modern, responsive and user-friendly interfaces focused on usability, performance and customer experience.",
      icon: LayoutDashboard,
    },
    {
      title: "Application Maintenance & Support",
      description:
        "Software requires continuous maintenance, monitoring and improvements. Prasiddhi Solutions provides reliable application maintenance and technical support to keep business applications running smoothly.",
      icon: Wrench,
    },
    {
      title: "Digital Business Solutions",
      description:
        "We help traditional businesses move toward digital operations through customized technology solutions.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Business Growth & Technology Solutions",
      description:
        "Technology should directly contribute to business growth. At Prasiddhi Solutions, we focus on developing solutions that help organizations.",
      icon: TrendingUp,
    },
  ];

  return (
    <main className="bg-(--background)">
      {/* Header */}
      <section className="px-6 pb-12 pt-20 text-center md:pb-16 md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-(--accent)">
          Our Services
        </p>

        <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight text-(--foreground) md:text-5xl">
          Custom IT Solutions for Your Successful Business
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-(--muted) md:text-base">
          We provide reliable and customized technology solutions designed
          around your business needs, processes and growth.
        </p>
      </section>

      {/* Services */}
      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-(--border) bg-(--surface) p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-(--primary-light) transition-all duration-300 group-hover:bg-(--primary)">
                  <Icon
                    size={24}
                    className="text-(--primary) transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h2 className="mt-5 text-lg font-bold text-(--primary)">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-(--muted)">
                  {service.description}
                </p>

                <div className="mt-5 h-0.5 w-8 bg-(--accent) transition-all duration-300 group-hover:w-14" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-(--border) bg-(--surface-alt) px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-(--accent)">
              Industries We Serve
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-(--foreground) md:text-4xl">
              Technology Solutions Built for Different Industries
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-(--muted) md:text-base">
              Prasiddhi Solutions works with businesses across multiple
              industries and understands that every industry has different
              processes, customers and technology requirements.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-(--primary-light)">
              <Building2 size={70} className="text-(--primary)" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 rounded-3xl bg-(--primary) px-8 py-12 text-center shadow-xl md:flex-row md:px-12 md:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-(--accent)">
              Call Us For Quote
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              Let&apos;s Build Something That Grows Your Business
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
              Our vision is to become a trusted technology partner by delivering
              innovative, reliable, scalable and cost-effective digital
              solutions.
            </p>
          </div>

          <div className="shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-(--accent)">
                <Phone size={19} className="text-white" />
              </div>

              <div>
                <p className="text-xs text-white/70">Call us for a quote</p>

                <p className="mt-1 text-lg font-bold text-white">+9990100424</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
