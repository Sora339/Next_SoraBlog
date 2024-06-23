import ContactSection from "./contactSection";
import ProfileScript from "./profileScript";
import ProfileSection from "./profileSection";
import WorksSection from "./worksSection";


const Profile = () => {
  return (
    <div>
      <ProfileScript />
      <main className="mb-14">
        <ProfileSection />
        <WorksSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Profile;
