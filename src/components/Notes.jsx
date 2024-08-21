import { useContext } from 'react';
import React  from 'react'
import noteContext from '../context/Notes/noteContext';
import Notesitem from './Notesitem';

function Notes() {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
  return (
    <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <Notesitem note={note}/>
        })}
      </div>
  )
}

export default Notes
