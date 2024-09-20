import React from 'react'
import noteContext from '../context/Notes/noteContext';
import { useContext } from 'react';
import '../index.css'
import './styles/noteitem.css'

function Notesitem(props) {
  const context = useContext(noteContext);
  const {delNote} = context;
    const {note ,updateNote} = props;
  return (
    <>
      <div className="card-main"> 
  <div className="card-body">
    <div className="card-top">
    <h5 className="card-title">{note.title}</h5>
    <i className="fa-solid fa-pen-to-square" style={{"color": "#74C0FC"}} onClick={()=>{updateNote(note);}}> </i>
    </div>
    <p className="card-mid">{note.discription}</p>
    <div className="card-foot">
    <i className="fa-solid fa-trash" style={{"color": "#74C0FC"}} onClick={()=>{delNote(note._id);props.showAlert("Note Delete" , "success")}}></i>
    <button type="button" className="btn btn-info">{note.tag}</button>
    </div>  
  </div>
</div>
    </>
  )
} 

export default Notesitem
