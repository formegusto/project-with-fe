import React from "react";
import styled, { css } from "styled-components/native";
import RankItem from "./RankItem";

type Props = {
  imgSrc: string;
  isLast: boolean;
};

function RankList(props: Props) {
  return (
    <ListView isLast={props.isLast}>
      {Array.from({ length: 4 }).map((num, idx) => (
        <RankItem
          key={idx}
          imgSrc={props.imgSrc}
          name="익스프레션"
          location="서울"
          rank={idx + 1}
        />
      ))}
    </ListView>
  );
}

const ListView = styled.View<{ isLast: boolean }>`
  ${(props) =>
    props.isLast &&
    css`
      margin: 0 20px 0 0;
    `}
`;

export default RankList;
