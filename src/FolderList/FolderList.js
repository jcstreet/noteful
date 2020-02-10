import React from 'react';
import { NavLink } from 'react-router-dom';
import './FolderList.css';

const FolderList = (props) => {
  const { folders } = props

  return (
    <ul className="nav_list">
      {
        folders.map(folder => {
          return <li key={folder.id}><NavLink to={`/folder/${folder.id}`}>{folder.name}</NavLink></li>
        })
      }
    </ul>
  )
}

FolderList.defaultProps = {
  folders: []
}

export default FolderList