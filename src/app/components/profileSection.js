import Image from "next/image";

const ProfileSection = () => {
  return (
    <div className="container mx-auto px-4 mb-14">
      <div className="text-left">
        <div className="scroll-element1 bg-[#f6511d] h-4 w-1/2 sm:w-[12vw] mb-2"></div>
        <div className="scroll-element2">
          <h2 className="text-4xl sm:text-6xl font-nsjp font-semibold">Profile</h2>
          <h2 className="text-xl sm:text-2xl font-nsjp font-semibold mb-10">自己紹介</h2>
        </div>
        <div className="slide-in left">
          <div className="flex flex-col sm:flex-row items-center p-8 text-left">
            <Image
              src="/image/Headphone.webp"
              alt="icon"
              className="h-48 rounded-full border-4 border-[#f6511d]"
              width="200"
              height="200"
              priority
            />
            <div className="ml-0 sm:ml-10 mt-6 sm:mt-0">
              <h3 className="font-nsjp font-semibold text-2xl sm:text-4xl mb-8">Sora_339</h3>
              <p className="text-lg sm:text-xl font-nsjp">
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
  );
};

export default ProfileSection;
