"use client";
import React from "react";
import { Column, Flex, Heading, Media, SmartLink, Tag, Text } from "@once-ui-system/core";
import styles from "./Projects.module.scss"; // rename accordingly
import { formatDate } from "@/utils/formatDate";

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    tag?: string;
    image?: string;
    publishedAt: string;
  };
  thumbnail?: boolean;
  direction?: "row" | "column";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, thumbnail = true, direction = "column" }) => (
  <SmartLink fillWidth unstyled style={{ borderRadius: "var(--radius-l)" }} href={`/projects/${project.slug}`}>
    <Flex direction={direction} radius="l" className={styles.hover} fillWidth mobileDirection="column">
      {project.image && thumbnail && (
        <Media
          priority
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 640px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="l"
          src={project.image}
          alt={`Thumbnail of ${project.title}`}
          aspectRatio="16 / 9"
        />
      )}
      <Column fillWidth gap="4" padding="24" vertical="center">
        <Heading as="h2" variant="heading-strong-l">{project.title}</Heading>
        <Text variant="label-default-s" onBackground="neutral-weak">{formatDate(project.publishedAt, false)}</Text>
        {project.tag && <Tag className="mt-12" label={project.tag} variant="neutral" />}
      </Column>
    </Flex>
  </SmartLink>
);

export default ProjectCard;
