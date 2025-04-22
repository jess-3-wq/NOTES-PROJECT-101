import React, { useState } from 'react'

const NoteForm = () => {
  
    const [note, setNote]= useState([])
    const [title, setTiltle] = useState('')
    const [content, setContent] = useState('')

    const handleAddNote= (e) => {
      e.preventDefault();

      const newNote = `Note ${note.length + 1};`

      setNote(prevNotes => [...prevNotes, newNote])
      setTiltle('')
      setContent('')

    }
    
  
  return (
    <div>
        
    </div>
  )
}

export default NoteForm