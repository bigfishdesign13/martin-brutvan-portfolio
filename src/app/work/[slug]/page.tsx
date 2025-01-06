import Heading from "../../../components/Heading";
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

  const { fullStory, skills, title } = filteredDataAlt[0];

  return (
    <>
      {/* <h1>Title: {filteredData[0].title}</h1> */}
      <Heading
        className="text-light-heading-secondary mb-4 leading-[1.2]"
        fontFamily="alt"
        level="h1"
        size="heading3"
      >
        {title}
      </Heading>
      <SkillsList skills={skills} />
      <div className="full-story">{fullStory}</div>
    </>
  );
}

export default Page;
