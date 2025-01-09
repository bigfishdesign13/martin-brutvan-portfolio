import Heading from "../../../components/Heading";
import ProjectHeroImage from "../../../components/ProjectHeroImage";
import SkillsList from "../../../components/SkillsList";
import data, { WorkItemProps } from "../../data/data";

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const passedSlug = (await params).slug;
  const workData = data.work;
  const filteredDataAlt: WorkItemProps[] = workData.filter(
    (workItem: WorkItemProps) => {
      console.log(workItem.slug);
      console.log(passedSlug);
      console.log("---");
      return workItem.slug === passedSlug;
    }
  );

  // const filteredData = workData.map((workItem: WorkItemProps, i: number) => {
  //   const { slug } = workItem;
  //   console.log(i);
  //   console.log(slug);
  //   console.log(passedSlug);
  //   return slug.toLocaleLowerCase() === passedSlug.toLocaleLowerCase()
  //     ? workItem
  //     : null;
  // });

  const { fullStory, heroImage, skills, title } = filteredDataAlt[0];

  return (
    <>
      <Heading
        className="text-light-heading-secondary mb-4 leading-[1.2]"
        fontFamily="alt"
        level="h1"
        size="heading3"
      >
        {title}
      </Heading>
      <SkillsList skills={skills} />
      <ProjectHeroImage alt={heroImage.alt} src={heroImage.src} />
      <div className="full-story">{fullStory}</div>
    </>
  );
}

export default Page;
