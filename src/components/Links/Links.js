import styled from "styled-components/macro";

export default function Links() {
  return (
    <Wrapper>
      <Card href="#">Check my Portfolio</Card>
      <Card href="#">Read my Blog</Card>
      <Card href="#">Watch me code</Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Card = styled.a`
  transition: all 0.5s ease;
  text-align: center;
  width: 95%;
  color: #fff;
  text-decoration: none;
  border: 3px solid rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    color: #000;
  }
`;
