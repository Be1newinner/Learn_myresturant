import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

import { spacing } from "../../../infrastructure/theme/spacing";
import { LocationContext } from "../../../services/location/locationContext";

const SearchbarContainer = styled(Searchbar)`
  margin-bottom: ${spacing[2]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
    console.log("useEffect Search");
  }, []);

  return (
    <SearchbarContainer
      onChangeText={(e) => {
        setSearchKeyword(e);
      }}
      onSubmitEditing={() => {
        if (!searchKeyword.length) {
          return;
        }
        search(searchKeyword);
      }}
      value={searchKeyword}
      placeholder="Search"
    />
  );
};
