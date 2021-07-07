import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Channel } from '.';

describe('<Channel /> spec', () => {
  it('renders the component', () => {
    const container = render(
      <Router>
        <Channel />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
