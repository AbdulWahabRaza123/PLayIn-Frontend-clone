import { SectionCard } from "../../components/Layout";
import { H3, P } from "../../components/Typography";
import { Container, Row, Col } from "../../components/Layout";
import Page from "../../components/Page";
import { parseFutureMilliseconds } from "../../utils/time";
import { IconButton, ProceedButton } from "../../components/Buttons";
import PlayFooter from "../../components/PLayFooter";
import matches from "../../components/../const/matches";
import activity from "../../components/../const/activity";
import OddsBar from "../../components/OddsBar";
interface PageProps {
  onBack: any;
  links: any;
}
const LivePage1 = (props: PageProps) => {
  return (
    <>
      <Page>
        <Container>
          <Row>
            <Col sm={12} md={8}>
              <SectionCard
                title="Play"
                onBack={props.onBack}
                links={props.links}
              >
                <div>
                  {matches.map((match, id) => {
                    return (
                      <div key={id}>
                        <img src={match.banner} style={{ width: "100%" }} />
                        <br />
                        <H3 style={{ textAlign: "left", marginLeft: "0px" }}>
                          {match.teams[0]}{" "}
                          {match.teams[1] ? " vs " + match.teams[1] : ""}
                        </H3>
                        <P>
                          Game starts in{" "}
                          {parseFutureMilliseconds(match.startsAt - Date.now())}
                        </P>
                        <PlayFooter>
                          <>
                            <div>
                              <IconButton
                                icon="/assets/message-icon.svg"
                                onClick={() => (window.location.href = "#")}
                              >
                                {match.messageCount}
                              </IconButton>
                              <IconButton
                                icon="/assets/likes-icon.svg"
                                onClick={() => (window.location.href = "#")}
                              >
                                {match.interests}
                              </IconButton>
                            </div>
                            <ProceedButton
                              onClick={() => (window.location.href = "#")}
                            >
                              Join room
                            </ProceedButton>
                          </>
                        </PlayFooter>
                        <br />
                        <hr />
                        <br />
                      </div>
                    );
                  })}
                </div>
              </SectionCard>
            </Col>
            <Col>
              <SectionCard title="Activity">
                <div>
                  {activity.map((act, id) => {
                    const imagePath = `/assets/user-${act.user}.svg`;
                    return (
                      <div key={id}>
                        <img src={imagePath} />
                        <br />
                        <br />
                        <P style={{ color: "white" }}>
                          @{act.user} {act.activity ? act.activity : act.bet}
                        </P>
                        <P>{act.comment}</P>
                        {act.odds ? (
                          <OddsBar
                            event={act.odds.event}
                            odds={act.odds.percent}
                          />
                        ) : null}
                        <br />
                        <hr />
                        <br />
                      </div>
                    );
                  })}
                </div>
              </SectionCard>
            </Col>
          </Row>
        </Container>
      </Page>
    </>
  );
};

export default LivePage1;
