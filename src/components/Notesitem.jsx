import React from 'react'
import noteContext from '../context/Notes/noteContext';
import { useContext } from 'react';

function Notesitem(props) {
  const context = useContext(noteContext);
  const {delNote} = context;
    const {note ,updateNote} = props;
  return (
    <div className='col-md-3'>
      <div className="card my-2">
  <div className="card-body">
    <div className="d-flex justify-content-between align-items-center">
    <h5 className="card-title">{note.title}</h5>
    <i className="fa-solid fa-pen-to-square" style={{"color": "#74C0FC"}} onClick={()=>{updateNote(note)}}></i>
    </div>
    <p className="card-text">{note.discription}</p>
    <div className="d-flex justify-content-between align-items-center">
    <i className="fa-solid fa-trash" style={{"color": "#74C0FC"}} onClick={()=>{delNote(note._id)}}></i>
    <button type="button" className="btn btn-info">Tag</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Notesitem
