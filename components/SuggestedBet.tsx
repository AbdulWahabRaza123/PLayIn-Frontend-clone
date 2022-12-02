import styled from "styled-components";
import { useEffect, useState } from "react";
import { SectionCard } from "./Layout";
import { IBet } from "../const/bets";
import { P } from "./Typography";
import OddsBar from "./OddsBar";
interface SuggestedBetsProps {
  allBets: Array<IBet>;
  currentBet?: IBet;
}

const Container = styled.div`
  padding: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(40, 40, 40, 0.7);
`;
const SuggestedBets = (props: SuggestedBetsProps) => {
  const [matchingBets, setMatchingBets] = useState<Array<IBet>>();

  useEffect(() => {
    setMatchingBets(
      props.allBets.filter((singleBet) => {
        return (
          JSON.stringify(singleBet.teams) ==
          JSON.stringify(props.currentBet?.teams)
        );
      })
    );
  }, [props.allBets, props.currentBet]);

  return (
    <SectionCard title="Similar Bets">
      <div style={{ width: "100%" }}>
        {matchingBets?.map((singleBet, id) => {
          return (
            <Container key={id}>
              <P style={{ color: "white" }}>
                @{singleBet.user} bet ${singleBet.wager} to win ${singleBet.win}
              </P>
              <P style={{ fontSize: "10pt" }}>
                {singleBet.teams[0]} vs {singleBet.teams[1]}: {singleBet.player}{" "}
                {singleBet.event}
              </P>
              <OddsBar
                event={`Bet $${singleBet.win} to win $${singleBet.wager}`}
                odds={(Math.random() * 100).toFixed() + "%"}
              />
            </Container>
          );
        })}
      </div>
    </SectionCard>
  );
};

export default SuggestedBets;
