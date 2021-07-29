import React from "react";
import styled from "styled-components/native";

type Props = {
  imgSrc: string;
  rank: number;
  name: string;
  location: string;
};

function RankItem(props: Props) {
  return (
    <RankView
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#232e9d",
      }}
    >
      <RankImage source={props.imgSrc} resizeMode="cover" />
      <MiddleContent>
        <Name>{props.name}</Name>
        <Location>{props.location}</Location>
      </MiddleContent>
      <EndContent>
        <Rank>{props.rank} 위</Rank>
      </EndContent>
    </RankView>
  );
}

const RankView = styled.View`
  flex-direction: row;
  width: 335px;

  padding: 7.5px 0 9px;
`;

const RankImage = styled.Image`
  width: 56px;
  height: 56px;

  border-radius: 10px;
`;

const MiddleContent = styled.View`
  flex: 1;
  height: 56px;

  margin: 0 0 0 16px;

  justify-content: center;
`;

const Name = styled.Text`
  font-family: "Roboto-Bold";

  font-size: 13px;
  line-height: 15px;

  color: #ffffff;

  margin: 0 0 7px;
`;

const Location = styled.Text`
  font-family: "Roboto";
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */

  color: #b7bad8;
`;

const EndContent = styled.View`
  padding: 0 50px 0 0;

  justify-content: center;
`;

const Rank = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 13px;
  line-height: 15px;

  color: #959fff;
`;

export default RankItem;
