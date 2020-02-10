import React from 'react';
import './Note.css'

const Note = (props) => {
    const { note } = props

    return (
        <div className="note">
            {note}
        </div>
    )
}

Note.defaultProps = {
    note: []
}

export default Note;