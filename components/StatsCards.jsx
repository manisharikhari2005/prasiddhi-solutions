const stats = [
  {
    number: "160",
    label: "Happy Clients",
    image: "/images/clients.png",
  },
  {
    number: "215",
    label: "Projects Done",
    image: "/images/projects.png",
  },
  {
    number: "124",
    label: "Awards Won",
    image: "/images/awards.png",
  },
];

export default function StatsCards() {
  return (
    <section className="relative z-10 -mt-16 px-4">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="stats-card group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-(--border) bg-(--surface-alt) p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            {/* Soft background decoration */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-(--primary)/10 transition-transform duration-500 group-hover:scale-150" />

            {/* Image */}
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-(--primary-light) p-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-(--primary)/15">
              <img
                src={stat.image}
                alt={stat.label}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="relative flex flex-col">
              <div className="flex items-baseline">
                <h3 className="text-3xl font-bold tracking-tight text-(--primary)">
                  {stat.number}
                </h3>

                <span className="ml-1 text-lg font-semibold text-(--accent)">
                  +
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-(--muted)">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
