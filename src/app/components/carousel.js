"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";

const Carousel = ({ carousel_data }) => {
  return (
    <div className="mb-14">
      <Splide
        options={{
          contain: true,
          heightRatio: 0.35,
          autoplay: true,
          interval: 3000,
          speed: 1000,
          pauseOnFocus: false,
          pauseOnHover: false,
          pauseOnBlur: false,
          pauseOnAction: false,
          type: "loop",
        }}
      >
        {carousel_data.carousel_img.map((content, index) => (
          <SplideSlide key={index}>
            <Image
              src={content.url}
              alt="Hero"
              className="object-contain w-full"
              width={1000} // 画像の幅を指定
              height={400} // 画像の高さを指定
              priority
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
