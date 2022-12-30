import * as React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";

import { fontWeights } from "../../../infrastructure/theme/fonts";
import { AntDesign } from "@expo/vector-icons";

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

const ResturantItem = ({ resturant }) => {
  const { name, rating, vicinity } = resturant;
  return (
    <CustomCard>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
        <ResturantTitle>{name}</ResturantTitle>
        <Paragraph>{vicinity} </Paragraph>
        <RowContainer>
          {Array.apply(null, Array(Math.ceil(rating))).map((e) => (
            <AntDesign name="star" size={20} color="orange" key={keys[0]++} />
          ))}
        </RowContainer>
      </Card.Content>
    </CustomCard>
  );
};

export default ResturantItem;
