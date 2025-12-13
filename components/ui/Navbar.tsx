'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { href: "#hero", label: "Home", icon: <i className="bi bi-house-fill nav-icon"></i> },
    { href: "#about", label: "About", icon: <i className="bi bi-person-fill nav-icon"></i> },
    { href: "#education", label: "Education", icon: <i className="bi bi-mortarboard-fill nav-icon"></i> },
    { href: "#skills", label: "Skills", icon: <i className="bi bi-code nav-icon"></i> },
    { href: "#projects", label: "Projects", icon: <i className="bi bi-folder-fill nav-icon"></i> },
    { href: "#contact", label: "Contact", icon: <i className="bi bi-envelope-fill nav-icon"></i> },
];

interface NavbarProps {
    active: string;
}

export default function Navbar({ active }: NavbarProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);

            // Track current section based on scroll position
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Desktop Navigation - Bottom Center */}
            <nav className={`hidden md:block fixed left-1/2 transform -translate-x-1/2 bottom-8 z-50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
            }`}>
                <div className="bg-white/90 backdrop-blur-lg border border-purple-200 rounded-2xl shadow-xl px-6 py-4">
                    <div className="flex items-center gap-2">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={`group relative px-4 py-2 rounded-xl transition-all duration-300 hover:scale-110 transform ${
                                    activeSection === item.href.substring(1) 
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                        : 'text-slate-700 hover:bg-gray-100'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">{item.icon}</span>
                                    <span className="text-sm font-medium">
                                        {item.label}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation - Left Side */}
            <div className="md:hidden">
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`fixed left-4 top-6 z-50 p-3 bg-white/90 backdrop-blur-lg border border-purple-200 rounded-xl shadow-lg transition-all duration-300 ${
                        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-5 h-5 text-slate-700" />
                    ) : (
                        <Menu className="w-5 h-5 text-slate-700" />
                    )}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`} onClick={() => setIsMobileMenuOpen(false)} />

                {/* Mobile Menu Sidebar */}
                <nav className={`fixed left-0 top-0 h-full w-64 bg-white/95 backdrop-blur-lg border-r border-purple-200 shadow-2xl z-40 transition-transform duration-300 ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                    <div className="p-6 pt-20">
                        <h2 className="text-lg font-bold text-slate-800 mb-6">Navigation</h2>
                        <div className="space-y-3">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                                        activeSection === item.href.substring(1)
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                            : 'text-slate-700 hover:bg-gray-100'
                                    }`}
                                >
                                    <span className="text-base">{item.icon}</span>
                                    <span className="text-base font-medium">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}