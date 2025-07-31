import { Metadata } from "next";
import { Heading } from "@once-ui-system/core";
import Projects from "@/components/Project/Projects"; // ✅ default import
import { projects } from "@/resources"; // ✅ lowercase - from content

// ✅ Page metadata for SEO
export const metadata: Metadata = {
  title: projects.title,
  description: projects.description,
};

// ✅ Component for page rendering
export default function Posts() {
  return (
    <>
      <Heading as="h1" variant="heading-strong-xl" paddingBottom="24">
        {projects.title}
      </Heading>
<Projects columns="2" thumbnail direction="column" />
    </>
  );
}
