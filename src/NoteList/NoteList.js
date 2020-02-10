import React from 'react';
import { NavLink } from 'react-router-dom';
import './NoteList.css'

const NoteList = (props) => {
    const { notes } = props

    return (
        <ul className="note_list">
            {
                notes.map(note => {
                    return <li key={note.id}><NavLink to={`/note/${note.id}`}>{note.name}</NavLink></li>
                })
            }
        </ul>
    )
}

NoteList.defaultProps = {
    notes: []
}

export default NoteList;