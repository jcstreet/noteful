import React from 'react';
import NoteList from '../NoteList/NoteList';
import './NoteMain.css'

const NoteMain = (props) => {
    const { notes } = props

    return (
      <main className='app_main'>
          <NoteList notes={notes}/>
      </main>
    )
}

export default NoteMain;