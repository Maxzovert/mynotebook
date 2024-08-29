import { useContext } from 'react';
import React from 'react'
import noteContext from '../context/Notes/noteContext';
import Notesitem from './Notesitem';
import Addnote from './Addnote';
import { useEffect , useRef , useState} from 'react';
import { useNavigate } from 'react-router-dom'; 

function Notes(props) {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }else{
      navigate("/login")
    }
     // eslint-disable-next-line
  }, [])

  const ref = useRef(null)
  const refclose = useRef(null)
  const [note,setNote] = useState({id:"" , etitle:"",ediscription:"",etag:""})
  
  const updateNote = (currentnote) => {
    ref.current.click();
    setNote({id:currentnote._id , etitle:currentnote.title,ediscription:currentnote.discription,etag:currentnote.tag})
    }
  const handleClick = (e) =>{
    console.log("updating..",note)
    editNote(note.id,note.etitle,note.ediscription,note.etag);
    refclose.current.click();
    props.showAlert("Note Updated", "success");
}

const onChange = (e) =>{
    setNote({...note,[e.target.name]:e.target.value})
}
  return (
    <>
      <Addnote showAlert={props.showAlert}/>
      <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
          <div className="mb-3">
            <label forhtml="etitle" className="form-label">Title</label>
            <input type="text" className="form-control" id="etitle"  name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={2} required/>

            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label forhtml="ediscription" className="form-label">Description</label>
            <input type="text" className="form-control" id="ediscription" name="ediscription" onChange={onChange} value={note.ediscription}/>
          </div>
          <div className="mb-3">
            <label forhtml="etag" className="form-label">{note.tag}</label>
            <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag} />
          </div>
        </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button ref={refclose} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container">
        {notes.length===0 && "Add your first Note"}
        </div>
        {notes.map((note) => {
          return <Notesitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>
        })}
      </div>
    </>
  )
}

export default Notes
