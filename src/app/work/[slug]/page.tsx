import Heading from "../../../components/Heading";
import ProjectHeroImage from "../../../components/ProjectHeroImage";
import SkillsList from "../../../components/SkillsList";
import data, { WorkItemProps } from "../../data/data";

// Define slug values to use for build
export async function generateStaticParams() {
  const workData = data.work;
  return workData.map((workItem: WorkItemProps) => ({
    slug: workItem.slug,
    fullStory: workItem.fullStory,
    heroImage: workItem.heroImage,
    introduction: workItem.introduction,
    skills: workItem.skills,
    title: workItem.title,
  }));
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const passedSlug = (await params).slug;
  const workData = data.work;
  const filteredData: WorkItemProps[] = workData.filter(
    (workItem: WorkItemProps) => {
      return workItem.slug === passedSlug;
    }
  );

  const { fullStory, heroImage, introduction, skills, title } = filteredData[0];

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
      {introduction && (
        <p className="subheading1 bg-light-surface-primary">{introduction}</p>
      )}
      <div className="full-story">{fullStory}</div>
    </>
  );
}

export default Page;
