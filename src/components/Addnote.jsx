import React, { useState } from 'react'
import { useContext } from 'react';
import noteContext from '../context/Notes/noteContext';
import './styles/add-notes.css'


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
    <div className='main-con'>
        <div className="note-con">
        <h1 className='add-note-txt'>Add A Note...</h1>
        <form className="note-form">
        <div className="lg-sn-name note-lab title-con">
            <label forhtml="title" className="note-label">Title</label>
            <textarea type="text" className="note-input" id="title"  name="title" aria-describedby="emailHelp" value={note.title}  onChange={onChange} minLength={2} required/>
            <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="lg-sn-name note-lab">
            <label forhtml="discription" className="note-label">Description...</label>
            <textarea type="text" className="note-input disc-input" id="discription" name="discription" value={note.discription} onChange={onChange} minLength={2} required/>
            </div>
            <div className="tag-btn-con">
              <div className="tag-con">
            <label forhtml="tag" className="tag-lab">Tag</label>
            <input type="text" placeholder='Add Tag..' className="tag-input" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={2} required />
            </div>
          <button disabled={note.title.length<1 || note.discription.length<1} type="submit" className="add-btn" onClick={handleClick}>Done</button>
            </div>

        </form>
      </div>
    </div>
  )
}

export default Addnote
