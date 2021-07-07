import { render } from '@testing-library/react';
import SignIn from '.';

describe('<SignIn /> spec', () => {
  it('renders the component', () => {
    const container = render(<SignIn />);
    expect(container).toMatchSnapshot();
  });
});
