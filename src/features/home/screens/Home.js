import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";

import { sizes } from "../../../infrastructure/theme/sizes";
import ResturantItem from "./Cardtem";
import { ResturantsContext } from "../../../services/resturants/resturantContext";
import { Search } from "./search";
const Container = styled.View`
  padding: ${sizes[0]};
  flex: 1;
`;

const LoadingIndicator = styled(ActivityIndicator)`
  top: 50%;
  margin-left: -25px;
  margin-top: -25px;
`;

const Home = () => {
  const { isLoading, resturants } = useContext(ResturantsContext);
  const renderItem = ({ item }) => {
    return <ResturantItem resturant={item} />;
  };
  return (
    <Container>
      <Search />
      {isLoading ? (
        <LoadingIndicator size={50} animating={true} />
      ) : (
        <FlatList
          data={resturants}
          renderItem={renderItem}
          keyExtractor={(item) => item.placeId}
        />
      )}
    </Container>
  );
};
export default Home;
