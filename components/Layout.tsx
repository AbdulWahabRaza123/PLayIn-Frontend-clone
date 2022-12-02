import { ReactElement } from "react";
import styled from "styled-components";
import {
  Container as ContainerB,
  Row as BRow,
  Col as BCol,
} from "react-bootstrap";
import Link from "next/link";
interface StyledProps {
  bgImage?: string;
  bgImage2?: string;
}
const BContainer = styled(ContainerB)`
  padding: 0px;
`;

const Container = styled.div`
  background-color: #151517;
  border-radius: 20px;
  margin: 30px;
`;
const HeroContainer = styled(Container)`
  padding: 20px 40px;
  background-image: url(${(props: StyledProps) =>
      props.bgImage ? props.bgImage : ""}),
    url(${(props: StyledProps) => (props.bgImage2 ? props.bgImage2 : "")});
  background-repeat: no-repeat;
  background-position: left top, right center;
`;

const Title = styled.h1`
  font-family: Tofino;
  font-style: normal;
  font-weight: 500;
  font-size: 54px;
  max-width: 500px;
`;
interface HeroSectionProps {
  title: string;
}

const HeroSectionCard = (props: HeroSectionProps) => {
  return (
    <HeroContainer
      bgImage="/assets/dots-grid.svg"
      bgImage2="/assets/banner-characters.svg"
    >
      <Title>{props.title}</Title>
    </HeroContainer>
  );
};

// Section Card
interface SectionCardLink {
  text: string;
  onClick: any;
}

interface SectionCardProps {
  children: ReactElement;
  title?: string;
  onBack?: any;
  links?: Array<SectionCardLink>;
}
const SectionHeader = styled.div`
  border-bottom: 1px solid rgba(40, 40, 40, 0.7);
  margin-bottom: 20px;
`;
const SectionContainer = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SectionTitle = styled.h1`
  font-family: Tofino;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
  display: inline;
`;
const SectionHeaderLink = styled(Link)`
  font-family: "Tofino";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-left: 30px;
  color: rgba(255, 255, 255, 0.8);
`;

const SectionCard = (props: SectionCardProps) => {
  return (
    <Container>
      <SectionHeader>
        <SectionContainer>
          <div>
            {props.onBack ? (
              <img
                src="/assets/left-arrow.svg"
                onClick={props.onBack}
                style={{ cursor: "pointer", marginRight: "20px" }}
              />
            ) : null}
            {props.title ? <SectionTitle>{props.title}</SectionTitle> : null}
          </div>
          <div>
            {props.links
              ? props.links.map((linkElement, id) => {
                  return (
                    <SectionHeaderLink
                      key={id}
                      href="#"
                      onClick={linkElement.onClick}
                    >
                      {linkElement.text}
                    </SectionHeaderLink>
                  );
                })
              : null}
          </div>
        </SectionContainer>
      </SectionHeader>
      <SectionContainer>{props.children}</SectionContainer>
    </Container>
  );
};
// Info Card
interface InfoTileProps {
  image?: string;
  title?: string;
  text?: string;
  onClick?: any;
}
const TileContainer = styled(Container)`
  padding: 20px;
  margin: 20px 0px;
  background: #232328;
  display: flex;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;
const TileSection = styled.div`
  margin: 0px 10px;
`;
const TileHeading = styled.h2`
  font-family: Tofino;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
`;

const TileText = styled.p`
  font-family: Tofino;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #a0a1b1;
`;
const InfoTile = (props: InfoTileProps) => {
  return (
    <TileContainer onClick={props.onClick}>
      <TileSection>
        <img src={props.image} />
      </TileSection>
      <TileSection>
        <TileHeading>{props.title}</TileHeading>
        <TileText>{props.text}</TileText>
      </TileSection>
      {props.onClick ? (
        <TileSection style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/right-arrow.svg" />
        </TileSection>
      ) : null}
    </TileContainer>
  );
};

//Grid
interface GridItemProps {
  text?: string;
  icon?: string;
}

const GridContainer = styled(BCol)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  background: #232328;
  border-radius: 20px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid #cef458;
  }
`;

const GridItem = (props: GridItemProps) => {
  return <GridContainer>{props.text}</GridContainer>;
};
export {
  BContainer as Container,
  GridItem,
  HeroSectionCard,
  SectionCard,
  InfoTile,
  BRow as Row,
  BCol as Col,
};
