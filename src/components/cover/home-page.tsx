import { CoverHero } from "@/components/cover/cover-hero";
import { HomeBody } from "@/components/cover/home-body";
import { HomeHeader } from "@/components/cover/home-header";
import { Footer } from "@/components/layout/footer";

const HOME_HERO_ID = "home-hero";

export function HomePage() {
  return (
    <>
      <HomeHeader heroId={HOME_HERO_ID} />
      <CoverHero id={HOME_HERO_ID} />
      <HomeBody />
      <Footer />
    </>
  );
}
