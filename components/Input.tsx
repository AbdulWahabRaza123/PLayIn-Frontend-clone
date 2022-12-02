import styled from "styled-components";

interface StyledProps {
  icon?: string;
}

const Textbox = styled.input`
  padding: 11px 24px 12px;
  gap: 8px;
  width: calc(100% - 64px);
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

  background: url(${(props: StyledProps) => (props.icon ? props.icon : "")})
      no-repeat scroll 20px center,
    #232328;
  padding-left: 60px;

  &:hover {
    border: 1px solid #cef458;
  }
`;
const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 24px 12px;
  border-radius: 100px;
  border: 0px;
  font-family: "Tofino";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  width: 256px;

  background: url(${(props: StyledProps) => (props.icon ? props.icon : "")})
      no-repeat scroll 90% center,
    #232328;

  &:hover {
    border: 1px solid #cef458;
  }
`;

const Dropdown = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 24px 12px;
  border-radius: 100px;
  border: 0px;
  font-family: "Tofino";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  width: 256px;
  -webkit-appearance: none;
  -moz-appearance: none;

  background: url(/assets/down-arrow.svg) no-repeat scroll 90% center, #232328;

  &:hover {
    border: 1px solid #cef458;
  }
`;

export { Textbox, Input, Dropdown };
