import styled from 'styled-components';

export default function Content({ content }) {
  return (
    <ContentContainer>
      <Img src={content.img} alt={content.title} />
      <Span>모집중</Span>
      <Div>{content.title}</Div>
      <P>{content.subtitle}</P>
    </ContentContainer>
  );
}

const TAG_COLOR = `#d7fa00`;
const GRAY = `rgb(160, 160, 160)`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const Img = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 3px;
  min-height: 225px;
`;

const Span = styled.span`
  color: ${TAG_COLOR};
  border: 1px solid ${TAG_COLOR};
  padding: 4px 5px;
  border-radius: 3px;
  font-size: 12px;
`;

const Div = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const P = styled.p`
  color: ${GRAY};
  font-size: 12px;
`;
