import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import FolderMain from './FolderMain/FolderMain';
import NoteMain from './NoteMain/NoteMain';
import Note from './Note/Note';
import './App.css';
import dummyStore from './dummy-store';


class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    this.setState(dummyStore);
  }

  render() {
    return (
      <div className='App'>
        <h1 className="app_header"><NavLink to="/">NOTEFUL</NavLink></h1>
        <div>
          <Route path="/" render={
            (routeProps) => {
              return <FolderMain folders={this.state.folders} />
            }
          }/>
          <Route exact path="/" render={
            (routeProps) => {
              return <NoteMain notes={this.state.notes} />
            }
          } />
          <Route path="/folder/:id" render={
            (routeProps) => {
              const filteredNotes = this.state.notes.filter(note => note.folderId === routeProps.match.params.id);
              return <NoteMain notes={filteredNotes} />
            }
          } />
          <Route path="/note/:id" render={
            (routeProps) => {
              const selectedNote = this.state.notes.find(note => note.id === routeProps.match.params.id);
              if (!selectedNote) return null
              return <Note note={selectedNote.content} />
            }
          } />
        </div>
      </div>
    );
  }
}

export default App;