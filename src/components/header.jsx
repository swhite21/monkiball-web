import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <Title>Monkiball</Title>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #000e35;
  display: flex;
  flex: 1;
  padding: 0.8rem;
`;
const Title = styled.h1`
  color: white;
  font-size: 1.3rem;
  padding: 0;
  margin: 0;
`;
