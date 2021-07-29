import React from "react";
import { useCallback } from "react";
import { Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import AdItem from "./AdItem";

function AdCarousel() {
  const [activeSlide, setActiveSlide] = React.useState<number>(0);
  const entries = ["1", "2"];
  const ref = React.useRef<Carousel<any>>(null);

  const getPageNation = useCallback(() => {
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          backgroundColor: "#9AA3FD",
        }}
        inactiveDotStyle={{
          width: 6,
          height: 6,
          borderRadius: 6,
          backgroundColor: "#5C69E2",
        }}
        inactiveDotScale={1}
      />
    );
  }, [activeSlide]);

  return (
    <>
      <Carousel
        ref={ref}
        data={entries}
        layout="default"
        onSnapToItem={(idx) => setActiveSlide(idx)}
        renderItem={AdItem}
        sliderWidth={Dimensions.get("window").width - 40}
        sliderHeight={Dimensions.get("window").width - 40}
        itemWidth={Dimensions.get("window").width - 40}
        itemHeight={Dimensions.get("window").width - 40}
      />
      {getPageNation()}
    </>
  );
}

export default AdCarousel;
