// ✅ Client-safe
import { projects } from "@/resources";

export function getProjects() {
  return (projects.items || []).map((project) => ({
    slug: project.slug,
    metadata: {
      title: project.title,
      tag: project.tag,
      image: project.image,
      // publishedAt: project.publishedAt,
    },
  }));
}
