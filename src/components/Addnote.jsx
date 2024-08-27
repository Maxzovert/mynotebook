import React, { useState } from 'react'
import { useContext } from 'react';
import noteContext from '../context/Notes/noteContext';


function Addnote(props) {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note,setNote] = useState({title:"",discription:"",tag:""})

    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.title,note.discription,note.tag);
        setNote({title:"",discription:"",tag:""})
        props.showAlert("Note Added", "success");
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
            <input type="text" className="form-control" id="title"  name="title" aria-describedby="emailHelp" value={note.title}  onChange={onChange} minLength={2} required/>
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label forhtml="discription" className="form-label">Description</label>
            <input type="text" className="form-control" id="discription" name="discription" value={note.discription} onChange={onChange} minLength={2} required/>
          </div>
          <div className="mb-3">
            <label forhtml="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={2} required />
          </div>
          <button disabled={note.title.length<1 || note.discription.length<1} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default Addnote
