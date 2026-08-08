import { Metadata } from "next";
import { COMPANY } from "./constants";

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = `${COMPANY.name} | Technology partner behind Nigeria's most trusted institutions`,
  description = "Since 2011, Roundstone Consulting has designed, built, and supported the software behind government agencies, leading foundations, and everyday financial services.",
  image = "/image/logo-full.jpeg",
  noIndex = false,
}: ConstructMetadataProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: COMPANY.url,
      siteName: COMPANY.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: COMPANY.name,
        },
      ],
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Roundstone", // Placeholder twitter handle
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: new URL(COMPANY.url),
  };
}
