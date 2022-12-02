import { useState } from "react";
import { useRouter } from "next/router";
import Page, { UserData } from "../components/Page";
import Button, { Primary } from "../components/Buttons";
import Modal from "../components/Model";
import { P, ThemedSpan, H3, H2, Em } from "../components/Typography";
import { Textbox } from "../components/Input";
import {
  Container,
  HeroSectionCard,
  SectionCard,
  Row,
  Col,
  InfoTile,
} from "../components/Layout";
const SectionCardData = [
  {
    image: "/assets/trending-tile.svg",
    title: "Community bets",
    text: "Choose an event and a bet type like game winner, most points, or over under points.  Bet on the current trend for bets.",
  },
  {
    image: "/assets/head2head-tile.svg",
    title: "Head to head bets",
    text: "Bet the way you want! Set your Wager/Return and create a custom bet, or simply take a bet against another player.",
  },
];
const Home = () => {
  const router = useRouter();
  const [signUpOpened, setSignUpOpened] = useState<number>(-1);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const completeSignUp = () => {
    const temp_data: UserData = {
      name: username,
      balances: {
        eth: 0,
        plex: 0,
        usd: 0,
      },
    };
    localStorage.setItem("playInTestUserData", JSON.stringify(temp_data));
    window.location.reload();
  };

  return (
    <Page onSignUpModalOpen={() => setSignUpOpened(0)}>
      <>
        <HeroSectionCard title="Life is a game, lets keep PlayIn" />
        <SectionCard title="How do you want to play?">
          <Container>
            <Row>
              {SectionCardData.map((val, index) => {
                return (
                  <>
                    <Col key={index}>
                      <InfoTile
                        image={val.image}
                        title={val.title}
                        text={val.text}
                        onClick={() => router.push("/Live")}
                      />
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
        </SectionCard>
        <Container style={{ padding: "0px" }}>
          <Row>
            <Col sm={12} md={8}>
              <SectionCard
                title="Leaderboard"
                links={[
                  {
                    text: "See all",
                    onClick: () => (window.location.href = "#"),
                  },
                ]}
              >
                <Em>Coming soon...</Em>
              </SectionCard>
            </Col>
            <Col sm={12} md={4}>
              <SectionCard title="My badges">
                <P>
                  Pick a bet to earn your first badge. Level up by betting and
                  wining.
                </P>
              </SectionCard>
            </Col>
          </Row>
        </Container>

        {/** Sign up modal */}
        {signUpOpened == 0 && (
          <Modal title="Sign up" onClose={() => setSignUpOpened(-1)}>
            <>
              <Button
                icon="/assets/email-icon.svg"
                onClick={() => setSignUpOpened(signUpOpened + 1)}
              >
                Sign up with email
              </Button>
              <Button
                icon="/assets/apple-icon.svg"
                onClick={() => setSignUpOpened(signUpOpened + 1)}
              >
                Sign up with Apple
              </Button>
              <Button
                icon="/assets/google-icon.svg"
                onClick={() => setSignUpOpened(signUpOpened + 1)}
              >
                Sign up with Google
              </Button>
              <P centered>
                Already have an account?{" "}
                <ThemedSpan clickable>Sign in</ThemedSpan>
              </P>
            </>
          </Modal>
        )}
        {signUpOpened == 1 && (
          <Modal title="Sign up" onClose={() => setSignUpOpened(-1)}>
            <>
              <Textbox
                icon="/assets/email-icon.svg"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <Textbox
                icon="/assets/at-icon.svg"
                type="text"
                placeholder="Create user name"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
              />
              <Textbox
                icon="/assets/lock-icon.svg"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <Primary onClick={() => setSignUpOpened(signUpOpened + 1)}>
                Sign up
              </Primary>
              <P centered>
                Already have an account?{" "}
                <ThemedSpan clickable>Sign in</ThemedSpan>
              </P>
            </>
          </Modal>
        )}
        {signUpOpened == 2 && (
          <Modal title="Sign up" onClose={() => setSignUpOpened(-1)}>
            <Container style={{ textAlign: "center" }}>
              <img
                src="/assets/email-icon.svg"
                style={{ width: "54px", height: "54px", margin: "30px" }}
              />
              <H3>
                We sent a confirmation email to
                <br />
                <em>{email}</em>
              </H3>
              <P centered>
                Didn&apos;t get your confirmation email?
                <br />
                Check your spam folder or{" "}
                <ThemedSpan
                  clickable
                  onClick={() => setSignUpOpened(signUpOpened + 1)}
                >
                  try again.
                </ThemedSpan>
              </P>
            </Container>
          </Modal>
        )}
        {signUpOpened == 3 && (
          <Modal>
            <Container style={{ textAlign: "center", padding: "48px" }}>
              <H2>Your email is confirmed!</H2>
              <img
                src="/assets/success-icon.svg"
                style={{ width: "54px", height: "54px", margin: "30px" }}
              />
              <P centered>You have successfully set up email protection</P>
              <Primary onClick={completeSignUp} style={{ marginBottom: "0px" }}>
                Continue
              </Primary>
            </Container>
          </Modal>
        )}
      </>
    </Page>
  );
};
export default Home;
