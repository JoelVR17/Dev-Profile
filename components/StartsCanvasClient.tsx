"use client";

import dynamic from "next/dynamic";

const StartsCanvas = dynamic(() => import("@/components/main/StakBackground"), {
  ssr: false,
});

export default function StartsCanvasClient() {
  return <StartsCanvas />;
}
