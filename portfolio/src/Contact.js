import React, { useEffect, useState } from 'react';

const NUMBER_OF_STARS = 400; // Increased number of stars
const NUMBER_OF_SMALL_STARS = 200; // Additional smaller stars

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        createStars();
    }, []);

    const createStars = () => {
        const container = document.querySelector('.stars-container');
        if (!container) return;
        container.innerHTML = '';

        // Create main stars
        for (let i = 0; i < NUMBER_OF_STARS; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDuration = `${3 + Math.random() * 7}s`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            container.appendChild(star);
        }

        // Create smaller background stars
        for (let i = 0; i < NUMBER_OF_SMALL_STARS; i++) {
            const smallStar = document.createElement('div');
            smallStar.className = 'small-star';
            smallStar.style.left = `${Math.random() * 100}%`;
            smallStar.style.top = `${Math.random() * 100}%`;
            smallStar.style.animationDuration = `${5 + Math.random() * 10}s`;
            container.appendChild(smallStar);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: 'service_3qjj23m',
                    template_id: 'template_1bzsr25',
                    user_id: 'Hh2kAmtBqk5T4klVO',
                    template_params: {
                        to_email: 'vg.068479@gmail.com',
                        from_name: formData.name,
                        from_email: formData.email,
                        message: formData.message,
                    },
                }),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            alert('Failed to send message. Please try again.');
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#070B24]">
            {/* Nebula Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />

            {/* Stars Container */}
            <div className="stars-container absolute inset-0" />

            {/* Galaxy Spiral */}
            <div className="galaxy-spiral absolute inset-0" />

            {/* Contact Form Container */}
            <div className="relative z-10 flex h-full items-center justify-center p-4">
                <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
                    {/* Glow effects */}
                    <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

                    <h2 className="relative mb-8 text-center text-3xl font-bold text-white">Contact Me</h2>

                    <form onSubmit={handleSubmit} className="relative space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full rounded-lg border border-white/10 bg-white/10 p-3 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-purple-500 focus:bg-white/20 focus:outline-none"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full rounded-lg border border-white/10 bg-white/10 p-3 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-purple-500 focus:bg-white/20 focus:outline-none"
                            />
                        </div>

                        <div>
              <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="w-full rounded-lg border border-white/10 bg-white/10 p-3 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-purple-500 focus:bg-white/20 focus:outline-none"
              />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 p-3 text-white transition-all hover:scale-105 hover:from-purple-500 hover:to-blue-500 focus:outline-none active:scale-95"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>{`
        .stars-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .star {
          position: absolute;
          width: 1px;
          height: 1px;
          background: white;
          border-radius: 50%;
          animation: star-rotate 5s linear infinite;
          transform-style: preserve-3d;
          box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
        }

        .small-star {
          position: absolute;
          width: 1px;
          height: 1px;
          background: white;
          border-radius: 50%;
          opacity: 0.5;
          animation: twinkle 5s ease-in-out infinite;
        }

        .galaxy-spiral {
          background: radial-gradient(
            ellipse at center,
            transparent 0%,
            rgba(62, 20, 123, 0.1) 40%,
            rgba(25, 33, 150, 0.1) 60%,
            transparent 100%
          );
          animation: rotate 100s linear infinite;
          transform-origin: center center;
        }

        @keyframes star-rotate {
          0% {
            transform: translateZ(-100px) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateZ(500px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};