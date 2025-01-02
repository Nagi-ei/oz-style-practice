import styled from 'styled-components';
import { flexMixin, fontMixin } from '../style/style';

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <ul>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 20px 20px;
  background-color: black;
  ${flexMixin({ justify: 'space-between', align: 'center' })}

  ul {
    ${flexMixin({ justify: 'center', align: 'center', gap: '20px' })}

    li {
      ${fontMixin({ size: '16px', weight: '400' })}
      list-style: none;
    }
  }
`;
