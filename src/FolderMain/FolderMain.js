import React from 'react';
import FolderList from '../FolderList/FolderList';
import './FolderMain.css';

const FolderMain = (props) => {
    const { folders } = props

    return (
        <nav className='app_nav'>
            <FolderList
                folders={ folders }
            />
        </nav>
    )
}

export default FolderMain;
