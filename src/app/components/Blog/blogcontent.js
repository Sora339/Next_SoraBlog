import { client } from "../../../../libs/client";
import Image from "next/image";

const Blogcontent = async () => {
  const data = await client.get({
    endpoint: "blogs",
  });

  return (
    <div className="pop">
      {data.contents.map((content) => (
        <div key={content.id}>
          <div className="text-left">
            <h3 className="text-2xl font-nsjp font-medium">{content.title}</h3>
            <p className="text-base font-nsjp font-normal mb-2">
              {new Date(content.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="w-full h-48 bg-slate-200 text-left p-4 mb-6 flex">
            <div className="bg-white p-2 w-[255px]">
                <Image
                  src={content.eyecatch.url}
                  alt={content.title}
                  className="h-full ml-auto mr-auto object-contain"
                  width={content.eyecatch.width}
                  height={content.eyecatch.height}
                />
            </div>
            <div
              className="ml-8 p-2 text-black"
              dangerouslySetInnerHTML={{ __html: content.content }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogcontent;
