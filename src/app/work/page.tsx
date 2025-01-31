import type { Metadata } from "next";
import Heading from "../../components/Heading";
import ProjectCard from "../../components/ProjectCard";
import data, { WorkItemProps } from "../data/data";

export const metadata: Metadata = {
  title: "My work | Martin Brutvan",
  description:
    "Work examples produced by Martin Brutvan, including React/Typescript development, visual and UX design, and so much more.",
};

export default function Work() {
  const workData = data.work;
  const workList = workData.map((workItem: WorkItemProps, i: number) => {
    const { isActive, skills, slug, summary, thumbnail, title } = workItem;
    return (
      isActive && (
        <>
          <ProjectCard
            thumbnail={thumbnail}
            key={`project_card_${i}`}
            skills={skills}
            slug={slug}
            summary={summary}
            title={title}
          />
        </>
      )
    );
  });

  return (
    <>
      <Heading
        className="text-light-heading-secondary mb-6 leading-[1.2]"
        fontFamily="alt"
        level="h1"
        size="heading3"
      >
        My work
      </Heading>
      <p className="subheading1 mb-16">
        With my skills spanning <strong>multiple disciplines</strong>, I have
        worked on projects where I am the sole contributor as well as projects
        where I fill specific design or engineering roles, depending on what is
        needed. In either scenario, I am able to{" "}
        <strong>communicate effectively</strong> regardless of the
        audience&mdash;I streamline and distill complex information for{" "}
        <strong>stakeholders</strong>, or use language that is explicit to{" "}
        <strong>engineers</strong> or <strong>designers</strong>.
      </p>
      <div className="grid grid-cols w-full gap-16">
        {workList}
      </div>
    </>
  );
}
