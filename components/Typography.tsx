import styled from "styled-components";
interface StyledProps {
  centered?: boolean;
  clickable?: boolean;
}
const P = styled.p`
  font-family: Tofino;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #a0a1b1;
  text-align: ${(props: StyledProps) => (props.centered ? "center" : "")};
`;
const ThemedSpan = styled(P)`
  display: inline;
  color: #cef458;
  cursor: ${(props: StyledProps) => (props.clickable ? "pointer" : "")};
`;
const HBase = styled.h1`
  font-family: Tofino;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  margin: 30px;
`;
const H2 = styled(HBase)`
  font-size: 32px;
  line-height: 38px;
`;
const H3 = styled(HBase)`
  font-size: 20px;
  line-height: 24px;
`;
const Em = styled(P)`
  font-style: italic;
`;
export { P, ThemedSpan, H3, H2, Em };
