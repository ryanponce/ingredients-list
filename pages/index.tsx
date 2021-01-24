import styled from "styled-components";
import { FaHandPointLeft } from "react-icons/fa";

function Home() {
  return (
    <Wrapper>
      <FaHandPointLeft />
      <Title>Select an ingredient to learn more.</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryDimmed};
  margin-top: 50px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-left: 16px;
`;

export default Home;
