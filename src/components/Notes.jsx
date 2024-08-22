import { useContext } from 'react';
import React  from 'react'
import noteContext from '../context/Notes/noteContext';
import Notesitem from './Notesitem';
import Addnote from './Addnote';

function Notes() {
    const context = useContext(noteContext);
    const { notes} = context;
  return (
    <>
    <Addnote/>
    <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <Notesitem key={note._id} note={note}/>
        })}
      </div>
      </>
  )
}

export default Notes
