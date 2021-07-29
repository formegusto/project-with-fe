import React from "react";
import { Text } from "react-native";
import image from "../assets/test/images/image-1.png";
import image_2 from "../assets/test/images/image-2.png";
import image_3 from "../assets/test/images/image-3.png";
import image_4 from "../assets/test/images/image-4.png";
import image_5 from "../assets/test/images/image-5.png";
import image_6 from "../assets/test/images/image-6.png";
import image_7 from "../assets/test/images/image-7.png";

// styled-components/native types moved to @types/styled-components-react-native
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import SmallCard from "../atoms/SmallCard";
import BigCard from "../atoms/BigCard";
import RankList from "../atoms/RankList";

const Categories = ["BREAK", "HIPHOP", "POPPIN"];

function MainComp() {
  const [selCat, setSelCat] = React.useState<string>("BREAK");

  const changeCategory = React.useCallback((cat: string) => {
    setSelCat(cat);
  }, []);

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
        <Header.ContentView>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 10,
              lineHeight: 20,
              letterSpacing: -0.24,
              color: "#D6D6D6",
            }}
          >
            Creative Music
          </Text>
          <Text
            style={{
              fontFamily: "Roboto-Bold",
              fontSize: 30,
              letterSpacing: -0.24,
              color: "#FFF",
              marginTop: -2,
              marginBottom: 5,
            }}
          >
            Creative Music
          </Text>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 12,
              lineHeight: 20,
              letterSpacing: -0.24,
              color: "#AEAEAE",
            }}
          >
            걍 춤이나 배워보세요
          </Text>
          <Header.NavView>
            {Categories.map((cat, idx) => (
              <Header.NavItem
                onPress={() => changeCategory(cat)}
                key={idx}
                isActive={selCat === cat}
                activeOpacity={0.7}
              >
                <Header.NavText
                  style={{
                    opacity: selCat === cat ? 1 : 0.3,
                  }}
                >
                  {cat}
                </Header.NavText>
              </Header.NavItem>
            ))}
          </Header.NavView>
        </Header.ContentView>
      </Header.View>

      <Teachers.View>
        <Title.View>
          <Title.Text>인기많은 선생들</Title.Text>
          <Title.More>더보기</Title.More>
        </Title.View>
        <Teachers.ContentView horizontal>
          <SmallCard
            imgSrc={image_2}
            name="이것 저것 무야호"
            desc="과연 무엇이 들어갈까요? 일단 두줄"
          />
          <SmallCard
            imgSrc={image_3}
            name="이것 저것 무야호"
            desc="과연 무엇이 들어갈까요? 일단 두줄"
          />
          <SmallCard
            imgSrc={image_4}
            name="이것 저것 무야호"
            desc="과연 무엇이 들어갈까요? 일단 두줄"
          />
        </Teachers.ContentView>
      </Teachers.View>
      <NewTeachers.View>
        <Title.Sub>선생 순위를 정하는 레이아웃</Title.Sub>
        <Title.View>
          <Title.Text>신규 등록 선생</Title.Text>
          <Title.More>더보기</Title.More>
        </Title.View>
        <NewTeachers.ContentView horizontal>
          {Array.from({ length: 3 }).map((num, idx) => (
            <BigCard
              key={idx}
              imgSrc={image_6}
              name="나는 야 김민우 야호우!"
              location="부산광역시"
              startTime={new Date(2021, 12, 3, 12)}
              endTime={new Date(2021, 12, 3, 13)}
            />
          ))}
        </NewTeachers.ContentView>
      </NewTeachers.View>
      <Teachers.View>
        <Title.View>
          <Title.Text>등록된 선생들</Title.Text>
          <Title.More>더보기</Title.More>
        </Title.View>
        <Teachers.ContentView horizontal>
          <SmallCard
            imgSrc={image_2}
            name="이것 저것 무야호"
            desc="과연 무엇이 들어갈까요? 일단 두줄"
          />
          <SmallCard
            imgSrc={image_3}
            name="이것 저것 무야호"
            desc="과연 무엇이 들어갈까요? 일단 두줄"
          />
          <SmallCard
            imgSrc={image_4}
            name="이것 저것 무야호"
            desc="과연 무엇이 들어갈까요? 일단 두줄"
          />
        </Teachers.ContentView>
        <Teachers.ContentView horizontal>
          <SmallCard
            imgSrc={image_2}
            name="이것 저것 무야호"
            desc="과연 무엇이 들어갈까요? 일단 두줄"
          />
          <SmallCard
            imgSrc={image_3}
            name="이것 저것 무야호"
            desc="과연 무엇이 들어갈까요? 일단 두줄"
          />
          <SmallCard
            imgSrc={image_4}
            name="이것 저것 무야호"
            desc="과연 무엇이 들어갈까요? 일단 두줄"
          />
        </Teachers.ContentView>
      </Teachers.View>
      <Rank.View>
        <Title.Sub>선생 순위를 정하는 레이아웃</Title.Sub>
        <Title.View>
          <Title.Text>순위 제목</Title.Text>
          <Title.More>더보기</Title.More>
        </Title.View>
        <Rank.ContentView horizontal>
          {[image_2, image_7].map((img, idx) => (
            <RankList imgSrc={img} key={idx} isLast={idx === 1} />
          ))}
        </Rank.ContentView>
      </Rank.View>
    </MainView>
  );
}

const Rank = {
  View: styled.View`
    padding: 20px 0 30px 20px;
    background-color: #0d198c;
  `,
  ContentView: styled.ScrollView``,
};

const Title = {
  View: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 20px 20px 0;
  `,
  Sub: styled.Text`
    font-family: "Roboto-Light";
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    color: #4c56b6;
    margin: 0 0 4px 0;
  `,
  Text: styled.Text`
    font-family: "Roboto-Bold";
    font-size: 30px;
    line-height: 35px;
    color: #fff;
  `,
  More: styled.Text`
    font-family: "Roboto-Bold";
    font-size: 12px;
    line-height: 14px;

    text-align: right;

    color: #aeb6fc;
  `,
};

const NewTeachers = {
  View: styled.View`
    padding: 20px 0 30px 20px;
    background-color: #0d198c;
  `,
  ContentView: styled.ScrollView``,
};

const Teachers = {
  View: styled.View`
    padding: 20px 0 7px 20px;
    background-color: #0012b5;
  `,
  ContentView: styled.ScrollView`
    margin: 0 0 20px;
  `,
};

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
  ContentView: styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
  `,
  MainImageView: styled.Image`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 310px;
  `,
  NavView: styled.View`
    flex-direction: row;
    margin-top: 16px;
    margin-bottom: 10px;
  `,
  NavItem: styled.TouchableOpacity<{ isActive?: boolean }>`
    border-radius: 15px;
    border: 1.5px solid
      ${(props) => (props.isActive ? "#CECECE" : "rgba(255, 255, 255, 0.3)")};
    padding: 7px 12px;
    margin: 0 10px 0 0;
  `,
  NavText: styled.Text`
    font-family: "Roboto-Bold";
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.24px;

    color: #fff;
  `,
};

export default MainComp;
