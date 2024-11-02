import React, { useState, useEffect } from 'react';
import { Github, Award, Code2 } from 'lucide-react';

const CodingProfilesDashboard = () => {
    const [githubData, setGithubData] = useState(null);
    const [leetcodeData, setLeetcodeData] = useState(null);
    const [hackerrankData, setHackerrankData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const githubResponse = await fetch('https://api.github.com/users/Varsha010101');
                const githubRepos = await fetch('https://api.github.com/users/Varsha010101/repos');
                const githubUserData = await githubResponse.json();
                const githubReposData = await githubRepos.json();

                setGithubData({
                    ...githubUserData,
                    topRepos: githubReposData
                        .sort((a, b) => b.stargazers_count - a.stargazers_count)
                        .slice(0, 2),  // Only get top 2 repos
                    contributions: githubUserData.public_repos + githubUserData.followers + githubUserData.following // Example contribution calculation
                });

                setLeetcodeData({
                    rank: 1240043,
                    totalSolved: 77,
                    acceptanceRate: "74.8%",
                    easySolved: 36,
                    mediumSolved: 36,
                    hardSolved: 5
                });

                setHackerrankData({
                    certifications: [
                        { name: "Java (Basic)", link: "https://www.hackerrank.com/certificates/c7a89790fa96" },
                    ],
                });

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <div className="text-lg text-white">Loading...</div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4 space-y-6 bg-black text-white">
            <style>
                {`
                .card {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
                    padding: 20px;
                    color: #fff;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: transform 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                }
                .card-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                }
                .card-header h2 {
                    margin-left: 10px;
                    font-size: 1.5rem;
                }
                .card-body {
                    display: flex;
                    flex-direction: column;
                }
                .stat {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(8px);
                    border-radius: 8px;
                    padding: 15px;
                    margin-bottom: 10px;
                    text-align: center;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                .stat h3 {
                    margin-bottom: 5px;
                    font-weight: 600;
                }
                .stat-value {
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                .repo-card {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(8px);
                    border-radius: 8px;
                    padding: 15px;
                    margin-top: 10px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                .repo-card h4 {
                    font-size: 1.2rem;
                    margin-bottom: 5px;
                }
                .repo-card p {
                    color: #bbb;
                    margin-bottom: 5px;
                }
                .repo-stats {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.9rem;
                }
                .button {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    padding: 10px 15px;
                    border-radius: 5px;
                    text-align: center;
                    text-decoration: none;
                    transition: background 0.3s ease;
                    margin-top: 10px;
                    display: inline-block;
                }
                .button:hover {
                    background: rgba(255, 255, 255, 0.4);
                }
                .flex-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .gap-100 {
                    margin-top: 100px;
                }
                .github-card {
                    width: 500px;
                    margin: auto;
                    margin-top: 100px; /* Added margin top */
                }
                .no-underline {
                    text-decoration: none; /* No underline for Java Basic link */
                }
                @media (min-width: 768px) {
                    .flex-container {
                        flex-direction: row;
                    }
                    .card {
                        flex: 1;
                    }
                    .github-card {
                        width: 500px; // Keep the width on larger screens
                    }
                }
                `}
            </style>

            <h1 className="text-3xl font-bold mb-8">Coding Profiles</h1>

            <div className="flex-container">
                {/* LeetCode Section */}
                <div className="card">
                    <div className="card-header">
                        <Code2 className="h-6 w-6 text-white" />
                        <h2>LeetCode Stats</h2>
                    </div>
                    <div className="card-body">
                        <div className="stat">
                            <h3>Rank</h3>
                            <div className="stat-value">{leetcodeData.rank}</div>
                        </div>
                        <div className="stat">
                            <h3>Problems Solved</h3>
                            <div className="stat-value">{leetcodeData.totalSolved}</div>
                        </div>
                        <div className="stat">
                            <h3>Acceptance Rate</h3>
                            <div className="stat-value">{leetcodeData.acceptanceRate}</div>
                        </div>
                        <a href="https://leetcode.com/u/varshagupta010101/" className="button">View Profile</a>
                    </div>
                </div>

                {/* HackerRank Section */}
                <div className="card">
                    <div className="card-header">
                        <Award className="h-6 w-6 text-white" />
                        <h2>HackerRank Achievements</h2>
                    </div>
                    <div className="card-body">
                        <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            {hackerrankData.certifications.map((cert, index) => (
                                <li key={index} className="text-gray-300">
                                    <a href={cert.link} className="text-white no-underline hover:underline">{cert.name}</a> {/* No underline */}
                                </li>
                            ))}
                        </ul>
                        <a href="https://www.hackerrank.com/profile/varshagupta01011" className="button">View Profile</a>
                    </div>
                </div>
            </div>

            {/* GitHub Section with spacing and contributions */}
            <div className="card gap-100 github-card">
                <div className="card-header">
                    <Github className="h-6 w-6 text-white" />
                    <h2>GitHub Overview</h2>
                </div>
                <div className="card-body text-center">
                    <div className="stat">
                        <h3>Repositories</h3>
                        <div className="stat-value">{githubData.contributions}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {githubData.topRepos.map((repo) => (
                            <div key={repo.id} className="repo-card">
                                <h4>{repo.name}</h4>
                                <p>{repo.description || 'No description'}</p>
                                <div className="repo-stats">
                                    <span>⭐ {repo.stargazers_count}</span>
                                    <span>🔀 {repo.forks_count}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="https://github.com/Varsha010101" className="button mt-4">View Profile</a>
                </div>
            </div>
        </div>
    );
};

// Named export instead of default export
export { CodingProfilesDashboard };
