import styled from "styled-components";
import { applyCardStyles } from "./ReusableStyles";
import { ResponsiveContainer, BarChart, Tooltip, Bar } from "recharts";
import { BsThreeDots } from "react-icons/bs";

const TargetAudience = () => {
  const data = [
    {
      uv: 4000
    },
    {
      uv: 3000
    },
    {
      uv: 2000
    },
    {
      uv: 2780
    },
    {
      uv: 1890
    },
    {
      uv: 2390
    },
    {
      uv: 3490
    }
  ];
  return (
    <Section>
      <TitleContainer>
        <Title>
          <h4>Target Audience</h4>
          <BsThreeDots />
        </Title>
      </TitleContainer>
      <Chart>
        <ResponsiveContainer>
          <BarChart width="300px" height="500px" data={data}>
            <Tooltip cursor={{ fill: "#3d741d7a" }} />
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop offset={"40%"} stopColor="var(--primary-color)" />
                <stop offset="80%" stopColor="#000000ff" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <Bar
              dataKey={"uv"}
              stackId={"a"}
              fill="url(#colorview)"
              animationBegin={800}
              animationDuration={2000}
            />
          </BarChart>
        </ResponsiveContainer>
      </Chart>
    </Section>
  );
};

const Section = styled.section`
  ${applyCardStyles}
  color:white;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
  svg {
    color: var(--primary-color);
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

const Chart = styled.div`
  height: 10rem;
  .recharts-default-tooltip {
    background-color: var(--dark-background-color) !important;
    border: none !important;
    border-radius: 1rem;
    box-shadow: 0 0 60px 8px var(--primary-color);
  }
`;
const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export default TargetAudience;
