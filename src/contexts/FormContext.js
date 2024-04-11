import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const AdProvider = ({ children }) => {
    const [ads, setAds] = useState([]);

    const addAd = (title, description, image) => {
        setAds([...ads, { id: Date.now(), title, description, image }]);
    };

    const removeAd = (id) => {
        setAds(ads.filter(ad => ad.id !== id));
    };

    const updateAd = (id, newTitle, newDescription) => {
        setAds(ads.map(ad => (ad.id === id ? { ...ad, title: newTitle, description: newDescription } : ad)));
    };

    return (
        <FormContext.Provider value={{ ads, addAd, removeAd, updateAd }}>
            {children}
        </FormContext.Provider>
    );
};

