import React, { useState } from 'react';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  // Add a new note
  const addNote = () => {
    if (noteText.trim() === '') {
      alert('Please enter a note!');
      return;
    }
    setNotes([...notes, noteText]);
    setNoteText('');
  };

  // Edit an existing note
  const editNote = (index) => {
    const newNote = prompt('Edit your note:', notes[index]);
    if (newNote !== null && newNote.trim() !== '') {
      const updatedNotes = [...notes];
      updatedNotes[index] = newNote.trim();
      setNotes(updatedNotes);
    }
  };

  // Delete a note
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="note-app">
      <h1>Notes App</h1>
      <div className="note-input">
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Enter your note here"
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li key={index} className="note-item">
            <span>{note}</span>
            <div>
              <button onClick={() => editNote(index)}>Edit</button>
              <button onClick={() => deleteNote(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteApp;