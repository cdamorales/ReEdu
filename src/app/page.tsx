import { default as Footer } from "./components/organisms/footer";
import {
  ChooseUs,
  OnBoarding,
  WhoWeAre,
  Creators,
  Learners,
  ContactUs,
} from "./components/templates";

export default function Home() {
  return (
    <div>
      <OnBoarding />
      <WhoWeAre />
      <ChooseUs />
      <Learners />
      <Creators />
      <ContactUs />
      <Footer />
    </div>
  );
}
