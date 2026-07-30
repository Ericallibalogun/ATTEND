import { CoverHeroContent } from "@/components/cover/cover-hero-content";

type CoverHeroProps = {
  id?: string;
};

export function CoverHero({ id }: CoverHeroProps) {
  return <CoverHeroContent id={id} />;
}
