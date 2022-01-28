import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import { applyCardStyles } from "./ReusableStyles";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import styled from "styled-components";
const Streams = () => {
  const data = [
    {
      data: 6780
    },
    {
      data: 6680
    },
    {
      data: 6500
    },
    {
      data: 6300
    },
    {
      data: 5900
    },
    {
      data: 5700
    },
    {
      data: 5500
    },
    {
      data: 5300
    },
    {
      data: 5100
    },
    {
      data: 5090
    },
    {
      data: 5300
    },
    { data: 4500 },
    {
      data: 5000
    },
    {
      data: 4700
    },
    {
      data: 4400
    },
    {
      data: 4800
    },
    {
      data: 5300
    },
    {
      data: 5800
    },
    {
      data: 6000
    },
    {
      data: 6300
    },
    {
      data: 6580
    },
    {
      data: 6500
    },
    {
      data: 6300
    },
    {
      data: 6500
    },
    {
      data: 6700
    },
    {
      data: 7000
    },
    {
      data: 7300
    },
    {
      data: 7500
    },
    {
      data: 7700
    },
    {
      data: 8090
    },
    {
      data: 8190
    },
    {
      data: 7990
    },
    {
      data: 5800
    },
    {
      data: 6000
    },
    {
      data: 6300
    },
    {
      data: 6780
    },

    {
      data: 7700
    },
    {
      data: 7500
    },
    {
      data: 7300
    },
    {
      data: 7000
    },
    {
      data: 6700
    },
    {
      data: 6500
    },
    {
      data: 6300
    },
    {
      data: 6500
    },
    {
      data: 6780
    },
    {
      data: 6300
    },
    {
      data: 6000
    },
    {
      data: 5800
    },

    {
      data: 5490
    },
    {
      data: 6000
    },
    {
      data: 8000
    }
  ];
  const sliderData = [
    {
      image: logo1,
      serviceName: "Sound Cloud"
    },
    {
      image: logo2,
      serviceName: "Spotify"
    },
    {
      image: logo3,
      serviceName: "Youtube Music"
    },
    {
      image: logo4,
      serviceName: "Apple Music"
    }
  ];
  return (
    <Section>
      <h4>Streams</h4>
      <TitleContainer>
        <h1>450,210</h1>
        <Slider>
          <Services>
            {sliderData.map(({ image, serviceName }) => (
              <Service key={serviceName}>
                <h6>{serviceName}</h6>
                <img src={image} alt={image} />
              </Service>
            ))}
          </Services>
        </Slider>
      </TitleContainer>
      <Chart>
        <ResponsiveContainer width={"100%"} height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--primary-color)"
                  stopOpacity={0.4}
                />
                <stop offset="100%" stopColor="#000000ff" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type={"monotone"}
              dataKey={"data"}
              stroke="var(--primary-color)"
              strokeWidth={2}
              fill="url(#colorview)"
              animationBegin={800}
              animationDuration={2000}
            />
          </AreaChart>
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
`;
const Slider = styled.div``;
const Services = styled.div`
  display: flex;
  gap: 1rem;
`;
const Service = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 5rem;
  gap: 0.6rem;
  img {
    height: 2rem;
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
export default Streams;
