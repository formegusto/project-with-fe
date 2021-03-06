import React from "react";
import { Text } from "react-native";
import image from "../assets/test/images/image-1.png";
import image_2 from "../assets/test/images/image-2.png";
import image_3 from "../assets/test/images/image-3.png";
import image_4 from "../assets/test/images/image-4.png";
import image_6 from "../assets/test/images/image-6.png";
import image_7 from "../assets/test/images/image-7.png";

// styled-components/native types moved to @types/styled-components-react-native
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import SmallCard from "../atoms/SmallCard";
import BigCard from "../atoms/BigCard";
import RankList from "../atoms/RankList";
import AdCarousel from "../atoms/AdCarousel";

import logo from "../assets/test/icons/logo.png";
import facebook from "../assets/test/icons/facebook.png";
import youtube from "../assets/test/icons/youtube.png";
import instagram from "../assets/test/icons/instagram.png";
import { Image } from "react-native";

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
            ??? ????????? ???????????????
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
          <Title.Text>???????????? ?????????</Title.Text>
          <Title.More>?????????</Title.More>
        </Title.View>
        <Teachers.ContentView horizontal>
          <SmallCard
            imgSrc={image_2}
            name="?????? ?????? ?????????"
            desc="?????? ????????? ???????????????? ?????? ??????"
          />
          <SmallCard
            imgSrc={image_3}
            name="?????? ?????? ?????????"
            desc="?????? ????????? ???????????????? ?????? ??????"
          />
          <SmallCard
            imgSrc={image_4}
            name="?????? ?????? ?????????"
            desc="?????? ????????? ???????????????? ?????? ??????"
          />
        </Teachers.ContentView>
      </Teachers.View>
      <NewTeachers.View>
        <Title.Sub>?????? ????????? ????????? ????????????</Title.Sub>
        <Title.View>
          <Title.Text>?????? ?????? ??????</Title.Text>
          <Title.More>?????????</Title.More>
        </Title.View>
        <NewTeachers.ContentView horizontal>
          {Array.from({ length: 3 }).map((num, idx) => (
            <BigCard
              key={idx}
              imgSrc={image_6}
              name="?????? ??? ????????? ?????????!"
              location="???????????????"
              startTime={new Date(2021, 12, 3, 12)}
              endTime={new Date(2021, 12, 3, 13)}
            />
          ))}
        </NewTeachers.ContentView>
      </NewTeachers.View>
      <Teachers.View>
        <Title.View>
          <Title.Text>????????? ?????????</Title.Text>
          <Title.More>?????????</Title.More>
        </Title.View>
        <Teachers.ContentView horizontal>
          <SmallCard
            imgSrc={image_2}
            name="?????? ?????? ?????????"
            desc="?????? ????????? ???????????????? ?????? ??????"
          />
          <SmallCard
            imgSrc={image_3}
            name="?????? ?????? ?????????"
            desc="?????? ????????? ???????????????? ?????? ??????"
          />
          <SmallCard
            imgSrc={image_4}
            name="?????? ?????? ?????????"
            desc="?????? ????????? ???????????????? ?????? ??????"
          />
        </Teachers.ContentView>
        <Teachers.ContentView horizontal>
          <SmallCard
            imgSrc={image_2}
            name="?????? ?????? ?????????"
            desc="?????? ????????? ???????????????? ?????? ??????"
          />
          <SmallCard
            imgSrc={image_3}
            name="?????? ?????? ?????????"
            desc="?????? ????????? ???????????????? ?????? ??????"
          />
          <SmallCard
            imgSrc={image_4}
            name="?????? ?????? ?????????"
            desc="?????? ????????? ???????????????? ?????? ??????"
          />
        </Teachers.ContentView>
      </Teachers.View>
      <Rank.View>
        <Title.Sub>?????? ????????? ????????? ????????????</Title.Sub>
        <Title.View>
          <Title.Text>?????? ??????</Title.Text>
          <Title.More>?????????</Title.More>
        </Title.View>
        <Rank.ContentView horizontal>
          {[image_2, image_7].map((img, idx) => (
            <RankList imgSrc={img} key={idx} isLast={idx === 1} />
          ))}
        </Rank.ContentView>
      </Rank.View>
      <Ad.View>
        <Title.View>
          <Title.Text>????????? ???????????????</Title.Text>
          <Title.More>?????????</Title.More>
        </Title.View>
        <Ad.ContentView>
          <AdCarousel />
        </Ad.ContentView>
      </Ad.View>
      <TheWith.View>
        <TheWith.ContentView>
          <Image
            source={logo}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <TheWith.Text_1
            style={{
              marginTop: 23,
              marginBottom: 15,
            }}
          >
            ?????? ?????? ?????????????
          </TheWith.Text_1>
          <TheWith.Text_1
            style={{
              marginBottom: 44,
            }}
          >
            ????????? ?????????
          </TheWith.Text_1>
          <TheWith.CallButton activeOpacity={0.7}>
            <TheWith.ButtonText>????????????</TheWith.ButtonText>
          </TheWith.CallButton>
          <TheWith.BottomContent>
            <TheWith.SNSList>
              <TheWith.SNSIcon
                source={facebook}
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 35,
                }}
              />
              <TheWith.SNSIcon
                source={instagram}
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 35,
                }}
              />
              <TheWith.SNSIcon
                source={youtube}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TheWith.SNSList>
            <TheWith.Text_2>?????? ?????? ?????? ??? ??????</TheWith.Text_2>
            <TheWith.Text_3>minwoo5836@gmail.com</TheWith.Text_3>
          </TheWith.BottomContent>
        </TheWith.ContentView>
      </TheWith.View>
    </MainView>
  );
}

const TheWith = {
  BottomContent: styled.View`
    margin: 46px 0 0;
    width: 100%;
  `,
  SNSList: styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 0 26px;
  `,
  SNSIcon: styled.Image``,
  View: styled.View`
    padding: 30px 20px 20px 20px;
    background-color: #0d198c;
  `,
  ContentView: styled.View`
    align-items: flex-start;
  `,
  Text_1: styled.Text`
    font-family: "Roboto-Bold";
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #ffffff;
  `,
  Text_2: styled.Text`
    font-family: "Roboto-Bold";

    font-size: 14px;
    line-height: 16px;
    margin: 0 0 4px;
    /* identical to box height, or 114% */

    text-align: center;

    color: #949bd7;
  `,
  Text_3: styled.Text`
    font-family: "Roboto";

    font-size: 10px;
    line-height: 16px;
    /* identical to box height, or 160% */

    text-align: center;

    color: #949bd7;
  `,
  CallButton: styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

    width: 152px;
    height: 70px;

    background: #7784ff;
    border-radius: 17px;
  `,
  ButtonText: styled.Text`
    font-family: "Roboto";
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #ffffff;
  `,
};

const Ad = {
  View: styled.View`
    padding: 20px 0 7px 20px;
    background-color: #0012b5;
  `,
  ContentView: styled.View`
    padding: 0 20px 0 0;
  `,
};

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
