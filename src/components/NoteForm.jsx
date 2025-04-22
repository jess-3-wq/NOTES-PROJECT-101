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
        <form onSubmit={handleAddNote}>
           
            <input 
            type="text"
            name='Title' 
            placeholder='Title'
            value={title} 
            onChange={(e) => setTiltle(e.target.value)}/>

            <textarea
             type="text"
              name='Content'
               placeholder=' Content' 
               value={content}
               onChange={(e) => setContent(e.target.value)}/>
            
          
            <button 
            onClick={handleAddNote}
            type='submit'>
              Add note
              </button>
          
        </form>
    </div>
  )
}

export default NoteForm