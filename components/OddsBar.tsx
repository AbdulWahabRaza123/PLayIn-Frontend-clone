import styled from "styled-components";
import { P, ThemedSpan } from "./Typography";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  gap: 8px;
  width: 100%;
  background: #232328;
  border-radius: 100px;
  cursor: pointer;

  &: hover {
    border: 1px solid #cef458;
  }
`;

interface OddsProps {
  event: string;
  odds: string;
}

const OddsBar = (props: OddsProps) => {
  return (
    <Container>
      <P style={{ fontSize: "10pt" }}>{props.event}</P>
      <ThemedSpan style={{ fontSize: "10pt" }}>{props.odds}</ThemedSpan>
    </Container>
  );
};

export default OddsBar;
