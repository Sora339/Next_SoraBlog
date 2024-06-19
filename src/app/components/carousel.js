import Image from "next/image";
import { client } from "../../../libs/client";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";

const Carousel = async () => {
  const carousel_data = await client.get({
    endpoint: "carousel",
    contentId: "first",
  });

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
        {carousel_data.carousel_img.map((content) => (
          <SplideSlide>
            <Image
              src={content.url}
              alt="Hero"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
