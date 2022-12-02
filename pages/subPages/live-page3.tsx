import Page from "../../components/Page";
import { Input, Dropdown } from "../../components/Input";
import { Container, Row, Col, SectionCard } from "../../components/Layout";
import teams from "../../const/teams";
import TeamCard from "../../components/TeamCards";
import { IBet } from "../../const/bets";

interface PageProps {
  onBack: any;
  onProceed: any;
  customBet?: IBet;
  setCustomBet: any;
}
const Page3 = (props: PageProps) => {
  const proceed = (selectedTeams: Array<any>) => {
    props.setCustomBet({
      ...props.customBet,
      teams: [selectedTeams[0].firstname, selectedTeams[1].firstname],
    });
    props.onProceed();
  };
  return (
    <>
      <Page>
        <Container>
          <Row>
            <Col sm={12} md={8}>
              <SectionCard title="Pick the match" onBack={props.onBack}>
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginBottom: "40px",
                    }}
                  >
                    <Input
                      icon="/assets/magnifier-icon.svg"
                      placeholder="Search matchups"
                    />
                    <Dropdown>
                      <option>Featured</option>
                      <option>1</option>
                    </Dropdown>
                  </div>
                  <div>
                    {teams.map((team, id) => {
                      return (
                        <TeamCard
                          key={id}
                          team1={team.team1}
                          team2={team.team2}
                          onProceed={() => proceed([team.team1, team.team2])}
                        />
                      );
                    })}
                  </div>
                </div>
              </SectionCard>
            </Col>
          </Row>
        </Container>
      </Page>
    </>
  );
};
export default Page3;
