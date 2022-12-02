import { ReactElement } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface FooterProps {
  children: ReactElement;
}

const PlayFooter = (props: FooterProps) => {
  return <Container>{props.children}</Container>;
};

export default PlayFooter;
