import { MapPin, ArrowRight, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-50 via-purple-50 to-indigo-100 py-20">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 z-10">
                <div className="grid lg:grid-cols-2 gap-2 items-center">
                    {/* Left column */}
                    <div>
                        <div className="mb-6">
                            <p className="text-sm font-semibold text-purple-500 mb-3 tracking-wide uppercase">Software Engineer</p>
                            <h1 className="font-['Space_Grotesk'] text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="block text-slate-800">Hello, I'm</span>
                                <span className="block bg-linear-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent font-extrabold">Vincy Lim Wei Jun</span>
                            </h1>
                        </div>
                        <div className="mb-8 max-w-xl">
                            <p className="long-paragraph">A fresh graduate from Universiti Tunku Abdul Rahman with a Bachelor of Software Engineering (Honours). Passionate about building scalable web applications and learning new technologies.</p>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm mb-8">
                            <span className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-green-600 rounded-full border border-blue-200">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Available for opportunities
                            </span>
                            <span className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                                <MapPin className="w-4 h-4" />
                                Penang, Malaysia
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#projects" className="group inline-flex items-center justify-center gap-2 px-6 py-3 shadow-md bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                                <span>View My Work</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-6 py-3 shadow-md bg-white text-purple-800 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                                <Mail className="w-4 h-4" />
                                <span>Get In Touch</span>
                            </a>
                        </div>
                    </div>
                    {/* Right column */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Main profile container */}
                            <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl bg-linear-to-br from-blue-100 to-purple-100 p-1 shadow-2xl shadow-purple-500/10">
                                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-linear-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                                        <div className="text-center pt-2 pr-2">
                                            <img src="../profile.png" alt="Profile Photo" className="w-52 h-auto rounded-2xl shadow-sm" />
                                            <p className="text-slate-500 font-medium mt-1">Vincy Lim Wei Jun</p>
                                            <p className="text-slate-400 text-sm mt-1">Software Engineering Graduate</p>
                                        </div>
                                    </div>

                                    {/* Skill badges */}
                                    <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-purple-200 hover:scale-105 transition-transform">
                                        <div className="text-center">
                                            <img src="../teamwork-memoji.png" alt="Teamwork Memoji" className="w-8 h-8 mx-auto mb-1" />
                                            <p className="text-xs text-slate-600 font-medium">Team Player</p>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-4 shadow-lg border border-blue-200 hover:scale-105 transition-transform">
                                        <div className="text-center">
                                            <img src="../computer-memoji.png" alt="Problem Solver Memoji" className="w-8 h-8 mx-auto mb-1" />
                                            <p className="text-xs text-slate-600 font-medium">Problem Solver</p>
                                        </div>
                                    </div>

                                    <div className="absolute top-1/2 -left-12 bg-white rounded-xl p-4 shadow-lg border border-indigo-200 hover:scale-105 transition-transform">
                                        <div className="text-center">
                                            <img src="../creative-memoji.png" alt="Creative Memoji" className="w-8 h-8 mx-auto mb-1" />
                                            <p className="text-xs text-slate-600 font-medium">Creative</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};