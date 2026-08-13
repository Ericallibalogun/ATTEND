import { GalleryShowcase } from "@/components/gallery/gallery-showcase";
import { FooterCta } from "@/components/layout/footer-cta";
import { fetchGalleryCategories } from "@/lib/sanity-gallery-service";

export const metadata = {
  title: "Gallery | Attend",
  description:
    "Photo and media gallery from past ATTEND events including AGMs, Hackathons, and Product Launches.",
};

// Refetch gallery from Sanity at most every 60s instead of baking in at build time.
export const revalidate = 60;

export default async function GalleryPage() {
  const categories = await fetchGalleryCategories();

  return (
    <>
      <GalleryShowcase initialCategories={categories} />
      <FooterCta />
    </>
  );
}
