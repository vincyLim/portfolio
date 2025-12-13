'use client'

import { ExternalLink, Github, Calendar, Code2, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { 
  SiReact, 
  SiJavascript,
  SiKotlin,
  SiNodedotjs, 
  SiMongodb, 
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiHtml5,
  SiCss3
} from "react-icons/si";

export default function Projects(){
    const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});
    const [isClient, setIsClient] = useState(false);

    const projects = [
        {
            id: 1,
            title: "Event Planning App",
            description: "An Android event planning application that helps users to host and join events seamlessly.",
            images: [
                "/projects/event-planning-app.png",
                "/projects/event-planning-app-2.png",
                "/projects/event-planning-app-3.png",
                "/projects/event-planning-app-4.png",
                "/projects/event-planning-app-5.png",
                "/projects/event-planning-app-6.png",
            ], 
            github: "https://github.com/BernardHwang/Mobile-App-Dev.git",
            category: "Android Application",
            technologies: [
                { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" />, color: "text-blue-400" },
                { name: "JavaScript", icon: <SiJavascript className="w-4 h-4" />, color: "text-yellow-400" },
                { name: "React Native", icon: <SiReact className="w-4 h-4" />, color: "text-cyan-400" },
                { name: "Kotlin", icon: <SiKotlin className="w-4 h-4" />, color: "text-purple-400" },
                { name: "Firebase", icon: <SiFirebase className="w-4 h-4" />, color: "text-orange-400" }
            ],
            featured: true
        },
        {
            id: 2,
            title: "Aniqlo Retail Web App",
            description: "Modern retail UI. Built with HTML, CSS, and JavaScript, featuring real-time inventory tracking and seamless checkout process.",
            images: [
                "/projects/aniqlo.png",
                "/projects/aniqlo-2.png",
                "/projects/aniqlo-3.png",
                "/projects/aniqlo-4.png",
                "/projects/aniqlo-5.png",
                "/projects/aniqlo-6.png",
                "/projects/aniqlo-7.png",
                "/projects/aniqlo-8.png",
                "/projects/aniqlo-9.png",
            ],
            github: "https://github.com/vincyLim/Aniqlo-Web-Application-Development.git",
            category: "E-commerce",
            technologies: [
                { name: "HTML", icon: <SiHtml5 className="w-4 h-4" />, color: "text-orange-400" },
                { name: "CSS", icon: <SiCss3 className="w-4 h-4" />, color: "text-blue-400" },
                { name: "JavaScript", icon: <SiJavascript className="w-4 h-4" />, color: "text-yellow-400" }
            ],
            featured: true
        },
    ];

    const featuredProjects = projects.filter(project => project.featured);

    // Fix hydration by ensuring client-side rendering
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Auto-scroll functionality - only run on client
    useEffect(() => {
        if (!isClient) return;

        const intervals: {[key: number]: NodeJS.Timeout} = {};

        featuredProjects.forEach(project => {
            if (project.images.length > 1) {
                intervals[project.id] = setInterval(() => {
                    setCurrentImageIndex(prev => ({
                        ...prev,
                        [project.id]: ((prev[project.id] || 0) + 1) % project.images.length
                    }));
                }, 3000);
            }
        });

        return () => {
            Object.values(intervals).forEach(interval => clearInterval(interval));
        };
    }, [featuredProjects, isClient]);

    const nextImage = (projectId: number, imagesLength: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) + 1) % imagesLength
        }));
    };

    const prevImage = (projectId: number, imagesLength: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) - 1 + imagesLength) % imagesLength
        }));
    };

    // Safe image error handler
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget;
        const fallback = img.parentElement?.querySelector('.fallback-icon') as HTMLElement;
        
        img.style.display = 'none';
        if (fallback) {
            fallback.style.display = 'flex';
        }
    };

    // Don't render dynamic content on server to prevent hydration mismatch
    if (!isClient) {
        return (
            <section id="projects" className="py-20 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Projects & <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Applications</span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">A showcase of my recent work</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {/* Loading skeleton or static content */}
                        <div className="animate-pulse bg-white/5 rounded-2xl h-96"></div>
                        <div className="animate-pulse bg-white/5 rounded-2xl h-96"></div>
                    </div>
                </div>
            </section>
        );
    }

    return(
        <section id="projects" className="py-20 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Projects & <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Applications</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">A showcase of my recent work</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {featuredProjects.map((project) => (
                        <div key={project.id} className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-500">
                            <div className="aspect-video bg-linear-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                                {/* Image Carousel */}
                                <div className="relative w-full h-full">
                                    <div className="w-full h-full flex items-center justify-center p-6">
                                        <img 
                                            src={project.images[currentImageIndex[project.id] || 0]} 
                                            alt={`${project.title} - Image ${(currentImageIndex[project.id] || 0) + 1}`}
                                            className="max-w-full max-h-full object-contain rounded-lg shadow-lg transition-opacity duration-500"
                                            onError={handleImageError}
                                        />
                                        {/* Fallback icon */}
                                        <div className="fallback-icon hidden w-full h-full items-center justify-center text-white/50">
                                            <Globe className="w-16 h-16" />
                                        </div>
                                    </div>

                                    {/* Navigation Arrows (show only if multiple images) */}
                                    {project.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={() => prevImage(project.id, project.images.length)}
                                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => nextImage(project.id, project.images.length)}
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </>
                                    )}

                                    {/* Image Indicators */}
                                    {project.images.length > 1 && (
                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                            {project.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }))}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                        index === (currentImageIndex[project.id] || 0)
                                                            ? 'bg-blue-400 w-6'
                                                            : 'bg-white/50 hover:bg-white/70'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                                
                                {/* Category badge */}
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="px-3 py-1 bg-blue-500/80 text-white text-xs rounded-full backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Image Counter */}
                                {project.images.length > 1 && (
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                                            {(currentImageIndex[project.id] || 0) + 1} / {project.images.length}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <div key={index} className="flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                                            <span className={tech.color}>{tech.icon}</span>
                                            <span className="text-gray-300">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-blue-400 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                                    >
                                        <Github className="w-4 h-4" />
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-4">Want to see more of my work?</p>
                    <a 
                        href="https://github.com/vincyLim" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                    >
                        <Github className="w-5 h-5" />
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}