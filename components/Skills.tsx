import { Code2, Database, Globe, Wrench, Cloud } from "lucide-react";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiMysql,
    SiSupabase,
    SiGit,
    SiDocker,
    SiVercel,
    SiPostman,
    SiFigma,
    SiPython,
    SiKotlin,
    SiCplusplus,
    SiHtml5,
    SiLaravel,
    SiPhp,
    SiCss3,
    SiBootstrap,
    SiNodedotjs,
    SiWordpress,
    SiAndroidstudio,
    SiGithub,
    SiJenkins,
    SiCpanel,
    SiFirebase,
    SiCloudflare
} from "react-icons/si";

import { DiVisualstudio, DiJava, DiAws } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Globe className="w-4 h-4" />,
            skills: [
                { name: "HTML", icon: <SiHtml5 className="w-7 h-7 text-orange-400" /> },
                { name: "CSS", icon: <SiCss3 className="w-7 h-7 text-blue-400" /> },
                { name: "JavaScript", icon: <SiJavascript className="w-7 h-7 text-yellow-400" /> },
                { name: "TypeScript", icon: <SiTypescript className="w-7 h-7 text-blue-400" /> },
                { name: "React", icon: <SiReact className="w-7 h-7 text-cyan-400" /> },
                { name: "Next.js", icon: <SiNextdotjs className="w-7 h-7 text-gray-200" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="w-7 h-7 text-purple-400" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="w-7 h-7 text-cyan-400" /> }
            ]
        },
        {
            title: "Backend Development",
            icon: <Database className="w-4 h-4" />,
            skills: [
                { name: "Node.js", icon: <SiNodedotjs className="w-7 h-7 text-green-400" /> },
                { name: "PHP", icon: <SiPhp className="w-7 h-7 text-indigo-400" /> },
                { name: "Laravel", icon: <SiLaravel className="w-7 h-7 text-red-400" /> },
                { name: "MySQL", icon: <SiMysql className="w-7 h-7 text-blue-400" /> },
                { name: "Supabase", icon: <SiSupabase className="w-7 h-7 text-green-400" /> },
                { name: "Firebase", icon: <SiFirebase className="w-7 h-7 text-orange-400" /> }
            ]
        },
        {
            title: "Programming Languages",
            icon: <Code2 className="w-4 h-4" />,
            skills: [
                { name: "Python", icon: <SiPython className="w-7 h-7 text-blue-400" /> },
                { name: "Java", icon: <DiJava className="w-7 h-7 text-red-400" /> },
                { name: "C++", icon: <SiCplusplus className="w-7 h-7 text-blue-400" /> },
                { name: "Kotlin", icon: <SiKotlin className="w-7 h-7 text-purple-500" /> }
            ]
        },
        {
            title: "Cloud & DevOps",
            icon: <Cloud className="w-4 h-4" />,
            skills: [
                { name: "Amazon AWS", icon: <DiAws className="w-7 h-7 text-orange-400" /> },
                { name: "Microsoft Azure", icon: <VscAzure className="w-7 h-7 text-blue-400" /> },
                { name: "Jenkins", icon: <SiJenkins className="w-7 h-7 text-red-400" /> },
                { name: "Docker", icon: <SiDocker className="w-7 h-7 text-blue-400" /> },
                { name: "Vercel", icon: <SiVercel className="w-7 h-7 text-gray-200" /> },
                { name: "CPanel", icon: <SiCpanel className="w-7 h-7 text-orange-400" /> },
                { name: "Cloudflare", icon: <SiCloudflare className="w-7 h-7 text-orange-400" /> },

            ]
        },
        {
            title: "Tools & Others",
            icon: <Wrench className="w-4 h-4" />,
            skills: [
                { name: "Android Studio", icon: <SiAndroidstudio className="w-7 h-7 text-green-400" /> },
                { name: "Figma", icon: <SiFigma className="w-7 h-7 text-purple-400" /> },
                { name: "Git", icon: <SiGit className="w-7 h-7 text-orange-400" /> },
                { name: "GitHub", icon: <SiGithub className="w-7 h-7 text-gray-200" /> },
                { name: "Postman", icon: <SiPostman className="w-7 h-7 text-orange-400" /> },
                { name: "VS Code", icon: <DiVisualstudio className="w-7 h-7 text-blue-400" /> },
                { name: "WordPress", icon: <SiWordpress className="w-7 h-7 text-blue-400" /> }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Technologies I <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Work With</span>
                    </h2>
                    <div className="h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
                </div>

                <div className="space-y-16">/
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="w-full">

                            <div className="flex flex-col items-center mb-8">
                                <h3 className="text-xl font-medium text-slate-200 tracking-wide flex items-center gap-3">
                                    <span className="p-2 bg-slate-800/50 rounded-lg text-indigo-400">
                                        {category.icon}
                                    </span>
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full mx-auto">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="skill-item-minimal group"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center mb-3 group-hover:scale-120 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="text-[13px] font-medium text-slate-400 group-hover:text-white transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}