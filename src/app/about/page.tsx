import type { Metadata } from "next";
import Image from "next/image";
import Heading from "../../components/Heading";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "About me | Martin Brutvan",
  description:
    "I am a seasoned design technologist with extensive experience extensive UX design, and web development.",
};

export default function About() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-about w-full gap-8">
        <Image
          // className="dark:invert"
          alt="Martin Brutvan"
          className={`w-full border-2 border-light-border-secondary rounded-full fill-light-heading-secondary ${styles.pageContent2}`}
          height={100}
          priority
          src="/images/headshot.svg"
          width={100}
        />
        <div>
          <Heading
            level="h1"
            size="heading3"
            fontFamily="alt"
            className={`text-light-heading-secondary mb-6 leading-[1.2] ${styles.name}`}
          >
            Hi, I&apos;m Martin
          </Heading>
          <div className={styles.pageContent1}>
            <p className="subheading1 mb-6">
              I am a seasoned <strong>design technologist</strong> with
              extensive experience in <strong>visual and UX design</strong>,{" "}
              <strong>web development</strong>, and{" "}
              <strong>accessibility</strong>. I work seamlessly with both
              designers and engineers, often bridging the gap between the two
              disciplines to bring people together and solve problems as a team.
            </p>
            <p className="mb-6">
              Most recently, my focus has been on design systems and the
              tremendous benefits they provide, including UX and functional
              consistency, effective implementation of accessibility standards,
              and ease-of-use. Previously, my main role encompassed UI/UX design
              and front-end development for private in-house systems. I worked
              across multiple teams to ensure design fidelity and expected
              functionality for a release candidate were met before deployment.
              I often assisted with development by providing solutions for
              challenges met when translating from design to code.
            </p>
            <p className="mb-6">
              Independently, I am often working on WordPress projects, handling
              all aspects of the web development cycle from start to
              finish&mdash;including designing wireframes and mockups, coding
              custom themes and page templates, configuring hosting and
              deploying the final product.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
