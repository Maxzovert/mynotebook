import React, { useState } from 'react'
import { useContext } from 'react';
import noteContext from '../context/Notes/noteContext';


function Addnote() {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note,setNote] = useState({title:"",discription:"",tag:"default"})

    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.title,note.discription,note.tag);
    }
    
    const onChange = (e) =>{
        setNote({...note,[e.target.name]:e.target.value})
    }

  return (
    <div>
        <div className="container my-3">
        <h1>Add A Note</h1>
        <form>
          <div className="mb-3">
            <label forhtml="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title"  name="title" aria-describedby="emailHelp" onChange={onChange} />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label forhtml="discription" className="form-label">Description</label>
            <input type="text" className="form-control" id="discription" name="discription" onChange={onChange} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" forhtml="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default Addnote
