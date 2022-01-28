import styled from "styled-components";
import { applyCardStyles } from "./ReusableStyles";
const Earnings = () => {
  const earningsData = [
    {
      progress: 45,
      amount: 3125
    },
    {
      progress: 55,
      amount: 2731
    },
    {
      progress: 65,
      amount: 1315
    },
    {
      progress: 100,
      amount: 1012
    }
  ];
  return (
    <Section>
      <TitleContainer>
        <h4>Earnings</h4>
        <h1>450,210</h1>
      </TitleContainer>
      <EarningsContainer>
        {earningsData.map(({ progress, amount }) => (
          <EarningData key={amount}>
            <h5>{progress === 100 ? "FUNDS CLEARED" : "CLEARNING"}</h5>
            <h5 className="amount">$ {amount}</h5>
            <Progress max={100} value={progress} cleared={progress === 100} />
          </EarningData>
        ))}
      </EarningsContainer>
    </Section>
  );
};

const Section = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  ${applyCardStyles}
  color:white;
`;
const TitleContainer = styled.div`
  h1 {
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
`;
const Progress = styled.progress`
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  &::-webkit-progress-bar {
    border-radius: 1rem;
    height: 0.15rem;
  }
  &::-webkit-progress-value {
      border-radius: 1rem;
    background-color: ${({ cleared }) =>
      cleared ? `--primary-color` : "orange"}
`;
const EarningsContainer = styled.div``;
const EarningData = styled.div``;
export default Earnings;
