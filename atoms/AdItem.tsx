import React from "react";
import { Dimensions, Image } from "react-native";
import styled from "styled-components/native";
import image_5 from "../assets/test/images/image-5.png";

function AdItem() {
  return (
    <AdView>
      <Image
        source={image_5}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      ></Image>
    </AdView>
  );
}

const AdView = styled.View`
  width: ${Dimensions.get("window").width - 40}px;
  height: ${Dimensions.get("window").width - 40}px;

  border-radius: 17px;
  overflow: hidden;
  background-color: #999;
`;

export default AdItem;
