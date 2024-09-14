// src/components/NoteForm.js
import React, { useState } from 'react';
import './NoteForm.css';

const NoteForm = ({ addNote }) => {
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!note) return;
        addNote(note);
        setNote('');
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write a note..."
            />
            <button type="submit">Add Note</button>
        </form>
    );
}; 

export default NoteForm;
