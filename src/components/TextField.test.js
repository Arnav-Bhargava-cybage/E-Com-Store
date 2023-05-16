import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextField from './TextField';

describe('TextField', () => {
  test('renders the label correctly', () => {
    const label = 'Username';
    const { getByLabelText } = render(<TextField label={label} />);
    const labelElement = getByLabelText(label);
    expect(labelElement).toBeInTheDocument();
  });

  test('renders the input value correctly', () => {
    const value = 'John Doe';
    const { getByDisplayValue } = render(<TextField value={value} />);
    const inputElement = getByDisplayValue(value);
    expect(inputElement).toBeInTheDocument();
  });

  test('triggers the onChange callback when input value changes', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<TextField onChange={onChangeMock} />);
    const inputElement = getByRole('textbox');
    const inputValue = 'New Value';
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(inputValue);
  });

  // Add more test cases as needed
});
