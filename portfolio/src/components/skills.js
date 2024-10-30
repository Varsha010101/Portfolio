import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { FaBootstrap, FaReact, FaJava, FaPython, FaFigma, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiTensorflow, SiGooglecloud, SiMysql } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

export const Skills = () => {
    const [activeLink, setActiveLink] = useState('skills');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const skills = [
        { icon: <FaBootstrap color="#563d7c" />, name: 'Bootstrap' },
        { icon: <FaReact color="#61dafb" />, name: 'React' },
        { icon: <SiNextdotjs color="#000000" />, name: 'Next.js' },
        { icon: <SiDjango color="#092e20" />, name: 'Django' },
        { icon: <FaJava color="#007396" />, name: 'Java' },
        { icon: <FaPython color="#306998" />, name: 'Python' },
        { icon: <TbBrandCpp color="#00599C" />, name: 'C/C++' },
        { icon: <SiTensorflow color="#FF6F20" />, name: 'TensorFlow' },
        { icon: <FaFigma color="#F24E1E" />, name: 'Figma' },
        { icon: <SiGooglecloud color="#4285F4" />, name: 'Google Cloud' },
        { icon: <FaGithub color="#181717" />, name: 'GitHub' },
        { icon: <SiMysql color="#4479A1" />, name: 'MySQL' },
    ];

    return (
        <div
            className={`skills-container ${scrolled ? "scrolled" : ""}`}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexDirection: "column",
                marginTop: "-90px", // Removed extra space from the top
                padding: "0 1rem", // Add padding for mobile responsiveness
            }}
        >
            <h2 style={{ marginBottom: "100px", color: "#fff", fontWeight: "bold" }}>My Skills</h2>
            <br/>

            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ y: 0 }}
                        animate={{ y: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div className="skill-box" style={{ padding: "1rem" }}>
                            <div style={{ fontSize: "2.5rem" }}>
                                {skill.icon}
                            </div>
                        </div>
                        <span style={{ marginTop: "0.5rem", fontSize: "0.8rem" }}>

                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
