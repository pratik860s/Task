import React, { useState } from 'react';
import axios from 'axios';

const AddNoteForm = ({ onAddNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            setError('Title and content cannot be empty');
            return;
        }
        if (/^[0-9]+$/.test(content.trim())) {
            setError('Content cannot contain only numbers');
            return;
        }
        if (/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(title.trim())) {
            setError('Title cannot contain only special characters');
            return;
        }
        if (/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(content.trim())) {
            setError('Content cannot contain only special characters');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/notes', { title, content });
            onAddNote();
            setTitle('');
            setContent('');
            setError('');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-note-form">
            {error && <p className="error">{error}</p>}
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="add-note-input"
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="add-note-textarea"
            ></textarea>
            <button type="submit" className="add-note-button">Add Note</button>
        </form>
    );
};

export default AddNoteForm;
