import styled from "styled-components";
import { P } from "./Typography";
import OddsBar from "./OddsBar";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface FooterProps {
  user: string;
  wager: number;
  win: number;
}

const BetFooter = (props: FooterProps) => {
  return (
    <Container>
      <div style={{ width: "150%" }}>
        <img src={"/assets/user-" + props.user + ".svg"} />
        <P
          style={{
            color: "white",
            display: "inline",
            marginLeft: "20px",
            fontSize: "10pt",
          }}
        >
          @{props.user} bet ${props.wager} to win ${props.win}
        </P>
      </div>
      <OddsBar
        event={"Bet $" + props.win + " to win $" + props.wager}
        odds={(props.wager / props.win).toFixed(0) + "x"}
      />
    </Container>
  );
};

export default BetFooter;
