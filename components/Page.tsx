import { useEffect, useState, ReactElement } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
const Container = styled.div`
  padding: 50px;
`;
interface StyledProps {
  active?: boolean;
  icon?: string;
  height?: string;
}
const UserDataContainer = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BalanceText = styled.div`
  display: inline-block;
  font-family: Tofino;
  font-size: 26px;
  line-height: 41px;

  padding-left: 60px;
  margin-right: 30px;
  font-weight: 700;
  height: 41px;

  background-image: url(${(props: StyledProps) => props.icon});
  background-repeat: no-repeat;
`;
const Splitter = styled.span`
  height: ${(props: StyledProps) => props.height};
  border: 1px solid #363636;
  width: 0.5px;
  line-height: 41px;
`;
const ProfileIcon = styled.img`
  margin-left: 30px;
  cursor: pointer;
`;
const A = styled.a`
  cursor: pointer;
  &:hover {
    color: #cef458;
  }
`;
const InnerBody = styled.div`
  padding: 60px 0px;
  width: 80%;
`;
const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Sidenav = styled.div`
  width: 20%;
`;
const Shadow = styled.div`
  position: absolute;
  width: 776px;
  height: 2000px;
  left: -429px;
  top: -90%;

  background: radial-gradient(
    24.53% 24.53% at 50% 50%,
    rgba(122, 40, 227, 0.59) 0%,
    rgba(27, 26, 26, 0.0531) 100%
  );
  filter: blur(92px);
`;
const PageLink = styled.p`
  font-family: Tofino;
  font-style: normal;
  font-weight: 700;
  position: relative;
  font-size: 24px;
  line-height: 29px;
  color: ${(props: StyledProps) => (props.active ? "#cef458" : "#A0A1B1")};
  margin: 60px 0px;

  &:hover {
    color: #cef458;
  }
`;
export interface UserData {
  name: string;
  balances: {
    eth: number;
    plex: number;
    usd: number;
  };
}
interface PageProps {
  children: ReactElement;
  onSignUpModalOpen?: any;
}
const Page = (props: PageProps) => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>();
  const pages = ["Home", "Live", "Leaders", "Exchange", "Marketplace"];

  //to put out the saved data of user from local storage
  useEffect(() => {
    const savedData = localStorage.getItem("playInTestUserData");
    if (!savedData || savedData === "") {
      return;
    } else {
      setUserData(JSON.parse(savedData));
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("playInTestUserData");
    window.location.reload();
  };
  return (
    <>
      <Container>
        <HeaderContainer>
          <img src="/assets/playin-logo.svg" alt="playin-logo" />
          {userData ? (
            <UserDataContainer>
              <BalanceText icon="/assets/eth-icon.svg">
                ${userData?.balances.eth}
              </BalanceText>
              <Splitter style={{ marginRight: "20px" }} height="100%" />
              <BalanceText icon="/assets/plex-icon.svg">
                ${userData?.balances.plex}
              </BalanceText>
              <Splitter height="100%" />
              <ProfileIcon
                src="/assets/profile-default.svg"
                onDoubleClick={logout}
              />
            </UserDataContainer>
          ) : (
            <A onClick={props.onSignUpModalOpen}>Sign up or Login</A>
          )}
        </HeaderContainer>
        <BodyContainer>
          <Sidenav>
            <Shadow />
            {pages.map((name, id) => {
              return (
                <PageLink
                  active={router.pathname.substring(1) == name}
                  key={id}
                >
                  <Link href={`/${name === "Home" ? "" : name}`}>
                    <A>{name}</A>
                  </Link>
                </PageLink>
              );
            })}
          </Sidenav>

          <InnerBody>{props.children}</InnerBody>
        </BodyContainer>
      </Container>
    </>
  );
};

export default Page;
