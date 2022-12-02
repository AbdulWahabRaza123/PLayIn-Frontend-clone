import styled from "styled-components";
import { H3 } from "./Typography";

interface StyledProps {
  color?: string;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(40, 40, 40, 1);
  padding-bottom: 20px;
  margin-bottom: 10px;
`;

const TeamName = styled(H3)`
  text-align: left;
  border-left: 5px solid ${(props: StyledProps) => props.color};
  padding-left: 20px;
  margin-bottom: 10px;
`;

const SecondName = styled.span`
  font-style: italic;
  opacity: 0.7;
`;

interface ITeam {
  accent: string;
  firstname: string;
  lastname: string;
}

interface CardProps {
  team1: ITeam;
  team2: ITeam;
  onProceed: any;
}

const TeamCard = (props: CardProps) => {
  return (
    <Container>
      <div>
        <TeamName color={props.team1.accent}>
          {props.team1.firstname}{" "}
          <SecondName>{props.team1.lastname}</SecondName>
        </TeamName>
        <TeamName color={props.team2.accent}>
          {props.team2.firstname}{" "}
          <SecondName>{props.team2.lastname}</SecondName>
        </TeamName>
      </div>
      <img
        src="/assets/right-arrow.svg"
        style={{
          cursor: "pointer",
          width: "40px",
          height: "40px",
        }}
        onClick={props.onProceed}
      />
    </Container>
  );
};

export default TeamCard;
