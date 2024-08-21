import { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
    const notesInitital = [
        {
            "_id": "166bf6cc835afb920ec5b37f4",
            "user": "66bcbcf127ef6723df68d2c0",
            "title": "Who?",
            "discription": "Tony Stark",
            "tag": "Marvels",
            "date": "2024-08-16T15:14:16.817Z",
            "__v": 0
        },
        {
            "_id": "266bf6cece2e4ffe2046676d4",
            "user": "66bcbcf127ef6723df68d2c0",
            "title": "Intro",
            "discription": "Iron Man",
            "tag": "personal",
            "date": "2024-08-16T15:14:52.822Z",
            "__v": 0
        },
        {
            "_id": "366bf6cece2e4ffe2046676d4",
            "user": "66bcbcf127ef6723df68d2c0",
            "title": "Maths",
            "discription": "Trigonomety",
            "tag": "School",
            "date": "2024-08-16T15:14:52.822Z",
            "__v": 0
        },
        {
            "_id": "466bf6cece2e4ffe2046676d4",
            "user": "66bcbcf127ef6723df68d2c0",
            "title": "Trip",
            "discription": "RawalPindi",
            "tag": "School",
            "date": "2024-08-16T15:14:52.822Z",
            "__v": 0
        },
        {
            "_id": "566bf6cece2e4ffe2046676d4",
            "user": "66bcbcf127ef6723df68d2c0",
            "title": "Dream DIary",
            "discription": "Locket",
            "tag": "Pesonal",
            "date": "2024-08-16T15:14:52.822Z",
            "__v": 0
        },
        {
            "_id": "666bf6cece2e4ffe2046676d4",
            "user": "66bcbcf127ef6723df68d2c0",
            "title": "Hobbies",
            "discription": "Singing",
            "tag": "Pesonal",
            "date": "2024-08-16T15:14:52.822Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInitital)
    // eslint-disable-next-line
    return (
        <noteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState
