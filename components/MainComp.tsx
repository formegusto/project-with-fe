import React from "react";
import { Text } from "react-native";
// styled-components/native types moved to @types/styled-components-react-native
import { ViewTest } from "../styles/Screen";

function MainComp() {
  return (
    <ViewTest>
      <Text>main</Text>
    </ViewTest>
  );
}

export default MainComp;
