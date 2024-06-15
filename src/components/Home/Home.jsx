import { HomeBanner } from "../HomeBanner/HomeBanner";
import { BodyContent } from "../BodyContent/BodyContent";
import { Faq } from "../Faq/Faq";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <>
      <HomeBanner />
      <BodyContent />
      <Faq />
      <Footer />
    </>
  );
};
