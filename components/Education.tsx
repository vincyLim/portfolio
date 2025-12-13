import { Calendar, Award } from "lucide-react";

export default function Education(){

    const education = [
        {
            id: 1,
            study: "Malaysia Certificate of Education (SPM)",
            institution: "SMK Bagan Jaya, Butterworth, Penang, Malaysia",
            duration: "2016 - 2020",
            achievement: "Graduated with 5A+'s, 4A's and 1B+",
            logo: '../smkbj-logo.jpg',
            resultUrl: 'https://drive.google.com/file/d/1mSLdrTKDCk-TslcMZoWZZ_QczSufTuSd/view?usp=share_link',
            additionalAchievements: [
                "Led marching team and won Silver Medal in Penang State Level Marching Competition (2019)",
                "Served as President (2020) and Vice-President (2019) of Pandu Puteri",
                "Served as Secretary (2019-2020) of Kelab Bimbingan dan Kerjaya",
                "Served as Pengawas Kesihatan (2018-2020)",
            ]
        },

        {
            id: 2,
            study: "Foundation in Science (Q Stream)",
            institution: "Universiti Tunku Abdul Rahman (UTAR), Sungai Long Campus, Malaysia",
            duration: "Oct 2021 - Oct 2022",
            achievement: "Graduated with CGPA 3.9732/4.00",
            logo: '../utar-logo.jpg',
            resultUrl: 'https://drive.google.com/file/d/1iUwxs2o6yNkXyif5Kiga75LREOm6REwz/view?usp=share_link',
            additionalAchievements: [
                "Awarded Honorable Mention in Beaver Computational Thinking Competition 2022",
            ],
        },
        {
            id: 3,
            study: "Bachelor of Software Engineering (Honours)",
            institution: "Universiti Tunku Abdul Rahman (UTAR), Sungai Long Campus, Malaysia",
            duration: "Oct 2022 - Oct 2025",
            achievement: "Graduated with CGPA 3.5810/4.00",
            logo: '../utar-logo.jpg',
            resultUrl: 'https://drive.google.com/file/d/1-q1eyr511wKnUet6rDaknPT81sKs-LWy/view?usp=share_link',
            additionalAchievements: [
                "Participated in an Outbound Study Tour to Jissen Women’s University in Japan.",
                "Served as a committee member in UTAR Insight X NECC Program, a career development program."
            ],
        }
    ];

    const sortedEducation = education.sort((a, b) => b.id - a.id);

    return (
        <section id="education" className="py-20 bg-linear-to-b from-white via-blue-50 to-indigo-100 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                        Education & 
                        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Achievements</span>
                    </h2>
                    <div className="w-50 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto"></div>
                </div>

                <div className="space-y-6">
                    {sortedEducation.map((edu) => (
                        <a 
                            key={edu.id} 
                            href={edu.resultUrl}
                            target="_blank"
                            className="group block relative cursor-pointer"
                            rel="noopener noreferrer"
                            title="Click to view my Academic Transcript"
                        >
                        <div key={edu.id} className="group relative">
                            <div className="bg-white/80 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/50">
                                <div className="flex gap-6">
                                    {/* Logo Section */}
                                    <div className="shrink-0 relative">
                                        <div className={`w-16 h-16 bg-linear-to-br rounded-xl flex items-center justify-center shadow-lg`}>
                                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                                <img 
                                                    src={edu.logo} 
                                                    alt={`${edu.institution} logo`}
                                                    className="w-10 h-10 object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content Section */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                                                    {edu.study}
                                                </h3>
                                                <p className="text-slate-600 font-medium mb-2 leading-relaxed">
                                                    {edu.institution}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-500 lg:ml-4">
                                                <Calendar className="w-4 h-4" />
                                                <span className="font-medium">{edu.duration}</span>
                                            </div>
                                        </div>
                                        
                                        {edu.achievement && (
                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 rounded-xl text-sm font-semibold mb-3">
                                                <Award className="w-4 h-4" />
                                                {edu.achievement}
                                            </div>
                                        )}

                                                                                {edu.additionalAchievements && edu.additionalAchievements.length > 0 && (
                                            <div className="mt-2">
                                                {edu.additionalAchievements.map((achievement, index) => (
                                                    <p key={index} className="text-sm text-slate-600 mb-1">
                                                        • {achievement}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </a>
                    ))}
                </div>
            </div>
            
        </section>
    );
}