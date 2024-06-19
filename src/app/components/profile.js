"use client"

import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import('./carousel'), {
  ssr: false
});

const Profile = () => {
  //scriptを埋め込む処理
  let script = null;
  if (typeof window === 'object') {
    // 同じscriptが量産されるのを防ぐため同じscriptタグがある場合は処理しない
    if (document.querySelector("#crazy_script") === null) {
      script = document.createElement("script");
      script.id = "crazy_script";

      // innerHTMLでやりたい内容を書く
      script.innerHTML = `
  
        document.addEventListener("scroll", function () {
          const slideInElements = document.querySelectorAll(".slide-in");
          let hasScrolled = new Array(slideInElements.length).fill(false);
  
          function checkSlide() {
            slideInElements.forEach((element, index) => {
              const slideInAt =
                window.scrollY + window.innerHeight - element.clientHeight / 2;
              const elementBottom = element.offsetTop + element.clientHeight;
              const isHalfShown = slideInAt > element.offsetTop;
              const isNotScrolledPast = window.scrollY < elementBottom;
  
              if (isHalfShown && isNotScrolledPast && !hasScrolled[index]) {
                element.classList.add("show");
                hasScrolled[index] = true; // 一度表示されたらフラグを立てる
              }
            });
          }
  
          window.addEventListener("scroll", checkSlide);
          checkSlide(); // ページ読み込み時に一度チェック
       });
  
      document.addEventListener("scroll", function () {
        const slideInElements = document.querySelectorAll(".pop");
        let hasScrolled = new Array(slideInElements.length).fill(false);
  
        function checkSlide() {
          slideInElements.forEach((element, index) => {
            const slideInAt =
              window.scrollY + window.innerHeight - element.clientHeight / 2;
            const elementBottom = element.offsetTop + element.clientHeight;
            const isHalfShown = slideInAt > element.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;
  
            if (isHalfShown && isNotScrolledPast && !hasScrolled[index]) {
              element.classList.add("show");
              hasScrolled[index] = true; // 一度表示されたらフラグを立てる
            }
          });
        }
  
        window.addEventListener("scroll", checkSlide);
        checkSlide(); // ページ読み込み時に一度チェック
      });
  
      document.addEventListener("scroll", function () {
        const worksscrollButton = document.getElementById("worksscrollButton");
        const works = document.getElementById("works");
        const contactscrollButton = document.getElementById(
          "contactscrollButton"
        );
        const contact = document.getElementById("contact");
        const blogscrollButton = document.getElementById("blogscrollButton");
        const blog = document.getElementById("blog");
  
        worksscrollButton.addEventListener("click", function () {
          works.scrollIntoView({ behavior: "smooth" });
        });
        contactscrollButton.addEventListener("click", function () {
          contact.scrollIntoView({ behavior: "smooth" });
        });
        blogscrollButton.addEventListener("click", function () {
          blog.scrollIntoView({ behavior: "smooth" });
        });
      });
  
      document.addEventListener("scroll", function () {
        const elements = document.querySelectorAll(".scroll-element1");
        elements.forEach((element) => {
          const elementPosition = element.getBoundingClientRect().top;
          const viewportHeight = window.innerHeight;
  
          if (elementPosition < viewportHeight) {
            element.classList.add("visible");
          }
        });
      });
  
      document.addEventListener("scroll", function () {
        const elements = document.querySelectorAll(".scroll-element2");
        elements.forEach((element) => {
          const elementPosition = element.getBoundingClientRect().top;
          const viewportHeight = window.innerHeight;
  
          if (elementPosition < viewportHeight) {
            element.classList.add("visible");
          }
        });
      });
  
      document.addEventListener("scroll", function () {
        const elements = document.querySelectorAll(".scroll-element3");
        elements.forEach((element) => {
          const elementPosition = element.getBoundingClientRect().top;
          const viewportHeight = window.innerHeight;
  
          if (elementPosition < viewportHeight) {
            element.classList.add("visible");
          }
        });
      });
  
      document.addEventListener("scroll", function () {
        const elements = document.querySelectorAll(".scroll-element4");
        elements.forEach((element) => {
          const elementPosition = element.getBoundingClientRect().top;
          const viewportHeight = window.innerHeight;
  
          if (elementPosition < viewportHeight) {
            element.classList.add("visible");
          }
        });
      });
      document.addEventListener("scroll", function () {
        const elements = document.querySelectorAll(".scroll-element5");
        elements.forEach((element) => {
          const elementPosition = element.getBoundingClientRect().top;
          const viewportHeight = window.innerHeight;
  
          if (elementPosition < viewportHeight) {
            element.classList.add("visible");
          }
        });
      });
  
      document.addEventListener("scroll", function () {
        const elements = document.querySelectorAll(".scroll-element6");
        elements.forEach((element) => {
          const elementPosition = element.getBoundingClientRect().top;
          const viewportHeight = window.innerHeight;
  
          if (elementPosition < viewportHeight) {
            element.classList.add("visible");
          }
        });
      });
            `;
    }
  }

  //reactのレンダリング後にscriptを埋め込みたいのでuseEffectで埋め込む
  useEffect(() => {
    if (script !== null) {
      document.body.appendChild(script);
    }
  });

  return (
    <div>
      <main className="mb-14">
        <Carousel />
        <div className="">
          <div className="mr-72 ml-72 mb-14">
            <div className="text-left">
              <div className="scroll-element1 bg-[#f6511d] h-4 w-[12vw] mb-2 mr-auto ml-0"></div>
              <div className="scroll-element2">
                <h2 className="text-6xl font-nsjp font-semibold">Profile</h2>
                <h2 className="text-2xl font-nsjp font-semibold mb-10">
                  自己紹介
                </h2>
              </div>
              <div className="slide-in left">
                <div className="flex h-fit w-fit items-center p-8 text-right mr-auto ml-0">
                  <Image
                    src="/image/Headphone.webp"
                    alt="icon"
                    className="h-48 rounded-[50%] border-4 border-[#f6511d]"
                    width="200"
                    height="200"
                  />
                  <div className="ml-10">
                    <h3 className="font-nsjp font-semibold text-4xl mb-8 text-left">
                      Sora_339
                    </h3>
                    <p className="text-xl font-nsjp text-left">
                      青山学院大学社会情報学部2年生
                      <br />
                      青山情報メディアセンター勤務
                      <br />
                      PiedPiper青山テック愛好会会長
                      <br />
                      趣味で始めた動画編集でフリーランスとして活動中(2023.4～)
                      <br />
                      最近はWebのフロントエンドの技術を勉強中
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-72 ml-72 mb-14">
            <div className="text-right">
              <div
                id="works"
                className="scroll-element3 bg-[#ffb400] h-4 w-[12vw] mb-2 mr-0 ml-auto"
              ></div>
              <div className="scroll-element4">
                <h2 className="text-6xl font-nsjp font-semibold">Works</h2>
                <h2 className="text-2xl font-nsjp font-semibold mb-10">
                  作品紹介
                </h2>
              </div>
              <div>
                <div className="slide-in left text-left">
                  <div className="mr-8">
                    <h3 className="font-nsjp font-semibold text-5xl">Movies</h3>
                    <h4 className="font-nsjp font-semibold text-xl">
                      動画作品
                    </h4>
                  </div>
                  <div className="flex h-fit w-fit items-center p-8 text-right mr-auto ml-0">
                    <div className="h-56 w-80">
                      <video
                        src="\image\PiedPiperMV完成.mp4"
                        className="h-full w-full"
                        autoPlay
                        muted
                        loop
                      ></video>
                    </div>
                    <div className="ml-10">
                      <p className="text-xl font-nsjp">
                        私が所属するサークル
                        <br />
                        「PiedPiper青山テック愛好会」の文化祭用動画
                        <br />
                        2023年9月制作
                        <br />
                        モーショングラフィックスを用いて
                        <br />
                        疑似的な3D表現に挑戦
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide-in right">
                  <div className="mr-8">
                    <h3 className="font-nsjp font-semibold text-5xl">Web</h3>
                    <h4 className="font-nsjp font-semibold text-xl">
                      ウェブ作品
                    </h4>
                  </div>
                  <div className="flex h-fit w-fit items-center p-8 mr-8 text-right ml-auto">
                    <div className="h-56 w-80">
                      <video
                        src="/image/2024-05-27 12-07-01.mp4"
                        className="h-full w-full"
                        autoPlay
                        muted
                        loop
                      ></video>
                    </div>

                    <div className="ml-10">
                      <p className="text-xl font-nsjp">
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
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide-in right">
                  <div className="flex h-fit w-fit items-center p-8 mr-8 text-right ml-auto">
                    <div className="h-56 w-80 bg-slate-300">
                      {/* <!-- <video
                      src="/image/2024-05-27 12-07-01.mp4"
                      className="h-full w-full"
                      autoplay
                      muted
                      loop
                    ></video> --> */}
                    </div>

                    <div className="ml-10">
                      <p className="text-xl font-nsjp">
                        <span className="text-2xl font-medium">ToryDory</span>
                        <br />
                        ToDoリストの消化したタスクを使って日記を書くアプリ
                        <br />
                        FastAPIとMySQL、Dockerを使用
                        <br />
                        直感的なUIとGeminiを使った日記生成機能がポイント
                        <br />
                        2年次の授業で個人開発
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide-in right">
                  <div className="flex h-fit w-fit items-center p-8 mr-8 text-right ml-auto">
                    <div className="h-56 w-80 bg-slate-300">
                      {/* <!-- <video
                      src="/image/2024-05-27 12-07-01.mp4"
                      className="h-full w-full"
                      autoplay
                      muted
                      loop
                    ></video> --> */}
                    </div>

                    <div className="ml-10">
                      <p className="text-xl font-nsjp">
                        <span className="font-medium text-2xl">SoraBlog</span>
                        <br />
                        このページです！
                        <br />
                        Splide、TailwindCSSを使用
                        <br />
                        日々の創作、開発活動に関する備忘録
                        <br />
                        2年次の授業で個人開発
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide-in left text-left">
                  <div className="mr-8 mb-4">
                    <h3 className="font-nsjp font-semibold text-5xl">Skills</h3>
                    <h4 className="font-nsjp font-semibold text-xl">
                      使用技術
                    </h4>
                  </div>
                  <div className="ml-8">
                    <span className="text-2xl font-nsjp font-medium">
                      映像制作
                    </span>
                    <ul className="list-disc mb-2">
                      <li className="ml-10 text-2xl font-nsjp">
                        Davinch Resolve
                      </li>
                      <li className="ml-10 text-2xl font-nsjp">
                        Affinity Designer 2/Photo 2/Public 2
                      </li>
                    </ul>
                    <span className="text-2xl font-nsjp font-medium">
                      Web開発
                    </span>
                    <ul className="list-disc">
                      <li className="ml-10 text-2xl font-nsjp">Python</li>
                      <li className="ml-10 text-2xl font-nsjp">
                        HTML/CSS/JavaScript
                      </li>
                      <li className="ml-10 text-2xl font-nsjp">React</li>
                      <li className="ml-10 text-2xl font-nsjp">Next.js</li>
                      <li className="ml-10 text-2xl font-nsjp">Figma</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-72 ml-72 mb-14">
            <div className="text-left">
              <div
                id="contact"
                className="scroll-element1 bg-[#00a6ed] h-4 w-[12vw] mb-2 mr-auto ml-0"
              ></div>
              <div className="scroll-element2">
                <h2 className="text-6xl font-nsjp font-semibold">Contact</h2>
                <h2 className="text-2xl font-nsjp font-semibold mb-10">
                  SNS関係
                </h2>
              </div>
              <div className="slide-in left flex h-fit w-fit items-center p-8 mr-auto ml-0">
                <ul className="list-disc">
                  {/* <!-- <div className="flex items-center mb-4">
                  <Image
                    src="/image/google-gmail.svg"
                    alt="Instagram_logo"
                    className="h-12 w-12"
                  />
                  <li className="ml-10 text-2xl font-nsjp font-medium">
                    Mail：
                    <span className="text-xl"> xzhouzhi@gmail.com </span>
                  </li>
                </div> --> */}
                  <div className="flex items-center mb-4">
                    <Image
                      src="/image/X_logo.svg"
                      alt="X_logo"
                      className="h-12 w-12"
                      width="1000"
                      height="500"
                    />
                    <li className="ml-10 text-2xl font-nsjp font-medium">
                      X：
                      <a
                        href="https://twitter.com/339_Sora"
                        className="text-xl"
                      >
                        @339_Sora
                      </a>
                    </li>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/image/Bluesky_Logo.svg"
                      alt="Bluesky_logo"
                      className="h-12 w-12"
                      width="1000"
                      height="500"
                    />
                    <li className="ml-10 text-2xl font-nsjp font-medium">
                      BlueSky：
                      <a
                        href="https://bsky.app/profile/sora339.bsky.social"
                        className="text-xl"
                      >
                        @sora339.bsky.social
                      </a>
                    </li>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/image/Instagram_logo_2022.svg"
                      alt="Instagram_logo"
                      className="h-12 w-12"
                      width="1000"
                      height="500"
                    />
                    <li className="ml-10 text-2xl font-nsjp font-medium">
                      Instagram：
                      <a
                        href="https://www.instagram.com/sorachi_339"
                        className="text-xl"
                      >
                        sorachi_339
                      </a>
                    </li>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/image/discord-icon.svg"
                      alt="Bluesky_logo"
                      className="h-12 w-12"
                      width="1000"
                      height="500"
                    />
                    <li className="ml-10 text-2xl font-nsjp font-medium">
                      discode：
                      <a
                        href="https://discord.com/users/692989109521612841"
                        className="text-xl"
                      >
                        sora_339
                      </a>
                    </li>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/image/github-icon.svg"
                      alt="Bluesky_logo"
                      className="h-12 w-12"
                      width="1000"
                      height="500"
                    />
                    <li className="ml-10 text-2xl font-nsjp font-medium">
                      Github：
                      <a href="https://github.com/Sora339" className="text-xl">
                        Sora339
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Profile;
