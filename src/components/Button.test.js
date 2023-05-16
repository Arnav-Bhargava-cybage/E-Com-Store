import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders the button with the provided children', () => {
    const buttonText = 'Click Me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const button = getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it('calls the onClick function when the button is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
    const button = getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has the correct styles applied', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    const button = getByText('Test Button');
    expect(button).toHaveStyle(`
      color: #fff;
      textDecoration: none;
      backgroundColor: #0717ce;
      padding: 4px 16px;
      borderRadius: 10px;
      fontSize: 14px;
      fontWeight: bolder;
      marginTop: 24px;
    `);
  });
});
