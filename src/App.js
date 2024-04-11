import React from 'react';
import './App.css';
import { AdProvider } from './contexts/FormContext';
import AddForm from './components/AddForm';
import FormList from "./components/FormList";

function App() {
    return (
        <AdProvider>
            <div className="App">
                <h1>Доска объявлении</h1>
                <AddForm />
                <FormList />
            </div>
        </AdProvider>
    );
}

export default App;

