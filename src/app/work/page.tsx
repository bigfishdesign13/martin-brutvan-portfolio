// import Image from "next/image";
import Heading from "../../components/Heading";
import ProjectCard from "../../components/ProjectCard";
import data, { WorkItemProps } from "../data/data";

export default function Work() {
  // console.log(workData);
  const workData = data.work;
  const workList = workData.map((workItem: WorkItemProps, i: number) => {
    console.log(i);
    const { image, skills, slug, summary, title } = workItem;
    return (
      <>
        <ProjectCard
          image={image}
          key={`project_card_${i}`}
          skills={skills}
          slug={slug}
          summary={summary}
          title={title}
        />
      </>
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
      <p className="subheading1 mb-6">
        Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra
        augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id
        elit.
      </p>
      <div className="grid grid-cols-projects w-full gap-8">{workList}</div>
    </>
  );
}
