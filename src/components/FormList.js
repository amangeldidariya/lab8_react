import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';
import FormItem from './FormItem';
import '../App.css';

function FormList() {
    const { ads } = useContext(FormContext);

    return (
        <div>
            <h2> Все объявления</h2>
            <div className="container">
                {ads.map(ad => (
                    <FormItem key={ad.id} ad={ad} />
                ))}
            </div>
        </div>

    );
}

export default React.memo(FormList);
