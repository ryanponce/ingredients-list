import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Serif>Essential</Serif> Nutients
    </Wrapper>
  );
}

const Wrapper = styled.header`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  grid-area: header;
`;

const Serif = styled.span`
  font-family: ${({ theme }) => theme.fontFamilies.serif};
  font-style: italic;
`;

export { Header };
