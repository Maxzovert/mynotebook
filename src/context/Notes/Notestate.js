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
        console.log(json)
        setNotes(json)
    }
    //Add a note
    const addNote = async(title, discription , tag)=>{

        const response = await fetch(`${host}/api/notes/addnote`,{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOGNlMTJlZDI5OWMyNzMxNWQ5ODA2In0sImlhdCI6MTcyNDQzNTk4Nn0.y50Z17C2IGCDxpaXgZ_Le3ltB0MNMM9WpFWLrmVy9ZA'
            },
            body: JSON.stringify({ title, discription, tag })
        });
        //Client side logic 
        console.log("edding a new note")
        const json = await response.json();
        console.log(json)
       const note = {
            "_id": "666bf6cece2e4ffe2046676d4",
            "user": "66bcbcf127ef6723df68d2c0",
            "title":title,
            "discription":discription,
            "tag":tag,
            "date": "2024-08-16T15:14:52.822Z",
            "__v": 0
        }
    setNotes(notes.concat(note))
}  
    //Delete note
    const delNote = async (id)=>{

                const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type' : 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOGNlMTJlZDI5OWMyNzMxNWQ5ODA2In0sImlhdCI6MTcyNDQzNTk4Nn0.y50Z17C2IGCDxpaXgZ_Le3ltB0MNMM9WpFWLrmVy9ZA'
            },
        });

        console.log("deleting note " + id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    } 

    //Edit a note
    const editNote = async (id,title,discription,tag)=>{
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type' : 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOGNlMTJlZDI5OWMyNzMxNWQ5ODA2In0sImlhdCI6MTcyNDQzNTk4Nn0.y50Z17C2IGCDxpaXgZ_Le3ltB0MNMM9WpFWLrmVy9ZA'
            },
            body: JSON.stringify({ title, discription, tag })
        });
        // const json =  await response.json() 
        // console.log(json)
        //edit on client side
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                element.title = title;
                element.discription = discription;
                element.tag = tag;
            }
            
        }
    }

    return (
        <noteContext.Provider value={{ notes, addNote , delNote , editNote ,getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState
