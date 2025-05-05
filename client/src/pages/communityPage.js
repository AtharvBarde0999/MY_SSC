import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import { motion } from 'framer-motion';
import './communityPage.css';

function CommunityPage() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [file, setFile] = useState(null);

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { text: message, id: messages.length, file }]);
            setMessage("");
            setFile(null);
        }
    };

    const handleEmojiClick = (emojiData) => {
        setMessage((prev) => prev + emojiData.emoji);
        setShowEmojiPicker(false);
    };

    const handleFileUpload = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className="community-page">
            <motion.div
                className="hero-section"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Welcome to the MYSSC Community!</h1>
                <p>Connect. Learn. Grow. Ask your doubts, share notes, and support each other.</p>
                <img
                    src="https://images.unsplash.com/photo-1614064641938-bd43f3f2bb96?auto=format&fit=crop&w=1600&q=80"
                    alt="Community"
                    className="hero-image"
                />
            </motion.div>

            <motion.div
                className="chat-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="chat-box">
                    {messages.map((msg) => (
                        <motion.div key={msg.id} className="message" layout>
                            <p>{msg.text}</p>
                            {msg.file && <img src={msg.file} alt="uploaded file" className="uploaded-file" />}
                        </motion.div>
                    ))}
                </div>
                <div className="message-input">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write a message..."
                    />
                    <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
                    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
                    <input type="file" onChange={handleFileUpload} accept="image/*,.pdf" />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </motion.div>
        </div>
    );
}

export default CommunityPage;
