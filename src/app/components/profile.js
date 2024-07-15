import ContactSection from "./contactSection";
import ProfileScript from "./profileScript";
import ProfileSection from "./profileSection";
import ScrollIndicator from "./scrollIndicator";
import WorksSection from "./worksSection";


const Profile = () => {
  return (
    <div className="xl:mx-[240px]">
      <ProfileScript />
      <main className="mb-14">
        <ScrollIndicator />
        <ProfileSection />
        <WorksSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Profile;
