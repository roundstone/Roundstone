import { MetadataRoute } from "next";
import { COMPANY, SERVICES, PORTFOLIO_PROJECTS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/work",
    "/contact",
  ].map((route) => ({
    url: `${COMPANY.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const services = SERVICES.map((service) => ({
    url: `${COMPANY.url}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const projects = PORTFOLIO_PROJECTS.map((project) => ({
    url: `${COMPANY.url}/work/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...services, ...projects];
}
