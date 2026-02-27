import React from 'react';

const experiences = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Freelance - Self Employed",
        date: "Jun 2025 - Present",
        description: "Developed more than 5 full-stack web applications. Handled both frontend and backend development, including database design, API integration, authentication, and basic deployment. Worked directly with clients to understand requirements and deliver functional, user-friendly web applications."
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "PT. Paramata Baraya Internasional",
        date: "Mar 2025 - Dec 2025",
        description: "Designed and developed a full-stack Equipment Inventory and Maintenance Management System to improve asset monitoring and maintenance efficiency. Built features such as inventory tracking, rental management, maintenance and calibration scheduling, automated notifications, role-based access control, activity logging, and user management. Structured the application with scalable architecture using Next.js, integrated APIs, managed authentication, and optimized database interactions to ensure performance and reliability."
    },
    {
        id: 3,
        role: "Teaching Assistant Programming Java",
        company: "Universitas Pamulang",
        date: "Apr 2024 - Jul 2024",
        description: "Guided over 20 students in understanding core programming concepts. Ensured 95% of students successfully used Java by providing installation and setup guidance."
    }
];

export default function Experience() {
    return (
        <section className="container mx-auto px-6 py-12 lg:py-16">
            <div className="max-w-4xl mx-auto">
                {/* Main Card */}
                <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-[32px] p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 dark:border-white/10">

                    {/* Badge */}
                    <div className="inline-block bg-[#B98EFC] text-white font-bold py-2 px-6 rounded-full mb-10 text-lg">
                        Experience
                    </div>

                    {/* Experience List */}
                    <div className="flex flex-col">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="flex flex-col">
                                {/* Inside Item */}
                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 lg:gap-8">
                                    <div className="flex-1">
                                        <h3 className="text-xl lg:text-2xl font-bold text-brand-navy dark:text-white">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg text-brand-navy/70 dark:text-white/70 mt-1 font-medium">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="lg:text-right mt-1 lg:mt-0 shrink-0">
                                        <span className="text-brand-navy/60 dark:text-white/60 font-medium">
                                            {exp.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                {exp.description && (
                                    <p className="mt-4 text-brand-navy/80 dark:text-white/80 leading-relaxed text-justify">
                                        {exp.description}
                                    </p>
                                )}

                                {/* Divider (except for the last item) */}
                                {index !== experiences.length - 1 && (
                                    <hr className="border-gray-200 dark:border-slate-700/50 my-8" />
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
