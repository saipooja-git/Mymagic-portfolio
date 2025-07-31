import { Metadata } from "next";
import React from "react";
import { Heading } from "@once-ui-system/core";
import { Projects } from "@/components/Project/Projects";
import { projects } from "@/resources";

export const metadata: Metadata = {
  title: projects.title,
  description: projects.description,
};

export default function ProjectsPage() {
  return (
    <>
      <Heading as="h1" variant="heading-strong-xl" paddingBottom="24">
        {projects.title}
      </Heading>
      <Projects columns="2" thumbnail direction="column" />
    </>
  );
}
