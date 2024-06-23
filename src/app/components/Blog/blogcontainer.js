import Blogcontent from "./blogcontent";

const Blogcontainer = ({ blogData }) => {
  return (
    <div>
      <div className=" mb-20">
        <div className="mr-72 ml-72">
          <div className="text-center">
            <div
              id="blog"
              className="scroll-element5 bg-[#7fb800] h-4 w-[12vw] mb-2 mr-auto ml-auto"
            ></div>
            <div className="scroll-element6">
              <h2 className="text-6xl font-nsjp font-semibold">Blog</h2>
              <h2 className="text-2xl font-nsjp font-semibold mb-10">呟き</h2>
            </div>
            <div className="h-fit w-full items-center p-8 text-right ml-0">
              <Blogcontent blogData={blogData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcontainer;
