import * as React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";
import { fontWeights } from "../../../infrastructure/theme/fonts";
import { AntDesign } from "@expo/vector-icons";
import { Margin } from "../../../components/marginUtility";

const ResturantTitle = styled(Title)`
  font-weight: ${fontWeights.medium};
`;

const RowContainer = styled.View`
  flex-direction: row;
`;

const CustomCard = styled(Card)`
  margin: 10px;
`;

const keys = [0, 1, 2, 3, 4];

const ResturantItem = ({ title, ratings = 3 }) => (
  <CustomCard>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Content>
      <ResturantTitle>{title}</ResturantTitle>
      <RowContainer>
        {Array.apply(null, Array(Math.floor(ratings))).map((e) => (
          <AntDesign name="star" size={20} color="orange" key={keys[0]++} />
        ))}
      </RowContainer>
      <Paragraph>The Best in Class Non Veg in Khanpur, Sangam Vihar.</Paragraph>
    </Card.Content>
  </CustomCard>
);

export default ResturantItem;
