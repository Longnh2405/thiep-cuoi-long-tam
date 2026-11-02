import { Suspense } from "react";
import Home from "./pages/home/home";
import { metaData } from "./configs/ui";

export async function generateMetadata({ params, searchParams }, parent) {
  const previousImages = (await parent).openGraph?.images || [];

  const name = searchParams.name || "Bạn";
  const mainTitle = "Thiệp Cưới Hải Long & Minh Tâm | Lễ Thành Hôn";

  return {
    title: `${mainTitle} - Kính mời ${name}`,
    openGraph: {
      images: [metaData.main.graphImage, ...previousImages],
    },
  };
}

export default function Page({ params, searchParams }) {
  return (
    <Suspense fallback={null}>
      <Home />
    </Suspense>
  );
}
