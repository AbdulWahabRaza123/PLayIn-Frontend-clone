import { useState } from "react";
import Page from "../../components/Page";
import { Container, Row, Col, SectionCard } from "../../components/Layout";
import Button, { GroupButton } from "../../components/Buttons";
import { P } from "../../components/Typography";
import RadioSelect from "../../components/RadioSelect";
import all_bets, { IBet } from "../../const/bets";
import { team_events, player_events } from "../../const/events";
import SuggestedBets from "../../components/SuggestedBet";
interface PageProps {
  onBack: any;
  onProceed: any;
  customBet?: IBet;
  setCustomBet: any;
}
const Page4 = (props: PageProps) => {
  const [selectedTeam, setSelectedTeam] = useState<number>(0);
  const [selectedScope, setSelectedScope] = useState<string>("Team bets");
  const [selectedPlayer, setSelectedPlayer] = useState<string>("");
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const proceed = () => {
    props.setCustomBet({
      ...props.customBet,
      selectedTeam: props.customBet?.teams[selectedTeam],
      player: selectedScope == "Team bets" ? selectedTeam : selectedPlayer,
      event: selectedEvent,
    });
    props.onProceed();
  };
  return (
    <Page>
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <SectionCard title="Choose the event" onBack={props.onBack}>
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "40px",
                  }}
                >
                  <GroupButton
                    buttons={[
                      {
                        text: props.customBet?.teams[0] || "Undefined",
                        onClick: () => setSelectedTeam(0),
                        active: selectedTeam == 0,
                      },
                      {
                        text: props.customBet?.teams[1] || "Undefined",
                        onClick: () => setSelectedTeam(1),
                        active: selectedTeam == 1,
                      },
                    ]}
                    spaced={true}
                  />
                  <GroupButton
                    buttons={[
                      {
                        text: "Team bets",
                        onClick: () => {
                          setSelectedScope("Team bets");
                          setSelectedPlayer("");
                          setSelectedEvent("");
                        },
                        active: selectedScope == "Team bets",
                      },
                      {
                        text: "Player bets",
                        onClick: () => {
                          setSelectedScope("Player bets");
                          setSelectedPlayer("");
                          setSelectedEvent("");
                        },
                        active: selectedScope == "Player bets",
                      },
                    ]}
                    spaced={true}
                  />
                </div>
                <div>
                  {selectedScope == "Team bets" &&
                    team_events.map((event, id) => {
                      return (
                        <RadioSelect
                          onSelect={() => setSelectedEvent(event)}
                          selected={selectedEvent == event}
                          text={event}
                          key={id}
                        />
                      );
                    })}

                  {selectedScope == "Player bets" &&
                    selectedPlayer == "" &&
                    props.customBet?.teams[selectedTeam] &&
                    // @ts-ignore
                    players[props.customBet?.teams[selectedTeam]].map(
                      (player_name: any, id: any) => {
                        return (
                          <RadioSelect
                            onSelect={() => setSelectedPlayer(player_name)}
                            selected={selectedPlayer == player_name}
                            text={player_name}
                            key={id}
                          />
                        );
                      }
                    )}

                  {selectedScope == "Player bets" &&
                    selectedPlayer != "" &&
                    player_events.map((event: any, id: any) => {
                      return (
                        <RadioSelect
                          onSelect={() => setSelectedEvent(event)}
                          selected={selectedEvent == event}
                          text={event}
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
                  {selectedScope == "Team bets"
                    ? props.customBet?.teams[selectedTeam] + " will "
                    : props.customBet?.teams[selectedTeam] + "'s "}
                  {selectedPlayer != "" ? selectedPlayer + " will have " : ""}
                  {selectedEvent !== "" ? selectedEvent : ""}
                </P>
                <Button
                  onClick={proceed}
                  style={{
                    justifyContent: "center",
                    margin: "0px",
                    width: "100%",
                  }}
                  disabled={selectedEvent == ""}
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
  );
};
export default Page4;
