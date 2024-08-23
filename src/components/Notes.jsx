import { useContext } from 'react';
import React  from 'react'
import noteContext from '../context/Notes/noteContext';
import Notesitem from './Notesitem';
import Addnote from './Addnote';
// import { useEffect } from 'react';

function Notes() {
    const context = useContext(noteContext);
    const { notes} = context;
    // useEffect(()=>{
    //   getNotes();
    // },[])
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
