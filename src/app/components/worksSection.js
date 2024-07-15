import Image from "next/image";

const WorksSection = () => {
  return (
    <div className="container mx-auto px-4 mb-14">
      <div className="text-right">
        <div
          id="works"
          className="scroll-element3 bg-[#ffb400] h-4 w-1/2 sm:w-[12vw] mb-2 ml-auto"
        ></div>
        <div className="scroll-element4">
          <h2 className="text-4xl sm:text-6xl font-nsjp font-semibold">
            Works
          </h2>
          <h2 className="text-xl sm:text-2xl font-nsjp font-semibold mb-10">
            作品紹介
          </h2>
        </div>
        <div>
          <div className="text-left xl:ml-8">
            <WorkItem
              title="Movies"
              subtitle="動画作品"
              videoSrc="https://www.youtube.com/embed/jb1r2aioXek?si=0SS8iI-B-N8Rlkpw&autoplay=1&mute=1&playsinline=1&loop=1&playlist=jb1r2aioXek"
              description={
                <>
                  私が所属するサークル
                  <br />
                  「PiedPiper青山テック愛好会」の文化祭用動画
                  <br />
                  2023年9月制作
                  <br />
                  モーショングラフィックスを用いて
                  <br />
                  疑似的な3D表現に挑戦
                </>
              }
              direction="left"
            />
          </div>
          <div className="">
            <WorkItem
              title="Web"
              subtitle="ウェブ作品"
              videoSrc="https://www.youtube.com/embed/P4f8oHCgpM8?si=isrAvEgN2CLXdaQV&autoplay=1&mute=1&playsinline=1&loop=1&playlist=P4f8oHCgpM8"
              description={
                <>
                  <span className="font-medium text-2xl">
                    スーパー巻き寿司職人
                  </span>
                  <br />
                  制限時間内に多くの巻き寿司を作るゲーム
                  <br />
                  1年次の授業でM氏と共同で開発
                  <br />
                  学部で優秀賞を獲得
                  <br />
                  GithubPagesでデプロイ
                  <br />
                  <a href="https://sora339.github.io/MakizushiMaster/">
                    https://sora339.github.io/MakizushiMaster/
                  </a>
                </>
              }
              direction="right"
            />
            <WorkItem
              title=""
              subtitle=""
              videoSrc=""
              description={
                <>
                  <span className="font-medium text-2xl">ToryDory</span>
                  <br />
                  ToDoリストの消化したタスクを使って
                  <br />
                  日記を書くアプリ
                  <br />
                  FastAPIとMySQL、Dockerを使用
                  <br />
                  Geminiを使った
                  <br />
                  日記生成機能がポイント
                  <br />
                  2年次の授業で個人開発
                </>
              }
              direction="right"
            />
            <WorkItem
              title=""
              subtitle=""
              videoSrc=""
              description={
                <>
                  <span className="font-medium text-2xl">SoraBlog</span>
                  <br />
                  このページです！
                  <br />
                  Next.js、microCMS、
                  <br />
                  Splide、TailwindCSSを使用
                  <br />
                  日々の創作、開発活動に関する備忘録
                  <br />
                  2年次の授業で個人開発
                </>
              }
              direction="right"
            />
          </div>
          <SkillsSection />
        </div>
      </div>
    </div>
  );
};

const WorkItem = ({ title, subtitle, videoSrc, description, direction }) => {
  return (
    <div className={`slide-in ${direction} mb-8`}>
      <div className="mr-8">
        <h3 className="font-nsjp font-semibold text-4xl sm:text-5xl">
          {title}
        </h3>
        <h4 className="font-nsjp font-semibold text-lg sm:text-xl">
          {subtitle}
        </h4>
      </div>
      <div
        className={`flex flex-col lg:flex-row items-center p-8 text-left ${
          direction === "right" ? "justify-end xl:mr-8" : "xl:ml-8"
        }`}
      >
        <div className="h-48 w-80 mb-4 sm:mb-0">
          {videoSrc ? (
            // <video
            //   src={videoSrc}
            //   className="h-full w-full"
            //   autoPlay
            //   muted
            //   loop
            //   playsinline
            // ></video>
            <iframe
              className="h-full w-full"
              src={videoSrc}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          ) : (
            <div className="h-full w-full bg-slate-300"></div>
          )}
        </div>
        <div className="ml-0 sm:ml-10">
          <p className="text-lg sm:text-xl font-nsjp">{description}</p>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className="slide-in left text-left xl:ml-8">
      <div className="mr-8 mb-4">
        <h3 className="font-nsjp font-semibold text-4xl sm:text-5xl">Skills</h3>
        <h4 className="font-nsjp font-semibold text-lg sm:text-xl">使用技術</h4>
      </div>
      <div className="ml-8">
        <div>
          <span className="text-lg sm:text-2xl font-nsjp font-medium">
            映像制作
          </span>
          <ul className="list-disc mb-4 xl:space-y-3 space-y-2 mt-2">
            <li className="ml-10 text-lg sm:text-2xl font-nsjp">
              Davinch Resolve
            </li>
            <li className="ml-10 text-lg sm:text-2xl font-nsjp">
              Affinity Designer 2/Photo 2/Public 2
            </li>
          </ul>
        </div>
        <div>
          <span className="text-lg sm:text-2xl font-nsjp font-medium">
            Web開発
          </span>
          <ul className="list-disc xl:space-y-3 space-y-2 mt-2">
            <li className="ml-10 text-lg sm:text-2xl font-nsjp">Python</li>
            <li className="ml-10 text-lg sm:text-2xl font-nsjp">
              HTML/CSS/JavaScript
            </li>
            <li className="ml-10 text-lg sm:text-2xl font-nsjp">React</li>
            <li className="ml-10 text-lg sm:text-2xl font-nsjp">Next.js</li>
            <li className="ml-10 text-lg sm:text-2xl font-nsjp">Figma</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
