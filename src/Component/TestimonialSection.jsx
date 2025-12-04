import React from "react";

export default function TestimonialSection() {
    const testimonials = [
        {
            id: 1,
            name: "Abdul Karim",
            role: "Business Owner",
            review:
                "Their service was absolutely amazing! The support team guided me perfectly. I highly recommend them for anyone looking for quality service.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebF7zt3N7kz6ndMJlURNMzHjBq0lWeCpTUw&s",
        },
        {
            id: 2,
            name: "Jannatul Ferdous",
            role: "Web Developer",
            review:
                "Super fast response and very friendly behaviour. My issue was solved within a few minutes. Great experience!",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aEa9V23jx3TW5X7c91BJKEK6SWD1xZ0yNQ&s",
        },
        {
            id: 3,
            name: "Mahmud Hasan",
            role: "Freelancer",
            review:
                "I loved their professionalism. The design quality and support truly exceeded my expectations.",
            image: "https://ibnsinapharma.com/ibnsinapharma.com/images/page/Prof-Dr-Choudhury-Mahmood-Hasan.jpg",
        },
    ];

    return (
        <div className="px-4 py-16 md:px-10 lg:px-20 bg-base-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
                        Real feedback from our satisfied customers & users.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="card bg-base-200 dark:bg-gray-800 shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 rounded-2xl"
                        >
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary"
                                />
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                                    {t.name}
                                </h3>
                                <p className="opacity-70 text-sm mb-4 text-gray-700 dark:text-gray-300">{t.role}</p>
                                <p className="opacity-80 leading-relaxed text-gray-800 dark:text-gray-200">{t.review}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
