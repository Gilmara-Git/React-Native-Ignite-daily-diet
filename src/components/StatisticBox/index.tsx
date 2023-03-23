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
  textInfo: string;
  onClick: ()=>void

};

export const StatisticBox = ({
  dynamicBackground,
  widthDimensions,
  arrowColor,
  percentage,
  textInfo,
  onClick  
 
}: StatisticProps) => {

  
  return (
    <Container
      dynamicBackground={dynamicBackground}
      widthDimensions={widthDimensions}
    >
      <IconContainer onPress={onClick} activeOpacity={0.2}>
        <ArrowRed fill={arrowColor} />
      </IconContainer>

      <StatsInfo>
        <Percentage>{percentage}%</Percentage>
        <PercentageText>{textInfo}</PercentageText>
      </StatsInfo>
    </Container>
  );
};
