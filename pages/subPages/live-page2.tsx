import Page from "../../components/Page";
import { Slider } from "@mui/material";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  SectionCard,
  GridItem,
} from "../../components/Layout";
import Button, { Primary, GroupButton } from "../../components/Buttons";
import BetFooter from "../../components/BetFooter";
import { H3, P, ThemedSpan } from "../../components/Typography";
import bets, { IBet } from "../../const/bets";
interface PageProps {
  onBack: any;
  links: any;
  onProceed: any;
}
const Page2 = (props: PageProps) => {
  const [selectedRisk, setSelectedRisk] = useState<any>();
  const [returnX, setReturnX] = useState<number[]>([0, 20]);
  const returnRange = [2, 20];
  return (
    <>
      <Page>
        <Container>
          <Row>
            <Col sm={12} md={8}>
              <SectionCard
                links={props.links}
                title="Play"
                onBack={props.onBack}
              >
                <Container>
                  <Row>
                    <Col>
                      <Primary
                        onClick={props.onProceed}
                        style={{ margin: "0px", width: "100%" }}
                      >
                        Create your own bet
                      </Primary>
                    </Col>
                    <Col>
                      <Button
                        onClick={() => (window.location.href = "#")}
                        style={{
                          margin: "0px",
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        Find a matchup
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    {bets.map((bet: IBet, id: number) => {
                      return (
                        <div key={id}>
                          <H3 style={{ textAlign: "left", marginLeft: 0 }}>
                            {bet.teams[0]} vs {bet.teams[1]}: {bet.player}{" "}
                            {bet.event} {bet.timeframe}
                          </H3>
                          <P>{bet.comment}</P>
                          <BetFooter
                            user={bet.user}
                            wager={bet.wager}
                            win={bet.win}
                          />
                          <hr />
                        </div>
                      );
                    })}
                  </Row>
                </Container>
              </SectionCard>
            </Col>

            <Col style={{ padding: 0 }}>
              <SectionCard title="Customize feed">
                <div style={{ padding: 0 }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <H3 style={{ margin: 0 }}>MAX RISK</H3>
                    <H3 style={{ margin: 0 }}>
                      <ThemedSpan>${selectedRisk}</ThemedSpan>
                    </H3>
                  </div>
                  <br />
                  <GroupButton
                    buttons={[
                      {
                        text: "$5",
                        onClick: () => setSelectedRisk(5),
                        active: selectedRisk == 5,
                      },
                      {
                        text: "$10",
                        onClick: () => setSelectedRisk(10),
                        active: selectedRisk == 10,
                      },
                      {
                        text: "$15",
                        onClick: () => setSelectedRisk(15),
                        active: selectedRisk == 15,
                      },
                      {
                        text: "Custom",
                        onClick: () => setSelectedRisk("Custom"),
                        active:
                          selectedRisk != 5 &&
                          selectedRisk != 10 &&
                          selectedRisk != 15,
                      },
                    ]}
                  />
                  <br />
                  <Slider
                    value={parseInt(selectedRisk) ? parseInt(selectedRisk) : 0}
                    onChange={(ev, nv) => setSelectedRisk(nv)}
                    min={5}
                    max={50}
                    sx={{ color: "#cef458" }}
                  />
                  <hr />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <H3 style={{ margin: 0 }}>RETURN</H3>
                    <H3 style={{ margin: 0 }}>
                      <ThemedSpan>
                        {returnX[0]}x - {returnX[1]}x
                      </ThemedSpan>
                    </H3>
                  </div>
                  <br />
                  <Slider
                    value={returnX}
                    onChange={(ev, nv: number | number[]) => {
                      setReturnX(nv as number[]);
                    }}
                    min={returnRange[0]}
                    max={returnRange[1]}
                    sx={{ color: "#cef458" }}
                  />
                  <hr />
                  <H3 style={{ margin: 0, textAlign: "left" }}>SPORTS</H3>
                  <Container>
                    <Row>
                      <GridItem text="ALL" />
                      <GridItem text="MLB" />
                    </Row>
                    <Row>
                      <GridItem text="SOCCER" />
                      <GridItem text="NBA" />
                    </Row>
                  </Container>
                </div>
              </SectionCard>
            </Col>
          </Row>
        </Container>
      </Page>
    </>
  );
};

export default Page2;
