import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const NotesList = ({ onNoteDelete }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('http://localhost:3001/notes');
                setNotes(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchNotes();
    }, []);

    const handleDeleteNote = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/notes/${id}`);
            setNotes(notes.filter((note) => note.id !== id));
            onNoteDelete();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="notes-list">
            <h2>Notes</h2>
            <div className="notes-grid">
                {notes.map((note) => (
                    <div key={note.id} className="note-item">
                        <div>
                            <strong>{note.title}</strong>: {note.content}
                        </div>
                        <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotesList;
