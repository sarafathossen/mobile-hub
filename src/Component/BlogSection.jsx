import React from "react";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Tips for Better Web Development",
      date: "Dec 1, 2025",
      description:
        "Learn the essential tips that will make you a better and more confident web developer.",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQFm42d8f1GCjA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681121582915?e=2147483647&v=beta&t=88YhjnBASBZulosxtKdXNt_cCMJ_wQKFCAydBxQIGj4",
    },
    {
      id: 2,
      title: "How to Improve UI/UX in 2025",
      date: "Nov 27, 2025",
      description:
        "A complete guide on modern UI/UX design trends every developer should know.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONa5AMkI-JPska1Um-EjwEgXEWsB_fjoGkw&s",
    },
    {
      id: 3,
      title: "React Performance Optimization Guide",
      date: "Nov 18, 2025",
      description:
        "Boost your React apps with these simple optimization techniques.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0c-9wrxjnQr5VbVPgCMqg92727uo020-0bQ&s",
    },
  ];

  return (
    <div className="px-4 py-16 md:px-10 lg:px-20 bg-base-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Latest Blogs
          </h2>
          <p className="text-lg opacity-80 text-gray-700 dark:text-gray-300">
            Stay updated with our latest articles, tutorials & insights.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="card bg-base-100 dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden transform hover:-translate-y-2"
            >
              <figure className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
              <div className="card-body flex flex-col">
                <p className="text-sm opacity-60 text-gray-600 dark:text-gray-400">{blog.date}</p>
                <h3 className="card-title text-2xl text-gray-900 dark:text-gray-100">{blog.title}</h3>
                <p className="opacity-80 flex-1 text-gray-700 dark:text-gray-300">{blog.description}</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm hover:scale-105 transition-transform duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
