import React, { useState } from 'react';
import './Information.css'; // Optional: for CSS styling

const Information = () => {
    const [personalInfo, setPersonalInfo] = useState({
        name: "Ali",
        age: 30,
        email: "ali@gmail.com",
        location: "ibra, oman",
        interests: ["Coding", "Traveling", "Photography", "Reading"]
    });

    const [newInterest, setNewInterest] = useState("");

    const handleAddInterest = () => {
        if (newInterest.trim() !== "") {
            setPersonalInfo(prevState => ({
                ...prevState,
                interests: [...prevState.interests, newInterest]
            }));
            setNewInterest(""); // Clear input field
        }
    };

    const handleDeleteInterest = (interestToDelete) => {
        setPersonalInfo(prevState => ({
            ...prevState,
            interests: prevState.interests.filter(interest => interest !== interestToDelete)
        }));
    };

    return (
        <div className="information-container">
            <header>
                <h1>Personal Information</h1>
            </header>
            <div className="card">
                <section>
                    <h2>About Me</h2>
                    <p>Name: {personalInfo.name}</p>
                    <p>Age: {personalInfo.age}</p>
                    <p>Email: {personalInfo.email}</p>
                    <p>Location: {personalInfo.location}</p>
                </section>
                <section>
                    <h2>Interests</h2>
                    <ul>
                        {personalInfo.interests.map((interest, index) => (
                            <li key={index}>
                                {interest} 
                                <button onClick={() => handleDeleteInterest(interest)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <input 
                        type="text" 
                        value={newInterest} 
                        onChange={(e) => setNewInterest(e.target.value)} 
                        placeholder="Add new interest" 
                    />
                    <button onClick={handleAddInterest}>Add</button>
                </section>
            </div>
           
        </div>
    );
};

export default Information;
