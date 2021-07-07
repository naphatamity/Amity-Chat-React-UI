import { render } from '@testing-library/react';
import SignInAlt from '.';

describe('<SignInAlt /> spec', () => {
  it('renders the component', () => {
    const container = render(<SignInAlt />);
    expect(container).toMatchSnapshot();
  });
});
