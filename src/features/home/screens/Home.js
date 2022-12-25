import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { sizes } from "../../../infrastructure/theme/sizes";
import { spacing } from "../../../infrastructure/theme/spacing";
import ResturantItem from "./Cardtem";

const Container = styled.View`
  padding: ${sizes[0]};
  flex: 1;
`;

const SearchbarContainer = styled(Searchbar)`
  margin-bottom: ${spacing[2]};
`;

const ResturantData = [
  { title: "Gupta ji Spring Rolls", key: 0, rating: 5 },
  { title: "Meethe Gulab Jamun Wale", key: 1, rating: 3 },
  { title: "Rasmalai Wale", key: 2, rating: 4 },
  { title: "Chowmein Makers Gurgaon", key: 3, rating: 5 },
  { title: "Momos streets", key: 4, rating: 4 },
  { title: "Chiken at Bake", key: 5, rating: 5 },
  { title: "Singapore Bakery ", key: 6, rating: 3 },
];

const Home = () => {
  const renderItem = ({ item }) => (
    <ResturantItem title={item.title} ratings={item.rating} />
  );

  return (
    <Container>
      <SearchbarContainer placeholder="Search" />
      <FlatList
        data={ResturantData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </Container>
  );
};

export default Home;
