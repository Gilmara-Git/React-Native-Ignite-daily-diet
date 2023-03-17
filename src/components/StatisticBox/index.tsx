import {
  Container,
  IconContainer,
  StatsInfo,
  Percentage,
  PercentageText,
} from "./styles";
import { StatisticStyleProps } from "./styles";
import ArrowRed from "@assets/openArrow.svg";

type StatisticProps = StatisticStyleProps & {
  arrowColor: string;
  percentage: number;
};

export const StatisticBox = ({
  dynamicBackground,
  widthDimensions,
  arrowColor,
  percentage,
}: StatisticProps) => {
  const handleStatisticDetails = () => {
    console.log("I was clicked android");
  };

  return (
    <Container
      dynamicBackground={dynamicBackground}
      widthDimensions={widthDimensions}
    >
      <IconContainer onPress={handleStatisticDetails} activeOpacity={0.2}>
        <ArrowRed fill={arrowColor} />
      </IconContainer>

      <StatsInfo>
        <Percentage>{percentage}%</Percentage>
        <PercentageText>of meals within diet plan</PercentageText>
      </StatsInfo>
    </Container>
  );
};
