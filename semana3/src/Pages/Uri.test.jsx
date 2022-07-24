import Uri from '../Pages/Uri';
import { render, screen } from '@testing-library/react';

describe('Uri', () => {
  test('render Uri', () => {
    render(<Uri />);

    expect(screen.getByText('Uri')).toBeInTheDocument();
  });
});
