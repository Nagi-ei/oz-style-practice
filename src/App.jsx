import styled from 'styled-components';
// import './App.scss';
import { contents } from './assets/data/data';
import Content from './components/Content';
import Header from './components/Header';
import { flexMixin } from './style/style';

export default function App() {
  return (
    <main>
      <Header />
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </main>
  );
}

const Section = styled.section`
  padding: 20px 40px;
  ${flexMixin({
    justify: 'center',
    align: 'center',
    wrap: 'wrap',
    gap: '20px',
  })}
`;
