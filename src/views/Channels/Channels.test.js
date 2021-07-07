import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Channels from '.';

describe('<Channels /> spec', () => {
  it('renders the component', () => {
    const container = render(
      <Router>
        <Channels />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
