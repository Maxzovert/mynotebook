import { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
    const notesInitital = [
        {
            "_id": "66bf6cc835afb920ec5b37f4",
            "user": "66bcbcf127ef6723df68d2c0",
            "title": "Who?",
            "discription": "Iron man",
            "tag": "Marvels",
            "date": "2024-08-16T15:14:16.817Z",
            "__v": 0
        },
        {
            "_id": "66bf6cece2e4ffe2046676d4",
            "user": "66bcbcf127ef6723df68d2c0",
            "title": "Intro",
            "discription": "heeloowwww",
            "tag": "personal",
            "date": "2024-08-16T15:14:52.822Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInitital)
    return (
        <noteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState
