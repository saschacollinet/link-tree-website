import styled from "styled-components/macro";
import * as Icon from "react-feather";

export default function SocialBar() {
  return (
    <Wrapper>
      <a
        href="https://github.com/saschacollinet"
        target="_blank"
        rel="noreferrer"
      >
        <Icon.GitHub color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/sascha-collinet/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon.Linkedin color="white" />
      </a>
      <a
        href="https://twitter.com/CollinetSascha"
        target="_blank"
        rel="noreferrer"
      >
        <Icon.Twitter color="white" />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
