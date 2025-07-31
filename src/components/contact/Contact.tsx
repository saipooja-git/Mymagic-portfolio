"use client";
import React from "react";
import styles from "./contact.module.scss";
import { contact as contactContent } from "@/resources";
import { FaEnvelope, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.card}>
        <h2 className={styles.heading}>
          <span className={styles.emoji}>📫</span> Let's Connect
        </h2>
        <p className={styles.subtext}>
          I'm always open to new opportunities, ideas, or a quick chat ☕️
        </p>
        <div className={styles.links}>
          <a href={`mailto:${contactContent.email}`} className={styles.link}>
            <FaEnvelope /> {contactContent.email}
          </a>
          <a
            href={contactContent.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={contactContent.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaFileDownload /> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
