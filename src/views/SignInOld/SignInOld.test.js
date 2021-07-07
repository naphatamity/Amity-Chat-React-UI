import { render } from '@testing-library/react';
import SignInOld from '.';

describe('<SignInOld /> spec', () => {
  it('renders the component', () => {
    const container = render(<SignInOld />);
    expect(container).toMatchSnapshot();
  });
});
