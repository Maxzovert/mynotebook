import { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitital = []
    const [notes,setNotes] = useState(notesInitital)


    const getNotes = async()=>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOGNlMTJlZDI5OWMyNzMxNWQ5ODA2In0sImlhdCI6MTcyNDQzNTk4Nn0.y50Z17C2IGCDxpaXgZ_Le3ltB0MNMM9WpFWLrmVy9ZA'
            }
        });
        const json = await response.json()
        setNotes(json)
    }
    //Add a note
    const addNote = async(title, discription , tag)=>{

        const response = await fetch(`${host}/api/notes/addnote`,{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify({ title, discription, tag })
        });
        //Client side logic 
        const note = await response.json();
        setNotes(notes.concat(note))
}  
    //Delete note
    const delNote = async (id)=>{
            // eslint-disable-next-line
                const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
        });

        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    } 

    //Edit a note
    const editNote = async (id,title,discription,tag)=>{
        // eslint-disable-next-line
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify({ title, discription, tag })
        });


        let newNotes =JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if(element._id === id){
                newNotes[index].title = title;
                newNotes[index].discription = discription;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <noteContext.Provider value={{ notes, addNote , delNote , editNote ,getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState
