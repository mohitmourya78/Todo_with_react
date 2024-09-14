// src/components/NoteApp.js
import React, { useState } from 'react';
import NoteForm from './NoteForm';
import Note from './Note';
import './NoteApp.css';
import Footer from './Footer';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes , note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const editNote = (index, newNote) => {
    const newNotes = notes.map((note, i) => (i === index ? newNote : note));
    setNotes(newNotes);
  };

  return (
    <div className="note-app">
      <div className='noteee'>
      <h1>Note App</h1>
      <NoteForm addNote={addNote} />
      <div className="note-list">
        {notes.map((note, index) => (
          <Note key={index} index={index} note={note} deleteNote={deleteNote}  editNote={editNote}  />
        ))}
      </div> 
      </div>
      <Footer />
    </div>

  );

  
};

export default NoteApp;
