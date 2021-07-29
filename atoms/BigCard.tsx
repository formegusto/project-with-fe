import React from "react";
import styled from "styled-components/native";
type Props = {
  imgSrc: string;
  name: string;
  startTime: Date;
  endTime: Date;
  location: string;
};

function BigCard(props: Props) {
  return (
    <CardView>
      <CardImage source={props.imgSrc} />
      <Contents>
        <Name>{props.name}</Name>
        <OtherView>
          <Other>
            {props.startTime.getHours()}:00 ~ {props.endTime.getHours()}:00
          </Other>
          <Split />
          <Other>{props.location}</Other>
        </OtherView>
      </Contents>
    </CardView>
  );
}

const OtherView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CardView = styled.View`
  margin: 0 14px 0 0;

  position: relative;

  border-radius: 17px;
  width: 260px;
  height: 220px;

  overflow: hidden;
`;

const CardImage = styled.Image`
  position: absolute;

  top: 0;
  width: 100%;
  height: 100%;
`;

const Contents = styled.View`
  justify-content: flex-end;
  position: absolute;

  top: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 6, 54, 0.37);

  padding: 17px 13px;
`;

const Name = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.24px;
  margin: 0 0 5.44px;

  color: #ffffff;
`;

const Other = styled.Text`
  font-family: "Roboto";
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.24px;

  color: #bebebe;
`;

const Split = styled.View`
  width: 1px;
  height: 9.25px;
  background: #dcdcdc;

  margin: 0 7px 0;
`;

export default BigCard;
