import Blogcontent from "./blogcontent";

const Blogcontainer = ({ blogData }) => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="mb-20">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center">
            <div
              id="blog"
              className="scroll-element5 bg-[#7fb800] h-4 w-1/2 sm:w-[12vw] mb-2 mx-auto"
            ></div>
            <div className="scroll-element6">
              <h2 className="text-4xl sm:text-6xl font-nsjp font-semibold">Blog</h2>
              <h2 className="text-xl sm:text-2xl font-nsjp font-semibold mb-10">呟き</h2>
            </div>
            <div className="h-fit w-full items-center p-4 sm:p-8 text-right ml-0">
              <Blogcontent blogData={blogData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcontainer;