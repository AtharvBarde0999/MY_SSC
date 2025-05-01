// client/src/pages/Playlists.js
import React from "react";
import "./Playlists.css";
import { useNavigate } from 'react-router-dom';
import { FaYoutube, FaBook, FaChartLine, FaRegClock, FaRegThumbsUp } from "react-icons/fa";

const playlists = [
    {
        id: 1,
        subject: "Quantitative Aptitude",
        link: "https://www.youtube.com/watch?v=8ywE0PMgwOM&list=PLQYgCxDYkIsx0vmogQCmXf57orVpwKNPL",
        thumbnail: "https://img.youtube.com/vi/8ywE0PMgwOM/hqdefault.jpg",
        videos: 85,
        hours: 42,
        lastUpdated: "2 weeks ago",
        description: "Complete coverage of arithmetic, algebra, geometry and advanced math concepts",
        difficulty: "Beginner to Advanced"
    },
    {
        id: 2,
        subject: "English Language",
        link: "https://www.youtube.com/watch?v=s5clAgn-nFI&list=PLQYgCxDYkIswm5fsSVzjUgkCU45dxwBfA",
        thumbnail: "https://i.ytimg.com/vi/s5clAgn-nFI/hqdefault.jpg",
        videos: 62,
        hours: 35,
        lastUpdated: "1 week ago",
        description: "Grammar rules, vocabulary building, comprehension techniques and practice exercises",
        difficulty: "Intermediate"
    },
    {
        id: 3,
        subject: "General Intelligence & Reasoning",
        link: "https://www.youtube.com/watch?v=hmllzpWJG4g&list=PLesyu_gd_4TFZ4BKsa0ibCkT4V3mOv2sk",
        thumbnail: "https://i.ytimg.com/vi/hmllzpWJG4g/hqdefault.jpg",
        videos: 78,
        hours: 38,
        lastUpdated: "3 days ago",
        description: "Logical reasoning, analytical ability, and problem-solving strategies",
        difficulty: "Beginner to Advanced"
    },
    {
        id: 4,
        subject: "General Awareness",
        link: "https://www.youtube.com/watch?v=Id95C66Grrk&list=PLQYgCxDYkIsyY5UrSHsajj8O9mKT3ce0q",
        thumbnail: "https://i.ytimg.com/vi/Id95C66Grrk/hqdefault.jpg",
        videos: 120,
        hours: 60,
        lastUpdated: "Yesterday",
        description: "Current affairs, static GK, and important government schemes",
        difficulty: "All Levels"
    },

    {
        id: 5,
        subject: "Complete Static GK in One Video",
        link: "https://www.youtube.com/watch?v=CqYa4p8PC9c",
        thumbnail: "https://i.ytimg.com/vi/CqYa4p8PC9c/maxresdefault.jpg",
        videos: 1,
        hours: 6.5,
        lastUpdated: "3 days ago",
        description: "Comprehensive coverage of all static GK topics including history, geography, polity, and science",
        difficulty: "All Levels",
        isOneShot: true
    },
    {
        id: 6,
        subject: "1000 Most Important GK Questions",
        link: "https://www.youtube.com/watch?v=z-Tx33UCfpA&list=PLFMk54K6XOmq49YhkfJx5halvSQTquEI4",
        thumbnail: "https://i.ytimg.com/vi/z-Tx33UCfpA/maxresdefault.jpg",
        videos: 1,
        hours: 8,
        lastUpdated: "1 week ago",
        description: "High-yield GK questions that frequently appear in SSC CGL exams",
        difficulty: "All Levels",
        isOneShot: true
    },
    {
        id: 7,
        subject: "Current Affairs 2024 - Mega Revision",
        link: "https://www.youtube.com/watch?v=Ag1MamArYNA",
        thumbnail: "https://i.ytimg.com/vi/Ag1MamArYNA/maxresdefault.jpg",
        videos: 1,
        hours: 7.2,
        lastUpdated: "5 days ago",
        description: "All important current affairs from January to December 2024 in one video",
        difficulty: "All Levels",
        isOneShot: true
    },
    {
        id: 8,
        subject: "Indian Polity One-Shot",
        link: "https://www.youtube.com/watch?v=SBisjcRCMRY",
        thumbnail: "https://i.ytimg.com/vi/SBisjcRCMRY/maxresdefault.jpg",
        videos: 1,
        hours: 5.5,
        lastUpdated: "2 weeks ago",
        description: "Complete Indian Constitution, Parliament, and Governance concepts",
        difficulty: "Intermediate",
        isOneShot: true
    },
    {
        id: 9,
        subject: "Geography of India - Mega Revision",
        link: "https://www.youtube.com/watch?v=vZvckhklhZU",
        thumbnail: "https://i.ytimg.com/vi/vZvckhklhZU/maxresdefault.jpg",
        videos: 1,
        hours: 4.8,
        lastUpdated: "1 week ago",
        description: "Physical, economic and political geography of India with maps",
        difficulty: "Beginner",
        isOneShot: true
    },
    {
        id: 10,
        subject: "SSC CGL Physics One-Shot",
        link: "https://www.youtube.com/watch?v=vMGNGpE-LSs",
        thumbnail: "https://i.ytimg.com/vi/vMGNGpE-LSs/maxresdefault.jpg",
        videos: 1,
        hours: 6,
        lastUpdated: "4 days ago",
        description: "Physics and recent tech developments for SSC CGL",
        difficulty: "Intermediate",
        isOneShot: true
    },
    {
        id: 11,
        subject: "Indian History Timeline - Complete",
        link: "https://www.youtube.com/watch?v=LPuWoqQNUuM",
        thumbnail: "https://i.ytimg.com/vi/LPuWoqQNUuM/maxresdefault.jpg",
        videos: 1,
        hours: 5.2,
        lastUpdated: "1 week ago",
        description: "Ancient, medieval and modern Indian history in chronological order",
        difficulty: "All Levels",
        isOneShot: true
    },
    {
        id: 12,
        subject: "Economics Concepts - One Video",
        link: "https://www.youtube.com/watch?v=favybdH2VOY",
        thumbnail: "https://i.ytimg.com/vi/favybdH2VOY/maxresdefault.jpg",
        videos: 1,
        hours: 4.5,
        lastUpdated: "3 days ago",
        description: "Basic economic concepts, budget, and economic survey for SSC CGL",
        difficulty: "Beginner",
        isOneShot: true
    },
    {
        id: 13,
        subject: "Art & Culture Complete",
        link: "https://www.youtube.com/watch?v=VxG4MgN7P7k",
        thumbnail: "https://i.ytimg.com/vi/VxG4MgN7P7k/maxresdefault.jpg",
        videos: 1,
        hours: 3.8,
        lastUpdated: "2 days ago",
        description: "Indian paintings, dances, music, architecture and UNESCO sites",
        difficulty: "All Levels",
        isOneShot: true
    },
    {
        id: 14,
        subject: "Environment & Ecology Crash Course",
        link: "https://www.youtube.com/watch?v=0S0Pv3S-Zx4",
        thumbnail: "https://i.ytimg.com/vi/0S0Pv3S-Zx4/maxresdefault.jpg",
        videos: 1,
        hours: 4.2,
        lastUpdated: "Yesterday",
        description: "Complete environmental science, biodiversity and climate change concepts",
        difficulty: "Intermediate",
        isOneShot: true
    },

    {
        id: 15,
        subject: "Biology & Chemistry One-Shot Masterclass",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual video ID
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Replace with actual thumbnail
        videos: 1,
        hours: 5.5,
        lastUpdated: "2 days ago",
        description: "Complete coverage of human biology, plant physiology, basic chemistry concepts and chemical reactions for SSC CGL",
        difficulty: "Intermediate",
        isOneShot: true,
        highlights: [
            "Human body systems overview",
            "Plant biology essentials",
            "Basic chemical reactions",
            "Important scientific laws",
            "Previous year question analysis"
        ]
    },

    {
        id: 16,
        subject: "Complete Biology in One Video",
        link: "https://www.youtube.com/watch?v=jrWhJSGb0h8",
        thumbnail: "https://i.ytimg.com/vi/jrWhJSGb0h8/maxresdefault.jpg",
        videos: 1,
        hours: 4.8,
        lastUpdated: "1 week ago",
        description: "Human physiology, plant biology, diseases, and nutrition concepts specifically tailored for SSC CGL",
        difficulty: "Beginner to Intermediate",
        isOneShot: true,
        topicsCovered: [
            "Digestive & Nervous systems",
            "Photosynthesis process",
            "Common human diseases",
            "Vitamins and deficiencies",
            "Latest biology discoveries"
        ]
    },

    {
        id: 17,
        subject: "Chemistry Mega Revision",
        link: "https://www.youtube.com/watch?v=EsLPhCOL_zM",
        thumbnail: "https://i.ytimg.com/vi/EsLPhCOL_zM/maxresdefault.jpg",
        videos: 1,
        hours: 3.9,
        lastUpdated: "3 days ago",
        description: "Essential chemical concepts, periodic table trends, and everyday chemistry for SSC CGL exams",
        difficulty: "Beginner",
        isOneShot: true,
        keyFeatures: [
            "Periodic table shortcuts",
            "Chemical formulas to remember",
            "Common chemical reactions",
            "Chemistry in daily life",
            "Environmental chemistry"
        ]
    }







];

function Playlists() {
    const navigate = useNavigate();
    return (
        <div className="playlists-page">
            {/* Hero Section */}
            <section className="playlists-hero">
                <div className="hero-container">
                    <div className="hero-content-wrapper">
                        <h1 className="hero-title">Master SSC CGL with Curated Playlists</h1>
                        <p className="hero-subtitle">
                            Handpicked YouTube playlists from top educators covering all SSC CGL subjects
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Playlists */}
            <section className="featured-playlists">
                <div className="section-header">
                    <h2>Subject-wise YouTube Playlists</h2>
                    <p>Comprehensive video resources organized by topic and difficulty level</p>
                </div>

                <div className="playlists-grid">
                    {playlists.map((playlist) => (
                        <div key={playlist.id} className="playlist-card">
                            <div className="playlist-thumbnail">
                                <img src={playlist.thumbnail} alt={playlist.subject} />
                                <div className="playlist-badge">
                                    <FaYoutube className="youtube-icon" />
                                    <span>YouTube Playlist</span>
                                </div>
                            </div>
                            <div className="playlist-content">
                                <h3>{playlist.subject}</h3>
                                <p className="playlist-description">{playlist.description}</p>

                                <div className="playlist-meta">
                                    <span><FaBook /> {playlist.difficulty}</span>
                                    <span><FaChartLine /> {playlist.videos} videos</span>
                                    <span><FaRegClock /> {playlist.hours} hours</span>
                                </div>

                                <div className="playlist-footer">
                                    <span className="updated-date">Updated: {playlist.lastUpdated}</span>
                                    <a
                                        href={playlist.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="playlist-button"
                                    >
                                        Watch Playlist
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Additional Resources Section */}
            <section className="resources-section">
                <h2>More Learning Resources</h2>
                <div className="resources-grid">
                    {/* Recommended Channels */}
                    <div className="resource-card">
                        <div className="resource-icon"><FaRegThumbsUp /></div>
                        <h3>Recommended Channels</h3>
                        <div className="channel-buttons">
                            <a href="https://www.youtube.com/@SSCAdda247" target="_blank" rel="noopener noreferrer" className="channel-btn">SSC Adda247</a>
                            <a href="https://www.youtube.com/@Exampur__Official" target="_blank" rel="noopener noreferrer" className="channel-btn">Examपुर</a>
                            <a href="https://www.youtube.com/@StudyIQEducationLtd" target="_blank" rel="noopener noreferrer" className="channel-btn">Study IQ</a>
                            <a href="https://www.youtube.com/@khanacademy" target="_blank" rel="noopener noreferrer" className="channel-btn">Khan Academy</a>
                        </div>
                    </div>

                    {/* Study Guide Buttons */}
                    <div className="resource-card">
                        <div className="resource-icon"><FaBook /></div>
                        <h3>Study Guides</h3>
                        <p>Boost your preparation with curated quizzes, book lists, notes, and daily current affairs.</p>
                        <div className="study-buttons">
                            <a href="/quizzes" className="study-btn">Quizzes</a>
                            <a href="/books" className="study-btn">Books</a>
                            <a href="/current-affairs" className="study-btn">Current Affairs</a>
                            <a href="/notes" className="study-btn">Notes</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-buttons">
                <h2>🔗 Explore More</h2>
                <div className="button-group">
                    <button onClick={() => navigate('/cutoff')}>Cutoff</button>
                    <button onClick={() => navigate('/playlists')}>Playlist</button>
                    <button onClick={() => navigate('/quizzes')}>Quizzes</button>
                    <button onClick={() => navigate('/books')}>Books</button>
                    <button onClick={() => navigate('/notes')}>Notes</button>
                    <button onClick={() => navigate('/currentaffairs')}>Current Affairs</button>
                </div>
            </section>


        </div>
    );
}

export default Playlists;