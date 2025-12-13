import { Mail, Github, Linkedin, Download, MapPin, Phone } from "lucide-react";

export default function Contact(){
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-black via-purple-500 to-indigo-400 bg-clip-text text-transparent mb-4">Get In Touch</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities, collaborating on projects, or just having a chat about technology.
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">

                        {/* Right side - Action Buttons */}
                        <div className="space-y-4">
                            {/* Email Button */}
                            <a
                                href="mailto:vincylim@example.com"
                                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02]"
                            >
                                <Mail className="w-5 h-5" />
                                <span>vincy.mac@icloud.com</span>
                            </a>

                            {/* Social Links Row */}
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.02]"
                                >
                                    <Github className="w-5 h-5" />
                                    <span>GitHub</span>
                                </a>
                                
                                <a
                                    href="https://linkedin.com/in/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02]"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>

                            {/* Resume Download */}
                            <a
                                href="/resume/vincy-lim-resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-[1.02]"
                            >
                                <Download className="w-5 h-5" />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>

                {/* Footer Message */}
                <div className="text-center mt-12">
                    <p className="text-slate-500">
                        Let's build something amazing together! 🚀
                    </p>
                </div>
            </div>
        </section>
    );
}