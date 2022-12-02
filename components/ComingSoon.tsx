import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

const Banner = styled.h1`
  font-family: Tofino;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
`;

const ComingSoon = () => {
  return (
    <Container>
      <Banner>Under construction. Check back soon!</Banner>
    </Container>
  );
};

export default ComingSoon;
