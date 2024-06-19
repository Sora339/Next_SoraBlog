import Blogcontainer from "./components/Blog/blogcontainer";
import Profile from "./components/profile";
import dynamic from "next/dynamic";
import { client } from "../../libs/client";

// Carouselを動的にインポートし、サーバーサイドレンダリングを無効化
const Carousel = dynamic(() => import('./components/carousel'), {
  ssr: false,
});

const Home = async () => {
  const carousel_data = await client.get({
    endpoint: "carousel",
    contentId: "first",
  });

  return (
    <div>
      <Carousel carousel_data={carousel_data} />
      <Profile />
      <Blogcontainer />
    </div>
  );
};

export default Home;
