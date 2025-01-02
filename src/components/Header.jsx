import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <Ul>
        <Li>로그인</Li>
        <Li>회원가입</Li>
        <Li>내클래스</Li>
      </Ul>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 20px 20px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Li = styled.li`
  list-style: none;
  font-size: 16px;
  font-weight: 400;
`;
