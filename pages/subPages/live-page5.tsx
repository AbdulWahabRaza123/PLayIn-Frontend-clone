import { useState } from "react";
import Page from "../../components/Page";
import { Container, Row, Col, SectionCard } from "../../components/Layout";
import Button, { GroupButton } from "../../components/Buttons";
import { P } from "../../components/Typography";
import RadioSelect from "../../components/RadioSelect";
import all_bets, { IBet } from "../../const/bets";
import timeframes from "../../const/timeframes";
import SuggestedBets from "../../components/SuggestedBet";

interface PageProps {
  onBack: any;
  onProceed: any;
  customBet?: IBet;
  setCustomBet: any;
}
const Page5 = (props: PageProps) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("");

  const proceed = () => {
    props.setCustomBet({
      ...props.customBet,
      timeframe: selectedTimeframe,
    });
    props.onProceed();
  };
  return (
    <>
      <Page>
        <Container>
          <Row>
            <Col sm={12} md={8}>
              <SectionCard title="Choose a timeframe" onBack={props.onBack}>
                <div style={{ width: "100%" }}>
                  <div>
                    {timeframes.map((time, id) => {
                      return (
                        <RadioSelect
                          onSelect={() => setSelectedTimeframe(time)}
                          selected={selectedTimeframe == time}
                          text={time}
                          key={id}
                        />
                      );
                    })}
                  </div>
                </div>
              </SectionCard>
            </Col>
            <Col style={{ padding: 0 }}>
              <SectionCard title="Build your bet">
                <div style={{ width: "100%" }}>
                  <P style={{ textAlign: "left", marginLeft: 0 }}>
                    NHL: {props.customBet?.teams[0]} vs{" "}
                    {props.customBet?.teams[1]}
                    <br />
                    <br />
                    {props.customBet?.selectedTeam == props.customBet?.player
                      ? props.customBet?.selectedTeam + " will "
                      : props.customBet?.selectedTeam +
                        "'s " +
                        props.customBet?.player +
                        " will have "}
                    {props.customBet?.event + " "}
                    {selectedTimeframe}
                  </P>
                  <Button
                    onClick={proceed}
                    style={{
                      justifyContent: "center",
                      margin: "0px",
                      width: "100%",
                    }}
                    disabled={selectedTimeframe == ""}
                  >
                    Continue
                  </Button>
                </div>
              </SectionCard>
              <SuggestedBets currentBet={props.customBet} allBets={all_bets} />
            </Col>
          </Row>
        </Container>
      </Page>
    </>
  );
};
export default Page5;
