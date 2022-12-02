import styled from "styled-components";
import { H3 } from "./Typography";

interface StyledProps {
  checked?: boolean;
}

const Container = styled.div`
  border-top: 2px solid #282828;
  padding: 32px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const Text = styled(H3)`
  text-align: left;
  margin: 0px;
`;

const SelectorBG = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 100%;
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectorFG = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  border: ${(props: StyledProps) => (props.checked ? "0px" : "1px solid grey")};
  background: ${(props: StyledProps) =>
      props.checked ? "url('/assets/green-check.svg')" : ""}
    no-repeat center;
`;

interface RadioProps {
  text: string;
  onSelect: any;
  selected: boolean;
}
const RadioSelect = (props: RadioProps) => {
  return (
    <Container onClick={props.onSelect}>
      <Text>{props.text}</Text>
      <SelectorBG>
        <SelectorFG checked={props.selected} />
      </SelectorBG>
    </Container>
  );
};

export default RadioSelect;
