import React, { useState } from "react";

const data = [
    {
        label: "Jobs",
        contents: [
            {
                title: "Resume 1:1 Session",
                image: "/images/courses/learn.jpg",
                points: ["Excel-based Resume Templates", "Resume Writing Tips", "1:1 Review / Reviews"],
            },
            {
                title: "Interview 1:1 Training",
                image: "/images/courses/learn.jpg",
                points: ["Interview Tips", "Mock Interviews", "Live Interview Preparation"],
            },
            {
                title: "LinkedIn Profile Setup",
                image: "/images/courses/learn.jpg",
                points: ["LinkedIn Sections Overview", "Profile Setup & Posts Writing", "LinkedIn Networking"],
            },
            {
                title: "Aptitude Training",
                image: "/images/courses/learn.jpg",
                points: ["Tips & Tricks", "Practice Problems", "Covers multiple topics"],
            },
            {
                title: "Soft-Skill Training",
                image: "/images/courses/learn.jpg",
                points: ["Presentation Skills", "Body Language Tips", "General Conversation Tips"],
            },
            {
                title: "Job/Internship Portals",
                image: "/images/courses/learn.jpg",
                points: ["Apply for Internship/Jobs", "Regular updates to you", "Tips & tricks on selection"],
            },
        ],
    },
    {
        label: "Higher Studies",
        contents: [
            {
                title: "Letter of Recommendation (LoR)",
                image: "/images/courses/learn.jpg",
                points: ["We help you frame an LoR that not only impresses the university of your dreams but also validates your overall candidature."],
            },
            {
                title: "Statement of Purpose (SoP) Guidance",
                image: "/images/courses/learn.jpg",
                points: ["With our help, your SoP will not only showcase your skills and growth journey but also set forth the vision of a bright future."],
            },
            {
                title: "Guidance in College Selection",
                image: "/images/courses/learn.jpg",
                points: ["While selecting the perfect college, there are a lot of things to consider. Make the right choice with our assistance."],
            },
            {
                title: "Profile Building",
                image: "/images/courses/learn.jpg",
                points: ["At Capabl, we make you industry ready with multiple research papers that empower you to build a strong portfolio."],
            },
            {
                title: "Assistance During Higher Studies",
                image: "/images/courses/learn.jpg",
                points: ["Be it projects, support in technical, or even career advice, we are there for you during your Higher Studies as well."],
            },
        ],
    },
    {
        label: "Startups",
        contents: [
            {
                title: "Idea Validation",
                image: "/images/courses/learn.jpg",
                points: ["Explore the pros and cons of your business idea, and never leave a loophole in the success of your startup."],
            },
            {
                title: "Technical Mentorship",
                image: "/images/courses/learn.jpg",
                points: ["Worried about the technicality of starting a new venture? Not anymore with our up-to-date industry mentorship."],
            },
            {
                title: "Team Building",
                image: "/images/courses/learn.jpg",
                points: ["We brace you as an entrepreneur with secret sauces to build a strong, ideal team for your start-up."],
            },
            {
                title: "Fundraising Assistance",
                image: "/images/courses/learn.jpg",
                points: [
                    "We review and give tips and tricks on fundraising along with a review of your projections, presentations, and pitches for fundraising",
                ],
            },
            {
                title: "Legal Knowledge",
                image: "/images/courses/learn.jpg",
                points: ["We not only help you identify the merits and demerits of a start-up but also provide vast information on the legality of it."],
            },
            {
                title: "Community Collaboration",
                image: "/images/courses/learn.jpg",
                points: ["Network, talk to the right folks and get help, ideas, and support from the community so that you build and thrive."],
            },
        ],
    },
];

export default function AceYourDreamSlider() {
    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <div>
            <div className="px-6 relative z-0">
                <div className="flex items-center justify-start gap-0 overflow-x-scroll scrollbar-hide">
                    {data?.map(({ label }, index) => (
                        <button
                            disabled={activeCategory === index}
                            onClick={() => setActiveCategory(index)}
                            key={index}
                            className="flex-shrink-0 bg-white text-capabl_primary disabled:text-black disabled:bg-[#f2f4f7] rounded-t-lg px-4 md:px-5 py-2.5 text-xs sm:text-sm font-medium"
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="pt-6 md:pt-8 pb-4 md:pb-10 bg-[#f2f6f7] rounded-xl md:rounded-2xl -mt-1 relative z-[1] overflow-hidden">
                {/* diffuser */}
                <div className="absolute z-[2] top-0 left-0 w-6 h-full bg-gradient-to-r from-[#f2f4f7] to-transparent rounded-full" />
                <div className="absolute z-[2] top-0 right-0 w-6 h-full bg-gradient-to-l from-[#f2f4f7] to-transparent rounded-full" />
                <div className="flex items-start justify-start gap-4 md:gap-6 overflow-x-scroll scrollbar-hide px-6 md:px-7 lg:px-10 py-4 relative z-[1]">
                    {data?.[activeCategory]?.contents?.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 min-h-[18rem] bg-white w-[13rem] mx-auto relative flex items-center justify-start flex-col p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-capabl_primary hover:shadow-lg hover:shadow-[#e5e5e5]"
                        >
                            <img className="w-28 object-contain" src={item?.image} alt={item?.title} />

                            <p className="mt-3 mb-3 font-medium text-sm text-center">{item?.title}</p>
                            <div className="text-[0.7rem] sm:text-xs text-center flex flex-col items-center justify-start gap-1">
                                {item?.points?.map((point, key) => (
                                    <p key={`${index}_${key}`}>{point}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* illustration */}
                <svg
                    className="fill-[#f3ffff] absolute z-[0] bottom-0 right-0 w-3/4 max-w-2xl object-contain"
                    viewBox="0 0 953 80"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M929.5 10C932.261 10 934.5 7.76147 934.5 5C934.5 2.23853 932.261 0 929.5 0C927.957 0 925.818 1.59717 925.659 1.79858C925.5 2 832.5 80 832.5 80H837L924.669 6.29395C925.239 8.42822 927.186 10 929.5 10Z"
                        fill="inherit"
                    />
                    <path d="M952.5 22.5999H929.989L861.5 80H865.5L931.011 25.3999H952.5V22.5999Z" fill="inherit" />
                    <path d="M631.512 24.5999H494.988L429.5 80H433.5L496.012 27.3999H630.488L693 80H697.5L631.512 24.5999Z" fill="inherit" />
                    <path d="M952.5 41.5999L942.5 41.5L896.5 80H901L943.51 44.3999H952.5V41.5999Z" fill="inherit" />
                    <path d="M625.012 43.0999H501.483L458 80H462L502.517 45.8999H623.987L664.5 80H668.5L625.012 43.0999Z" fill="inherit" />
                    <path d="M220.513 53.5999H31.4927L0 80H4.26172L32.5068 56.3999H219.486L247.5 80H252L220.513 53.5999Z" fill="inherit" />
                    <path d="M613.011 62.5999H513.989L493 80H497.5L515.011 65.3999H611.989L629.5 80H634L613.011 62.5999Z" fill="inherit" />
                    <path d="M214.049 72.0999H37.9775L28.5 80H33L39.022 74.8999H212.95L219 80H223L214.049 72.0999Z" fill="inherit" />
                </svg>
            </div>
        </div>
    );
}
