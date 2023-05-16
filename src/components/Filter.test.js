import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Filter from './Filter';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Filter', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Filter />
      </MemoryRouter>
    );
  });

  it('renders the Filter component', () => {
    expect(screen.getByLabelText('Select category:')).toBeInTheDocument();
    expect(screen.getByLabelText('Select brand:')).toBeInTheDocument();
    expect(screen.getByLabelText('Price Range:')).toBeInTheDocument();
    expect(screen.getByText('Apply')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  it('updates the selected category', () => {
    fireEvent.change(screen.getByLabelText('Select category:'), {
      target: { value: 'Category 1' },
    });
    expect(screen.getByLabelText('Select category:').value).toBe('Category 1');
  });

  it('updates the selected brand', () => {
    fireEvent.change(screen.getByLabelText('Select brand:'), {
      target: { value: 'Brand 1' },
    });
    expect(screen.getByLabelText('Select brand:').value).toBe('Brand 1');
  });

  it('updates the selected minimum price', () => {
    fireEvent.change(screen.getByPlaceholderText('Minimum Price'), {
      target: { value: '10' },
    });
    expect(screen.getByPlaceholderText('Minimum Price').value).toBe('10');
  });

  it('updates the selected maximum price', () => {
    fireEvent.change(screen.getByPlaceholderText('Maximum Price'), {
      target: { value: '100' },
    });
    expect(screen.getByPlaceholderText('Maximum Price').value).toBe('100');
  });

  it('applies the price range filter', () => {
    fireEvent.change(screen.getByLabelText('Select category:'), {
      target: { value: 'Category 1' },
    });
    fireEvent.change(screen.getByLabelText('Select brand:'), {
      target: { value: 'Brand 1' },
    });
    fireEvent.change(screen.getByPlaceholderText('Minimum Price'), {
      target: { value: '10' },
    });
    fireEvent.change(screen.getByPlaceholderText('Maximum Price'), {
      target: { value: '100' },
    });
    fireEvent.click(screen.getByText('Apply'));
    expect(screen.getByPlaceholderText('Minimum Price').value).toBe('10');
    expect(screen.getByPlaceholderText('Maximum Price').value).toBe('100');
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Brand 1')).toBeInTheDocument();
  });

  it('resets the filter', () => {
    fireEvent.change(screen.getByLabelText('Select category:'), {
      target: { value: 'Category 1' },
    });
    fireEvent.change(screen.getByLabelText('Select brand:'), {
      target: { value: 'Brand 1' },
    });
    fireEvent.change(screen.getByPlaceholderText('Minimum Price'), {
      target: { value: '10' },
    });
    fireEvent.change(screen.getByPlaceholderText('Maximum Price'), {
      target: { value: '100' },
    });
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByLabelText('Select category:').value).toBe('');
    expect(screen.getByLabelText('Select brand:').value).toBe('');
    expect(screen.getByPlaceholderText('Minimum Price').value).toBe('');
    expect(screen.getByPlaceholderText('Maximum Price').value).toBe('');
  });
});
