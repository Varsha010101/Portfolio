import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_3qjj23m',  // Your service ID
                'template_1bzsr25',  // Your template ID
                {
                    from_name: form.name,
                    to_name: "JavaScript Mastery",
                    from_email: form.email,
                    to_email: "sujata@jsmastery.pro",
                    message: form.message,
                },
                'Hh2kAmtBqk5T4klVO'  // Your user ID
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div
            className="fixed right-5 bottom-5 flex items-center justify-center"
            id="connect"
            style={{ marginTop: '100px' }} // Add top margin here
        >
            <style>
                {`
                @keyframes float {
                  0% { transform: translatey(0); }
                  50% { transform: translatey(-10px); }
                  100% { transform: translatey(0); }
                }

                .card {
                    animation: float 3s ease-in-out infinite;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
                    padding: 20px;
                    color: #fff;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    width: 500px;  
                }
                .button {
                    background: linear-gradient(90deg, #4f46e5, #3b82f6);
                    color: white;
                    padding: 10px 15px;
                    border-radius: 5px;
                    text-align: center;
                    text-decoration: none;
                    transition: background 0.3s ease;
                    margin-top: 10px;
                    display: inline-block;
                    font-weight: bold;
                    width: 100%;  
                }
                .button:hover {
                    background: linear-gradient(90deg, #3b82f6, #4f46e5);
                }
                input, textarea {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    border-radius: 5px;  
                    padding: 10px 15px;
                    color: white;
                    margin-top: 8px;
                    outline: none;
                    width: 100%;  
                }
                textarea {
                    resize: none;
                }
                `}
            </style>

            <div className="card">
                <h3 className="text-xl font-bold text-center mb-4">Contact Me</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
                    <label className="mb-4">
                        <span className="font-medium">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            required
                        />
                    </label>
                    <label className="mb-4">
                        <span className="font-medium">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            required
                        />
                    </label>
                    <label className="mb-4">
                        <span className="font-medium">Your Message</span>
                        <textarea
                            rows={4}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            required
                        />
                    </label>

                    <button type="submit" className="button">
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};
