import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChannelDetails } from '.';

const channelId = 'mock-channel-id';

describe('<ChannelDetails /> spec', () => {
  it('renders the component', () => {
    const container = render(
      <Router>
        <ChannelDetails channelId={channelId} />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
