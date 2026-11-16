import { notFound, permanentRedirect } from "next/navigation";

const serviceAnchors: Record<string, string> = {
  "business-websites": "business-websites",
  "web-apps-dashboards": "web-apps-dashboards",
  "ecommerce-websites": "ecommerce",
  ecommerce: "ecommerce",
  "mobile-apps": "mobile-apps",
  "ai-automation": "ai-automation",
};

export function generateStaticParams() {
  return Object.keys(serviceAnchors).map((slug) => ({ slug }));
}

export default async function LegacyServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const anchor = Object.hasOwn(serviceAnchors, slug) ? serviceAnchors[slug] : undefined;

  if (!anchor) {
    notFound();
  }

  permanentRedirect(`/services#${anchor}`);
}
