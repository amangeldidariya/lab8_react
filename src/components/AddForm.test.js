// AddForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddForm from './AddForm';

test('submitting the form calls addAd callback', () => {
    const addAd = jest.fn();
    const { getByPlaceholderText, getByText } = render(<AddForm addAd={addAd} />);

    const input = getByPlaceholderText('Введите заголовок объявления');
    fireEvent.change(input, { target: { value: 'Новое объявление' } });

    const button = getByText('Добавить объявление');
    fireEvent.click(button);

    expect(addAd).toHaveBeenCalledWith('Новое объявление');
});

