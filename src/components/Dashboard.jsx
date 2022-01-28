import styled from "styled-components";
import Streams from "./Streams";
import Navbar from "./Navbar";
import Earnings from "./Earnings";
import TargetAudience from "./TargetAudience";
import TopRelases from "./TopRelases";
import scrollreveal from "scrollreveal";
import { useEffect } from "react";
const Dashboard = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false
    });
    sr.reveal(`#grid,#row,#row2`, { opacity: 0, interval: 100 });
  }, []);
  return (
    <Section>
      <Navbar />
      <Grid id="grid">
        <Row id="row">
          <Streams />
          <Earnings />
        </Row>
        <Row2 id="row2">
          <TargetAudience />
          <TopRelases />
        </Row2>
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 99.9999vh;
  background-color: rgba(3, 3, 27, 0.7);
`;

const Grid = styled.div`
  padding: 2rem;
  padding-top: 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
`;
const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
`;

export default Dashboard;
