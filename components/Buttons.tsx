import styled from "styled-components";
interface StyledProps {
  icon?: string;
  onClick: any;
  spaced?: boolean;
}
const Button = styled.button`
  padding: 11px 24px 12px;
  gap: 8px;
  width: calc(100% - 64px);
  background: #232328;
  border-radius: 100px;
  border: none;

  font-family: "Tofino";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  box-sizing: border-box;

  margin: 32px;

  &:before {
    content: url(${(props: StyledProps) => (props.icon ? props.icon : "")});
  }

  &:hover {
    border: 1px solid #cef458;
  }
`;
const Primary = styled(Button)`
  background: #cef458;
  justify-content: center;
  color: black;

  &:hover {
    border: 1px solid black;
  }
`;
const IconButton = styled(Button)`
  width: fit-content;
  margin: 0 30px 0 0;
  display: inline;
`;

const ProceedButton = styled(Button)`
  background-color: white;
  color: black;
  width: fit-content;

  margin: 0;

  &:before {
    content: "";
  }

  &:after {
    content: url(/assets/proceed-icon.svg);
  }
`;
interface GroupedButton {
  text: string;
  onClick: any;
  active: boolean;
}

interface GroupButtonProps {
  buttons: GroupedButton[];
  spaced?: boolean;
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: #232328;
`;
const PartButton = styled.a`
  padding: ${(props: StyledProps) => (props.spaced ? "12px 24px" : "5px 12px")};
  border-radius: 100px;
  max-width: 100%;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  &:hover {
    border: 1px solid #cef458;
    color: white;
  }
`;
const GroupButton = (props: GroupButtonProps) => {
  return (
    <Container>
      {props.buttons.map((btn, id) => {
        return (
          <PartButton
            key={id}
            onClick={btn.onClick}
            style={{
              display: "inline",
              border: btn.active ? "1px solid #CEF458" : "",
              color: btn.active ? "#FFF" : "",
              margin: "0px",
            }}
            spaced={props.spaced}
          >
            {btn.text}
          </PartButton>
        );
      })}
    </Container>
  );
};
export { Primary, IconButton, ProceedButton, GroupButton };
export default Button;
