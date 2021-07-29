import React from "react";
import { Image } from "react-native";
import { Text } from "react-native";
// styled-components/native types moved to @types/styled-components-react-native

import image from "../assets/test/images/image-1.png";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

function MainComp() {
  return (
    <MainView stickyHeaderIndices={[1]}>
      <Header.Empty />
      <Header.View>
        <Header.MainImageView source={image} resizeMode="cover" />
        <LinearGradient
          colors={["rgba(91, 96, 141, 0.175)", "#0012B5"]}
          locations={[0.333, 0.9103]}
          style={{
            position: "absolute",
            width: "100%",
            height: 310,
            bottom: 0,
          }}
        />
      </Header.View>
      <Content.exam />
    </MainView>
  );
}

const MainView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const Header = {
  Empty: styled.View`
    height: 80px;
  `,
  View: styled.View`
    width: 100%;
    height: 230px;
  `,
  MainImageView: styled.Image`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 310px;
  `,
};

const Content = {
  exam: styled.View`
    width: 100%;
    height: 1000px;
    background-color: #0012b5;
  `,
};

export default MainComp;
