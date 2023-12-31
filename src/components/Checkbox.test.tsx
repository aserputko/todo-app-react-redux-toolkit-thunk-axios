import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox'; // Adjust the import path as needed

describe('Checkbox Component', () => {
  test('renders the checkbox', () => {
    render(<Checkbox checked={false} handleChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('checkbox reflects the checked prop', () => {
    const { rerender } = render(<Checkbox checked={false} handleChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    rerender(<Checkbox checked={true} handleChange={() => {}} />);
    expect(checkbox.checked).toBe(true);
  });

  test('calls handleChange when clicked', () => {
    const handleChange = jest.fn();
    render(<Checkbox checked={false} handleChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
