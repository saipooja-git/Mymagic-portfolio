"use client";
import React from "react";
import styles from "./Projects.module.scss";
import { getProjects } from "@/utils/utils";
import Image from "next/image";

interface ProjectsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3"; // ✅ strictly typed options
  thumbnail?: boolean;
  direction?: "row" | "column";
}

const Projects: React.FC<ProjectsProps> = ({ range }) => {
  const projects = getProjects();

  const displayed =
    range && range.length === 2
      ? projects.slice(range[0] - 1, range[1])
      : projects;

  return (
    <section className={styles.projectsWrapper}>
      {displayed.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={project.slug}
            className={`${styles.projectCard} ${
              isEven ? styles.normal : styles.reversed
            }`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={project.metadata.image}
                alt={project.metadata.title}
                width={500}
                height={300}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.content}>
              <h3>{project.metadata.title}</h3>
              <p className={styles.tag}>{project.metadata.tag}</p>
              
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
