"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";
import styles from "./Header.module.scss";
import { routes, display, person, about, work, projects, contact } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";

const TimeDisplay: React.FC<{ timeZone: string; locale?: string }> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const tick = () => setCurrentTime(new Intl.DateTimeFormat(locale, { timeZone, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date()));
    tick(); const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone, locale]);
  return <>{currentTime}</>;
};

export const Header: React.FC = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex as="header" className={styles.position} fillWidth fitHeight padding="8" horizontal="center" zIndex={9} data-border="rounded">
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex background="page" border="neutral-alpha-weak" radius="m-4" shadow="l" padding="4" horizontal="center" zIndex={1}>
            <Flex gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />

              {routes["/about"] && <>
                <ToggleButton className="s-flex-hide" prefixIcon="person" href="/about" label={about.label} selected={pathname === "/about"} />
                <ToggleButton className="s-flex-show" prefixIcon="person" href="/about" selected={pathname === "/about"} />
              </>}

              {routes["/work"] && <>
                <ToggleButton className="s-flex-hide" prefixIcon="grid" href="/work" label={work.label} selected={pathname.startsWith("/work")} />
                <ToggleButton className="s-flex-show" prefixIcon="grid" href="/work" selected={pathname.startsWith("/work")} />
              </>}

              {routes["/projects"] && <>
                <ToggleButton className="s-flex-hide" prefixIcon="code" href="/projects" label={projects.label} selected={pathname.startsWith("/projects")} />
                <ToggleButton className="s-flex-show" prefixIcon="code" href="/projects" selected={pathname.startsWith("/projects")} />
              </>}

              {routes["/contact"] && <>
                <ToggleButton className="s-flex-hide" prefixIcon="chat" href="/contact" label={contact.label} selected={pathname === "/contact"} />
                <ToggleButton className="s-flex-show" prefixIcon="chat" href="/contact" selected={pathname === "/contact"} />
              </>}

              {display.themeSwitcher && <>
                <Line background="neutral-alpha-medium" vert maxHeight="24" />
                <ThemeToggle />
              </>}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          {display.time && <Flex hide="s"><TimeDisplay timeZone="America/Phoenix" /></Flex>}
        </Flex>
      </Flex>
    </>
  );
};
