import Image from "next/image";

const Blogcontent = ({ blogData }) => {
  if (!blogData) return <div>Loading...</div>;

  return (
    <div>
      {blogData.contents.map((content) => (
        <div key={content.id} className="pop mb-6">
          <div className="text-left mb-4">
            <h3 className="text-xl sm:text-2xl font-nsjp font-medium">{content.title}</h3>
            <p className="text-sm sm:text-base font-nsjp font-normal">
              {new Date(content.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="w-full h-auto bg-slate-200 text-left p-4 flex flex-col sm:flex-row">
            <div className="bg-white p-2 w-full sm:w-[255px] mx-auto sm:mx-0">
              <Image
                src={content.eyecatch.url}
                alt={content.title}
                className="h-full object-contain"
                width={content.eyecatch.width}
                height={content.eyecatch.height}
              />
            </div>
            <div
              className="mt-4 sm:mt-0 sm:ml-8 p-2 text-black"
              dangerouslySetInnerHTML={{ __html: content.content }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogcontent;