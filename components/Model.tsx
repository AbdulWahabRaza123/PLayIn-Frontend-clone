import { ReactElement } from "react";
import styled from "styled-components";

interface ModalProps {
  wide?: boolean;
  title?: string;
  onClose?: any;
  children: ReactElement;
}

const Wrapper = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(10, 10, 10, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  border-radius: 20px;
  background: #151517;
  min-width: 520px;
  position: fixed;
`;

const Header = styled.div`
  padding: 24.5px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(40, 40, 40, 0.7);
  height: 72px;
`;

const Title = styled.h2`
  font-family: Tofino;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`;

const CloseIcon = styled.img`
  cursor: pointer;
`;

const Modal = (props: ModalProps) => {
  return (
    // wrapper is using to keep it in absolte postion for doing it in center
    <Wrapper>
      {/* container is using to put the blocks in column position  */}
      <Container>
        {props.title || props.onClose ? (
          <Header>
            {props.title ? <Title>{props.title}</Title> : null}
            {props.onClose ? (
              <CloseIcon src="/assets/close-icon.svg" onClick={props.onClose} />
            ) : null}
          </Header>
        ) : null}
        {props.children}
      </Container>
    </Wrapper>
  );
};

export default Modal;
