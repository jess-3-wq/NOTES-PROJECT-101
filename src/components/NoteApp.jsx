import React, { useState } from 'react';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const getCurrentTime = () => new Date().toLocaleString();

  // Add a new note
  const addNote = () => {
    if (noteText.trim() === '') {
      alert('Please enter a note!');
      return;
    }

    const newNote = {
      text: noteText.trim(),
      timestamp: getCurrentTime(),
    };

    setNotes([...notes, newNote]);
    setNoteText('');
  };

  // Edit an existing note
  const editNote = (index) => {
    const updatedText = prompt('Edit your note:', notes[index].text);
    if (updatedText !== null && updatedText.trim() !== '') {
      const updatedNotes = [...notes];
      updatedNotes[index] = {
        ...updatedNotes[index],
        text: updatedText.trim(),
        timestamp: getCurrentTime(), // Update timestamp
      };
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
          id="note-input"
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
            <span>{note.text}</span>
            <div>
              <small style={{ color: 'gray', fontSize: '0.8em' }}>{note.timestamp}</small>
              <br />
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
