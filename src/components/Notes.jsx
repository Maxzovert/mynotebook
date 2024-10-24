import { useContext } from 'react';
import React from 'react';
import noteContext from '../context/Notes/noteContext';
import Notesitem from './Notesitem';
import Addnote from './Addnote';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/noteitem.css'

function Notes(props) {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes, editNote } = context;

  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const [note, setNote] = useState({ id: "", etitle: "", ediscription: "", etag: "" });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentnote) => {
    setModalOpen(true); // Open the modal
    setNote({ id: currentnote._id, etitle: currentnote.title, ediscription: currentnote.discription, etag: currentnote.tag });
  };

  const handleClick = (e) => {
    console.log("updating..", note);
    editNote(note.id, note.etitle, note.ediscription, note.etag);
    setModalOpen(false); // Close the modal after updating
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Addnote/>

      {isModalOpen && ( // Conditionally render the modal
        <div className="modal fade show" style={{ display: 'block', backdrop: 'static' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Edit Note</h1>
                <button type="button" className="btn-close" onClick={() => setModalOpen(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} minLength={2} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="ediscription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="ediscription" name="ediscription" value={note.ediscription} onChange={onChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">{note.tag}</label>
                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setModalOpen(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="main-card-note">
        <h1>Your Notes</h1>
        <div className="card-container">
          {notes.length === 0 && "Add your first Note"}
        </div>
        <div className='card-add'></div>
        {notes.map((note) => {
          return <Notesitem key={note._id} updateNote={updateNote} note={note}/>;
        })}
      </div>
    </>
  );
}

export default Notes;
