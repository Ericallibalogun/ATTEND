import { GalleryShowcase } from "@/components/gallery/gallery-showcase";
import { FooterCta } from "@/components/layout/footer-cta";
import { fetchGalleryCategories } from "@/lib/sanity-gallery-service";

export const metadata = {
  title: "Gallery | Attend",
  description:
    "Photo and media gallery from past ATTEND events including AGMs, Hackathons, and Product Launches.",
};

export default async function GalleryPage() {
  const categories = await fetchGalleryCategories();

  return (
    <>
      <GalleryShowcase initialCategories={categories} />
      <FooterCta />
    </>
  );
}
