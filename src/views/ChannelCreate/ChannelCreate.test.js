import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ChannelCreate from '.';

describe('<ChannelCreate /> spec', () => {
  it('renders the component', () => {
    const container = render(
      <Router>
        <ChannelCreate />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
