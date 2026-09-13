import type { Metadata } from "next";
import { Space } from "@/components/space";

export const metadata: Metadata = {
  title: "Techyst | Five tools. One stack.",
  description:
    "Resource planning, delivery, customer conversations, documents and search — self-hosted on infrastructure you control.",
};

export default function Page() {
  return <Space />;
}
