import { useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { RoutesParamList } from "@routes/routesTypes";
import { ColoredHeader } from "@components/ColoredHeader";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Container,
  General,
  GeneralText,
  RectangleBox,
  NumericInfo,
  TextInfo,
  SquaredBoxesContainer,
  SquaredBox,
} from "./styles";

type StatisticsScreenProps = {
  color: string;
  title: string;
  subtitle: string;
  arrowColor: string;
  percentage: number;
};

type StatisticsNavigationProps = {
  navigation: NativeStackNavigationProp<RoutesParamList, "statistics">;
};

export const StatisticsScreen = ({ navigation }: StatisticsNavigationProps) => {
  const { width } = useWindowDimensions();
  const { params } = useRoute();
  const theme = useTheme();
  const { color, subtitle, title, arrowColor, percentage } =
    params as StatisticsScreenProps;

  const handleBackHome = () => {
    navigation.goBack();
  };

  return (
    <Container style={{ width: width > 750 ? width : 375 }}>
      <ColoredHeader
        height={200}
        backgroundColor={color}
        fontSize={theme.FONT_SIZE.XL}
        arrowColor={arrowColor}
        title={title}
        subtitle={subtitle}
        left={32}
        onClick={handleBackHome}
        top={56}
      />

      <General style={{ width: width > 750 ? width : 375 }}>
        <GeneralText>General Statistics</GeneralText>
        <RectangleBox>
          <NumericInfo>22</NumericInfo>
          <TextInfo>better sequence of meals within your diet</TextInfo>
        </RectangleBox>

        <RectangleBox>
          <NumericInfo>109</NumericInfo>
          <TextInfo>registered meals</TextInfo>
        </RectangleBox>

        <SquaredBoxesContainer>
          <SquaredBox style={{ backgroundColor: "#E5F0DB" }}>
            <NumericInfo>99</NumericInfo>
            <TextInfo>meals within your diet</TextInfo>
          </SquaredBox>

          <SquaredBox style={{ backgroundColor: "#F4E6E7" }}>
            <NumericInfo>10</NumericInfo>
            <TextInfo>meals outside your diet</TextInfo>
          </SquaredBox>
        </SquaredBoxesContainer>
      </General>
    </Container>
  );
};
