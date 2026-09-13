import { headers } from "next/headers";
import { Landing } from "@/components/landing";
import { productFromHost } from "@/lib/products";

// Caddy forwards `/home` from each product hostname to this service, so the
// hostname — not the path — selects which product is rendered here. The root
// path is the Techyst hub instead, which is why this no longer re-exports it.
async function product() {
  const incoming = await headers();
  return productFromHost(incoming.get("x-forwarded-host") || incoming.get("host"));
}

export async function generateMetadata() {
  const selected = await product();
  return { title: `${selected.name} | ${selected.category}`, description: selected.description };
}

export default async function ProductHome() {
  return <Landing product={await product()}  />;
}
