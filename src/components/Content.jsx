import styled from 'styled-components';
import { flexMixin, fontMixin, GRAY, TAG_COLOR } from '../style/style';

export default function Content({ content }) {
  return (
    <ContentContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  ${flexMixin({ direction: 'column', align: 'flex-start', gap: '5px' })}

  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }

  span {
    ${fontMixin({})}
    color: ${TAG_COLOR};
    border: 1px solid ${TAG_COLOR};
    padding: 4px 5px;
    border-radius: 3px;
  }

  div {
    ${fontMixin({ size: '18px', weight: '600' })}
  }

  p {
    ${fontMixin({})}
    color: ${GRAY};
  }
`;
