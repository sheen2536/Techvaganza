import PageLayout from "../../Components/PageLayout";
import ContactCard from "./components/ContactCard";
import { teams } from "../../constants/contacts";

export default function Contact() {
  return (
    <PageLayout title={"Contact"} imgUrl={"/ambassador.png"}>
      {/* Ambassador team  */}
      <div>
        <div className="text-5xl font-bold font-neotriad textShadow-md text-white my-8">
          Ambassador Team
        </div>
        <div className="px-5 py-8 flex gap-8 flex-wrap items-center overflow-hidden justify-center">
          {teams.ambassador.map((team, index) => (
            <ContactCard key={index} {...team} />
          ))}
        </div>
      </div>

      {/* events team  */}
      <div>
        <div className="text-5xl font-bold font-neotriad textShadow-md text-white my-8">
          Event Management Team
        </div>
        <div className="px-5 py-8 flex gap-8 flex-wrap items-center overflow-hidden justify-center">
          {teams.eventManagement.map((team, index) => (
            <ContactCard key={index} {...team} />
          ))}
        </div>
      </div>

      {/* web dev team  */}
      <div>
        <div className="text-5xl font-bold font-neotriad textShadow-md text-white my-8">
          Web Dev Team
        </div>
        <div className="px-5 py-8 flex gap-8 flex-wrap items-center overflow-hidden justify-center">
          {teams.webDev.map((team, index) => (
            <ContactCard key={index} {...team} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
