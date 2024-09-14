import React, { useState } from 'react';
import './Note.css';

const Note = ({ note, deleteNote, editNote, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newNote, setNewNote] = useState(note);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editNote(index, newNote);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <input 
          type="text" 
          value={newNote} 
          onChange={(e) => setNewNote(e.target.value)} 
        />
      ) : (
        <p>{note}</p>
      )}
      
      <div className="note-actions">
        <button onClick={() => deleteNote(index)} disabled={isEditing} >Delete</button>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Note;
