import styled from "styled-components/macro";
import Header from "../Header/Header";
import Links from "../Links/Links";
import SocialBar from "../SocialBar/SocialBar";

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Links />
      <SocialBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100vw;

  @media (min-width: 500px) {
    max-width: 500px;
  }
`;
