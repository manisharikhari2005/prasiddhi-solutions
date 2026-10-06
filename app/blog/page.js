import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "Web Application Upgrade",
      description:
        "Our experience across Real Estate, Travel, Finance and Customer Relationship solutions.",
      image: "/about-us.jpg",
      date: "01 Jan, 2045",
    },
    {
      title: "Custom Software Development",
      description:
        "From initial idea to development, deployment, maintenance and enhancement.",
      image: "/feature.avif",
      date: "01 Jan, 2045",
    },
    {
      title: "How to Build a Website",
      description:
        "From initial idea to development, deployment, maintenance and enhancement.",
      image: "/about-us.jpg",
      date: "01 Jan, 2045",
    },
    {
      title: "Modern Website Development",
      description:
        "Learn how modern technologies can help businesses build powerful digital experiences.",
      image: "/feature.avif",
      date: "01 Jan, 2045",
    },
    {
      title: "Reliable Business Software",
      description:
        "We use modern technologies and development practices to build reliable digital solutions.",
      image: "/about-us.jpg",
      date: "01 Jan, 2045",
    },
    {
      title: "Technology & Business Growth",
      description:
        "Discover how the right technology solutions can improve business performance and growth.",
      image: "/feature.avif",
      date: "01 Jan, 2045",
    },
  ];

  const categories = [
    "Web Design",
    "Web Development",
    "Keyword Research",
    "Email Marketing",
  ];

  const recentPosts = [
    {
      title: "Custom Software Development",
      image: "/about-us.jpg",
    },
    {
      title: "Web Application Upgrade",
      image: "/feature.avif ",
    },
    {
      title: "How to Build a Website",
      image: "/about-us.jpg",
    },
  ];

  const tags = [
    "Web Design",
    "Development",
    "Technology",
    "Business",
    "Software",
    "Digital Solutions",
  ];

  return (
    <main className="bg-background">
      {/* Page Header */}
      <section className="px-6 pb-12 pt-20 text-center md:pb-16 md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-(--accent)">
          Our Blog
        </p>

        <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-bold text-(--foreground) md:text-5xl">
          Blog Grid
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-(--muted) md:text-base">
          Explore our latest insights, technology trends and ideas to help your
          business grow in the digital world.
        </p>
      </section>

      {/* Blog Content */}
      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-4">
          {/* Blog Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:col-span-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-2xl border border-(--border) bg-(--surface) shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-(--accent) px-3 py-1 text-xs font-semibold text-white">
                    Web Design
                  </div> 
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-medium text-(--muted)">
                    John Doe · {post.date}
                  </p>

                  <h2 className="mt-3 text-xl font-bold text-(--primary)">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-(--muted)">
                    {post.description}
                  </p>

                  <Link
                    href="#"
                    className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-(--primary)"
                  >
                    Read More
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </article> 
            ))}

            {/* Pagination */}
            <div className="mt-4 flex items-center justify-center gap-2 md:col-span-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-(--muted) transition-colors hover:bg-(--primary) hover:text-white">
                <ChevronLeft size={17} />
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--primary) text-sm font-semibold text-white">
                1
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-sm text-(--muted) transition-colors hover:bg-(--primary) hover:text-white">
                2
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-sm text-(--muted) transition-colors hover:bg-(--primary) hover:text-white">
                3
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-(--muted) transition-colors hover:bg-(--primary) hover:text-white">
                <ChevronRight size={17} />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-7">
            {/* Categories */}
            <div className="rounded-2xl border border-(--border) bg-(--surface) p-6">
              <h2 className="text-lg font-bold text-(--primary)">Categories</h2>

              <div className="mt-5 flex flex-col gap-3">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href="#"
                    className="flex items-center justify-between border-b border-(--border) pb-3 text-sm text-(--muted) transition-colors last:border-0 last:pb-0 hover:text-(--primary)"
                  >
                    {category}

                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="rounded-2xl border border-(--border) bg-(--surface) p-6">
              <h2 className="text-lg font-bold text-(--primary)">
                Recent Posts
              </h2>

              <div className="mt-5 space-y-4">
                {recentPosts.map((post) => (
                  <Link key={post.title} href="#" className="group flex gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold leading-5 text-(--foreground) transition-colors group-hover:text-(--primary)">
                        {post.title}
                      </h3>

                      <p className="mt-1 text-xs text-(--muted)">
                        01 Jan, 2045
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tag Cloud */}
            <div className="rounded-2xl border border-(--border) bg-(--surface) p-6">
              <h2 className="text-lg font-bold text-(--primary)">Tag Cloud</h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href="#"
                    className="rounded-lg border border-(--border) bg-(--surface-alt) px-3 py-1.5 text-xs font-medium text-(--muted) transition-all duration-300 hover:border-(--primary) hover:bg-(--primary) hover:text-white"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
