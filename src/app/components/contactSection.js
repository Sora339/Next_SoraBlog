import Image from "next/image";

const ContactSection = () => {
  return (
    <div className="container mx-auto px-4 mb-14">
      <div className="text-right">
        <div
          id="contact"
          className="scroll-element3 ml-auto bg-[#00a6ed] h-4 w-1/2 sm:w-[12vw] mb-2"
        ></div>
        <div className="scroll-element4">
          <h2 className="text-4xl sm:text-6xl font-nsjp font-semibold">
            Contact
          </h2>
          <h2 className="text-xl sm:text-2xl font-nsjp font-semibold mb-10">
            SNS関係
          </h2>
        </div>
        <div className="slide-in right flex flex-col p-8">
          <ul className="space-y-4">
            <ContactItem
              iconSrc="/image/X_logo.svg"
              alt="X_logo"
              platform="X"
              handle="@339_Sora"
              url="https://twitter.com/339_Sora"
            />
            <ContactItem
              iconSrc="/image/Bluesky_Logo.svg"
              alt="Bluesky_logo"
              platform="BlueSky"
              handle="@sora339.bsky.social"
              url="https://bsky.app/profile/sora339.bsky.social"
            />
            <ContactItem
              iconSrc="/image/Instagram_logo_2022.svg"
              alt="Instagram_logo"
              platform="Instagram"
              handle="sorachi_339"
              url="https://www.instagram.com/sorachi_339"
            />
            <ContactItem
              iconSrc="/image/discord-icon.svg"
              alt="Discord_logo"
              platform="Discord"
              handle="sora_339"
              url="https://discord.com/users/692989109521612841"
            />
            <ContactItem
              iconSrc="/image/github-icon.svg"
              alt="Github_logo"
              platform="Github"
              handle="Sora339"
              url="https://github.com/Sora339"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ iconSrc, alt, platform, handle, url }) => {
  return (
    <a href={url} className="text-lg sm:text-xl">
      <div className="flex items-center mb-6">
        <li className="mr-10 text-xl sm:text-2xl font-nsjp font-medium break-normal w-full max-w-full">
          {platform}：{handle}
        </li>
        <Image
          src={iconSrc}
          alt={alt}
          className="h-12 w-12"
          width="1000"
          height="500"
          priority
        />
      </div>
    </a>
  );
};

export default ContactSection;
