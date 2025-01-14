import Image from "next/image";
import Heading from "../../components/Heading";

export default function About() {
  return (
    <>
      <Heading
        level="h1"
        size="heading3"
        fontFamily="alt"
        className="text-light-heading-secondary mb-6 leading-[1.2]"
      >
        Hi, I&apos;m Martin
      </Heading>
      <p className="subheading1 mb-6">
        I am a seasoned <strong>design technologist</strong> with over 25 years
        experience in <strong>visual and UX design</strong>,{" "}
        <strong>web development</strong>, and <strong>accessibility</strong>. I
        work seamlessly with both designers and engineers, often bridging the
        gap between the two disciplines to bring people together and solve
        problems as a team.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-about w-full gap-8">
        <Image
          // className="dark:invert"
          alt="Martin Brutvan"
          className="w-full border-2 border-light-border-secondary rounded-full fill-light-heading-secondary"
          height={100}
          priority
          src="/headshot.svg"
          width={100}
        />
        <div>
          <p className="mb-6">
            Most recently, my focus has been on <strong>design systems</strong>{" "}
            and the tremendous benefits they provide, including UX and
            functional consistency, effective accessibility standards, and
            ease-of-use. Previously, my main role encompassed{" "}
            <strong>UI/UX design</strong> and{" "}
            <strong>front-end development</strong> for private in-house systems
            while also integrating with other web development teams to ensure
            design fidelity was met before deployment, guiding front-end
            developers and providing solutions for challenges met when
            translating from design to code.
          </p>
          <p className="mb-6">
            Independently, I have most recently been focusing on{" "}
            <strong>WordPress</strong> projects, handling all aspects of the web
            development cycle from start to finish &mdash; including designing
            wireframes and mockups, coding custom themes and page templates,
            configuring hosting and deploying the final product.
          </p>
        </div>
      </div>
    </>
  );
}
