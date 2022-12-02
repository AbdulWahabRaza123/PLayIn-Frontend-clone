import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IBet } from "../const/bets";
import Page1 from "./subPages/live-page1";
import Page2 from "./subPages/live-page2";
import Page3 from "./subPages/live-page3";
import Page4 from "./subPages/live-page4";
import Page5 from "./subPages/live-page5";
const Live = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState(0);
  const [customBet, setCustomBet] = useState<IBet>();
  useEffect(() => {
    if (activePage < 0) {
      router.push("/");
    }
  }, [router, activePage]);
  useEffect(() => {
    console.log("Bet changed", customBet);
  }, [customBet]);
  const links = [
    {
      text: "Community bets",
      onClick: () => setActivePage(0),
    },
    {
      text: "Head2Head bets",
      onClick: () => setActivePage(1),
    },
  ];
  switch (activePage) {
    case 0:
      return (
        <Page1 onBack={() => setActivePage(activePage - 1)} links={links} />
      );
    case 1:
      return (
        <Page2
          onBack={() => setActivePage(activePage - 1)}
          links={links}
          onProceed={() => setActivePage(activePage + 1)}
        />
      );
    case 2:
      return (
        <Page3
          onBack={() => setActivePage(activePage - 1)}
          onProceed={() => setActivePage(activePage + 1)}
          customBet={customBet}
          setCustomBet={setCustomBet}
        />
      );
    case 3:
      return (
        <Page4
          onBack={() => setActivePage(activePage - 1)}
          onProceed={() => setActivePage(activePage + 1)}
          customBet={customBet}
          setCustomBet={setCustomBet}
        />
      );
    case 4:
      return (
        <Page5
          onBack={() => setActivePage(activePage - 1)}
          onProceed={() => setActivePage(activePage + 1)}
          customBet={customBet}
          setCustomBet={setCustomBet}
        />
      );

    default:
      return null;
  }
};

export default Live;
