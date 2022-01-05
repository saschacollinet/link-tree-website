import styled from "styled-components/macro";
import Avatar from "../../assets/images/avatar.png";

export default function Header() {
  return (
    <Wrapper>
      <ProfilePicture src={Avatar} width="100" height="100" />
      <Heading>
        <Headline>Hi, I'm Sascha!</Headline>
        <Subline>I'm a web developer!</Subline>
        <p>Let's connect!</p>
      </Heading>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
`;

const ProfilePicture = styled.img`
  width: 120px;
  height: auto;
  border: 3px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 25px;
  padding: 1rem;
  border: 3px solid rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  width: 95%;
  color: #fff;
`;

const Headline = styled.h1`
  font-size: 1.8rem;
`;

const Subline = styled.h2`
  font-size: 1.4rem;
`;
