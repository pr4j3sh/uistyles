import { Suspense } from "react";
import { HomeFinder } from "@/components/HomeFinder";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeFinder />
    </Suspense>
  );
}
