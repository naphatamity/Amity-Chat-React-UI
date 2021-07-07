import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/pro-regular-svg-icons';
import { faUserFriends, faPen } from '@fortawesome/pro-solid-svg-icons';
import { useParams, Link } from 'react-router-dom';
import {
  Wrapper,
  DetailsMenuWrapper,
  DetailsMenuRowStyled,
  DetailsMenuList,
  IconWrapperBg,
  Title,
  TitleBar,
} from './styles';
import ChannelHeader from '../../components/ChannelHeader';

export default () => {
  const { channelId } = useParams();

  return <ChannelDetails channelId={channelId} />;
};

export function ChannelDetails({ channelId }) {
  return (
    <Wrapper>
      <ChannelHeader simple displayName="Channel Details" channelId={channelId}>
        <Link to={`/channel/${channelId}`}>
          <FaIcon icon={faChevronLeft} style={{ marginRight: 8 }} />
        </Link>

        <TitleBar>
          <Title>Channel Details</Title>
        </TitleBar>
      </ChannelHeader>

      <DetailsMenuWrapper>
        <DetailsMenuList>
          <DetailsMenuRow>
            <div>Report User</div>
          </DetailsMenuRow>
          <DetailsMenuRow>
            <div className="alert">Leave Chat</div>
          </DetailsMenuRow>
          <DetailsMenuRow>
            <div>
              <IconWrapperBg>
                <FaIcon icon={faPen} />
              </IconWrapperBg>
              Group Profile
            </div>
            <div>
              <FaIcon icon={faChevronRight} />
            </div>
          </DetailsMenuRow>
          <DetailsMenuRow>
            <div>
              <IconWrapperBg>
                <FaIcon icon={faUserFriends} />
              </IconWrapperBg>
              Members
            </div>
            <div>
              <span>5</span>
              <FaIcon icon={faChevronRight} style={{ marginLeft: 8 }} />
            </div>
          </DetailsMenuRow>
        </DetailsMenuList>
      </DetailsMenuWrapper>
    </Wrapper>
  );
}

export function DetailsMenuRow({ children }) {
  return <DetailsMenuRowStyled>{children}</DetailsMenuRowStyled>;
}
