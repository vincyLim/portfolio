import { GraduationCap, Laptop, Target, Infinity } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-white to-purple-50 relative overflow-hidden py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Me</h2>
                    <div className="w-30 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left column */}
                    <div className="bg-linear-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 shadow-lg">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                                    <GraduationCap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-1">Education Background</h3>
                                    <p className="text-slate-600">Bachelor of Software Engineering (Honours)</p>
                                    <p className="text-sm text-slate-500 mt-1">Universiti Tunku Abdul Rahman (UTAR)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0">
                                    <Laptop className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-1">Core Expertise</h3>
                                    <p className="text-slate-600">Full-Stack Web Development</p>
                                    <p className="text-sm text-slate-500 mt-1">Familiar with React, Next.js, Laravel Framework, Tailwind CSS, WordPress, Java OOP, Android, database and cloud computing (AWS, Microsoft Azure)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shrink-0">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-1">Current Focus</h3>
                                    <p className="text-slate-600">Strengthening Industry-Level Development Skills</p>
                                    <p className="text-sm text-slate-500 mt-1">Clean code, system architecture & cloud technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right column */}
                    <div className="space-y-8 animate-slide-in-right">
                        <div className="prose prose-lg max-w-none animate-fade-in-up stagger-1">
                            <p className="long-paragraph">
                                I recently graduated from <strong>Universiti Tunku Abdul Rahman</strong>, Sungai Long Campus in Malaysia with a <strong>Bachelor of Software Engineering</strong>.
                                While I understand that university projects differ from industry standards, I'm committed to <strong>bridging that gap</strong>.
                            </p>
                            <p className="long-paragraph">
                                I don't claim to know everything yet, but I take ownership of my work and I'm <strong>willing to learn</strong> whatever is necessary.
                                With a solid foundation in programming and a strong sense of responsibility, I'm looking for a company that <strong>values growth, patience and hard work</strong>.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-6 bg-linear-to-br from-blue-50 via-white to-indigo-100 rounded-2xl border border-blue-100">
                                <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
                                <div className="text-sm text-slate-600 font-medium">Graduate Year</div>
                            </div>
                            <div className="text-center p-6 bg-linear-to-br from-indigo-50 via-white to-purple-100 rounded-2xl border border-indigo-100">
                                <Infinity className="mx-auto mb-2 w-10 h-10 text-indigo-600" />
                                <div className="text-sm text-slate-600 font-medium">Learning</div>
                            </div>
                            <div className="text-center p-6 bg-linear-to-br from-emerald-50 via-white to-teal-100 rounded-2xl border border-emerald-100">
                                <div className="text-3xl font-bold text-emerald-600 mb-2">Flexible</div>
                                <div className="text-sm text-slate-600 font-medium">Solo & Team</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}