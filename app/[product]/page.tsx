import { notFound } from "next/navigation";
import { Landing } from "@/components/landing";
import { products, type ProductKey } from "@/lib/products";

export function generateStaticParams() { return Object.keys(products).map(product => ({ product })); }

export async function generateMetadata({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  const selected = products[product as ProductKey];
  if (!selected) return {};
  return {
    title: `${selected.name} | ${selected.category}`,
    description: selected.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  const selected = products[product as ProductKey];
  if (!selected) notFound();
  return <Landing product={selected} />;
}
