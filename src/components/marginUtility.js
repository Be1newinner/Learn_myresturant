import React from "react";
import styled from "styled-components/native";
import { spacing } from "../infrastructure/theme/spacing";

const TopSmall = styled.View`
  margin-top: ${() => spacing[3]};
`;

const TopMedium = styled.View`
  margin-top: ${() => spacing[2]};
`;

const TopLarge = styled.View`
  margin-top: ${() => spacing[3]};
`;

const LeftSmall = styled.View`
  margin-left: ${() => spacing[1]};
`;

const LeftMedium = styled.View`
  margin-left: ${() => spacing[2]};
`;

const LeftLarge = styled.View`
  margin-left: ${() => spacing[3]};
`;

export const Margin = ({ type }) => {
  if (type === "tm") {
    return <TopMedium />;
  }
  if (type === "tl") {
    return <TopLarge />;
  }
  if (type === "ls") {
    return <LeftSmall />;
  }
  if (type === "lm") {
    return <LeftMedium />;
  }
  if (type === "ll") {
    return <LeftLarge />;
  }
  return <TopSmall />;
};
