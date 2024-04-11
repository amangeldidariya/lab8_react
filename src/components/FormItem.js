import React, { useState, useContext, memo } from 'react';
import { FormContext } from '../contexts/FormContext';
import '../App.css';

function FormItem({ ad }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(ad.title);
    const [editedDescription, setEditedDescription] = useState(ad.description);
    const { removeAd, updateAd } = useContext(FormContext);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        updateAd(ad.id, editedTitle, editedDescription);
        setIsEditing(false);
    };

    return (
        <div className="Ad">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        placeholder="Заголовок"
                    />
                    <input
                        type="text"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        placeholder="Описание"
                    />
                    <button onClick={handleSave}>Обновить</button>
                </div>
            ) : (
                <div className="cont">
                    <h3>Title: {ad.title}</h3>
                    <p>{ad.description}</p>


                </div>
            )}
            {ad.image && <img src={URL.createObjectURL(ad.image)} alt="FormItem" />}

            <div className={"btn"}>
                <button className={"ed_btn"} onClick={handleEdit}>Изменить</button>
                <button className={"del_btn"} onClick={() => removeAd(ad.id)}>Удалить</button>
            </div>

        </div>
    );
}

export default memo(FormItem);

