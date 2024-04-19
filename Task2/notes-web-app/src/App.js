import React, { useState } from 'react';
import AddNoteForm from './AddNoteForm';
import NotesList from './NotesList';

const App = () => {
    const [refreshKey, setRefreshKey] = useState(0); // State to force re-render

    const handleAddNote = () => {
        // Update the refresh key to force re-render of NotesList component
        setRefreshKey((prevKey) => prevKey + 1);
    };

    const handleDeleteNote = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    return (
        <div>
            <AddNoteForm onAddNote={handleAddNote} />
            <NotesList key={refreshKey} onNoteDelete={handleDeleteNote} />
        </div>
    );
};

export default App;
