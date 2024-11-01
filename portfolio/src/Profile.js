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
                        .slice(0, 3)
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

                        "Java (Basic)",

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
            <h1 className="text-3xl font-bold mb-8">Coding Profiles</h1>

            {/* LeetCode Section */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                    <Code2 className="h-6 w-6 text-white" />
                    <h2 className="text-xl font-semibold">LeetCode Stats</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-700 rounded-lg">
                        <div className="text-sm text-gray-300">Rank</div>
                        <div className="text-2xl font-bold">{leetcodeData.rank}</div>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                        <div className="text-sm text-gray-300">Problems Solved</div>
                        <div className="text-2xl font-bold">{leetcodeData.totalSolved}</div>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                        <div className="text-sm text-gray-300">Acceptance Rate</div>
                        <div className="text-2xl font-bold">{leetcodeData.acceptanceRate}</div>
                    </div>
                </div>
            </div>

            {/* HackerRank Section */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-6 w-6 text-white" />
                    <h2 className="text-xl font-semibold">HackerRank Achievements</h2>
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            {hackerrankData.certifications.map((cert, index) => (
                                <li key={index} className="text-gray-300">{cert}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* GitHub Section */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                    <Github className="h-6 w-6 text-white" />
                    <h2 className="text-xl font-semibold">GitHub Overview</h2>
                </div>
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <div className="text-sm text-gray-300">Public Repos</div>
                            <div className="text-2xl font-bold">{githubData.public_repos}</div>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <div className="text-sm text-gray-300">Followers</div>
                            <div className="text-2xl font-bold">{githubData.followers}</div>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <div className="text-sm text-gray-300">Following</div>
                            <div className="text-2xl font-bold">{githubData.following}</div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Top Repositories</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {githubData.topRepos.map((repo) => (
                                <div key={repo.id} className="p-4 bg-gray-700 rounded-lg">
                                    <h4 className="font-medium mb-2">{repo.name}</h4>
                                    <p className="text-sm text-gray-300 mb-2">{repo.description || 'No description'}</p>
                                    <div className="flex items-center space-x-4 text-sm">
                                        <span>⭐ {repo.stargazers_count}</span>
                                        <span>🔀 {repo.forks_count}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Named export instead of default export
export { CodingProfilesDashboard };
