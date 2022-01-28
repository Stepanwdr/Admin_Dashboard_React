import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import RightSideBar from "./components/RightSideBar";
import Dashboard from "./components/Dashboard";
import scrollreveal from "scrollreveal";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: false
    });
    const sr2 = scrollreveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: false
    });
    sr.reveal(`#sideBar`, { opacity: 0 });
    sr2.reveal(`#rightSidebar`, { opacity: 0 });
  }, []);
  return (
    <AppContainer>
      <Sidebar id="sideBar" />
      <Dashboard />
      <RightSideBar id="rightSidebar" />
    </AppContainer>
  );
};
const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 4fr;
  min-height: 100vh;
  height: max-content;
`;

export default App;
