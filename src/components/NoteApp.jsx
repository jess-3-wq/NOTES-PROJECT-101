import React, { useState } from 'react';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState(''); // Added state to handle note title

  const getCurrentTime = () => new Date().toLocaleString();

  // Add a new note
  const addNote = () => {
    if (noteTitle.trim() === '' || noteText.trim() === '') {
      alert('Please enter both a title and a note!');
      return;
    }

    const newNote = {
      title: noteTitle.trim(), // Added title to note object
      text: noteText.trim(),
      timestamp: getCurrentTime(),
    };

    setNotes([...notes, newNote]);
    setNoteText('');
    setNoteTitle(''); // Reset title input after adding note
  };

  // Edit an existing note
  const editNote = (index) => {
    const updatedTitle = prompt('Edit the title:', notes[index].title); // Prompt for title
    const updatedText = prompt('Edit your note:', notes[index].text);
    if (
      updatedTitle !== null &&
      updatedTitle.trim() !== '' &&
      updatedText !== null &&
      updatedText.trim() !== ''
    ) {
      const updatedNotes = [...notes];
      updatedNotes[index] = {
        ...updatedNotes[index],
        title: updatedTitle.trim(), // Update title
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
          id="note-title"
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Enter title" // New input for title
        />
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
            <strong>{note.title}</strong><br /> {/* Display the note title */}
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
