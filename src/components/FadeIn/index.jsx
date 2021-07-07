import { FadeInContainer } from './styles';

const FadeIn = ({ duration = 300, delay = 0, children, ...delegated }) => {
  return (
    <FadeInContainer
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </FadeInContainer>
  );
};

export default FadeIn;
