import React from "react";
import styled from "styled-components/native";

type Props = {
  imgSrc: string;
  name: string;
  desc: string;
};
function SmallCard(props: Props) {
  return (
    <CardView>
      <CardImage source={props.imgSrc} resizeMode="cover" />
      <Name>{props.name}</Name>
      <Desc>{props.desc}</Desc>
    </CardView>
  );
}

const CardView = styled.View`
  margin: 0 14px 0 0;
`;

const CardImage = styled.Image`
  width: 144px;
  height: 144px;

  border-radius: 10px;
  margin: 0 0 10px 0;
`;

const Name = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #ffffff;
  margin: 0 0 8px 0;
`;
const Desc = styled.Text`
  width: 144px;
  font-family: "Roboto-Light";
  font-size: 12px;
  line-height: 16px;
  /* or 133% */

  color: #c5c5c5;
`;

export default SmallCard;
