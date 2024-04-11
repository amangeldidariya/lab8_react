import React, { useState, useContext } from 'react';
import { FormContext } from '../contexts/FormContext';
import '../App.css';

function AddForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const { addAd } = useContext(FormContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addAd(title, description, image);
        setTitle('');
        setDescription('');
        setImage(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            <button type="submit">Добавить</button>
        </form>
    );
}

export default AddForm;
