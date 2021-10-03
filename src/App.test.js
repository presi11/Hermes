import { render } from '@testing-library/react';
import LayoutHOC from './HOC/Layout/LayoutHOC';

test('renders Hermes react link', () => {
  const { getByText } = render(<LayoutHOC />);
  const linkElement = getByText(/Hermes/);
  expect(linkElement).toBeInTheDocument();
});
