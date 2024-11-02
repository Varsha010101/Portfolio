import React, { useState } from 'react';
import { ExternalLink, ChevronRight, Award } from 'lucide-react';

const CertificateSection = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const certificates = [
        {
            id: 1,
            name: "Mastering Data Structures and Algorithms using C and C++",
            issuer: "Udemy",
            date: "2024",
            url: "UC-0882caf5-2c49-4236-826f-78bf269ec4c3",
        },
        {
            id: 2,
            name: "C Programming for Beginners",
            issuer: "Udemy",
            date: "2024",
            url: "UC-44b57ef8-cd7a-4cad-a572-7630fa2f4833",
        }
    ];

    return (
        <div id="certificates" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12 animate-fade-in">
                    <Award className="text-blue-500 w-10 h-10" />
                    <h2 className="text-4xl font-bold text-white">My Certificates</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            id={`cert-${cert.id}`} // ID for scrolling
                            className="group relative p-6 bg-gray-900 rounded-lg border border-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                            onMouseEnter={() => setHoveredId(cert.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className={`relative p-6 bg-opacity-50 backdrop-blur-md rounded-lg border border-gray-800 
                                          transform transition-all duration-500 ease-out
                                          ${hoveredId === cert.id ? 'scale-105 shadow-lg' : 'scale-100'}`}>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {cert.name}
                                    </h3>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <span className="text-blue-500">●</span>
                                            {cert.issuer}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <span className="text-blue-500">●</span>
                                            {cert.date}
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <a
                                            href={`http://ude.my/${cert.url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg
                                                     transform transition-all duration-300
                                                     hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25
                                                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                        >
                                            <span>View</span>
                                            <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

// Named export instead of default export
export { CertificateSection };
