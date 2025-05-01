// client/src/pages/Chats.js
import React, { useEffect, useRef, useState } from "react";
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp
} from "firebase/firestore";
import {
    ref,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";
import { db, storage } from "../firebase";

const Chats = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [image, setImage] = useState(null);
    const [username, setUsername] = useState("Atharv");

    const chatEndRef = useRef(null); // for auto scroll

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const msgs = [];
            querySnapshot.forEach((doc) => {
                msgs.push({ id: doc.id, ...doc.data() });
            });
            setMessages(msgs);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (newMessage.trim() === "" && !image) return;

        let imageUrl = null;
        if (image) {
            const imageRef = ref(storage, `chatImages/${image.name + Date.now()}`);
            const snapshot = await uploadBytes(imageRef, image);
            imageUrl = await getDownloadURL(snapshot.ref);
        }

        await addDoc(collection(db, "messages"), {
            username: username || "User",
            text: newMessage,
            imageUrl: imageUrl || null,
            createdAt: serverTimestamp(),
        });

        setNewMessage("");
        setImage(null);
    };

    return (
        <div style={{ padding: "1rem" }}>
            <h2>Community Chat</h2>

            {/* Username input */}
            <div style={{ marginBottom: "1rem" }}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your name"
                    style={{ padding: "0.5rem", width: "50%" }}
                />
            </div>

            {/* Messages box */}
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "1rem",
                    height: "300px",
                    overflowY: "auto",
                    marginBottom: "1rem"
                }}
            >
                {messages.map((msg) => (
                    <div key={msg.id} style={{ marginBottom: "1rem" }}>
                        {msg.text && (
                            <div>
                                <strong>{msg.username || "User"}:</strong> {msg.text}
                            </div>
                        )}
                        {msg.imageUrl && (
                            <img
                                src={msg.imageUrl}
                                alt="Chat upload"
                                style={{ maxWidth: "200px", marginTop: "5px" }}
                            />
                        )}
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>

            {/* Message form */}
            <form onSubmit={handleSend}>
                <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    style={{ padding: "0.5rem", width: "70%" }}
                />
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/*"
                    style={{ marginLeft: "0.5rem" }}
                />
                <button type="submit" style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>
                    Send
                </button>
            </form>
        </div>


    );

};



export default Chats;


