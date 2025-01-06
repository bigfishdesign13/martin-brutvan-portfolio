import Heading from "../../components/Heading";
import Image from "next/image";
import Link from "next/link";
import { SkillTypes } from "../../components/ProjectCard";

export interface WorkItemProps {
  fullStory: string | JSX.Element;
  image: string;
  skills: SkillTypes[];
  slug: string;
  summary: string;
  title: string;
}
export interface WorkDataProps {
  work: WorkItemProps[];
}

// export interface WorkDataProps {
//   filter(arg0: (workItem: WorkItemProps[]) => any): unknown;
//   map(arg0: (workItem: WorkItemProps, key: number) => import("react").JSX.Element): unknown;
//   [index: number]: WorkItemProps;
// }

// interface WorkDataProps extends Array<WorkItemProps> {}

const data = {
  work: [
    {
      fullStory: (
        <>
          <Image
            alt="Reservoir Design System"
            className="bg-light-surface-tertiary mb-8 rounded-2xl"
            height={320}
            src="/work/reservoir-hero-image.png"
            width={1280}
          />
          <p className="subheading1 bg-light-surface-primary">
            The <strong>NYPL Reservoir Design System</strong> is the base for
            the UI/UX design and front-end development of the NYPL web
            applications. As the sole <strong>design technologiest</strong> at
            NYPL, I organize and contribute to all aspects of the design system,
            including product planning, UX and visual design, development, and
            writing detailed documentation.
          </p>
          <p>
            While I am highly effective working closely with designers and
            engineers across the organization to create and enhance the design
            system, I find that what requires the most effort is getting all
            parties to fully embrace and adopt the system. Building effective
            components and evangelizing benefits like consistency and improved
            ROI is not enough. In an environment where the design system is new
            and somewhat unknown, vigilance and thoughtful consideration is
            required to help stakeholders understand the design system can be a
            catalyst for effective team development and not an impediment.
          </p>

          <Heading className="mt-8" fontFamily="alt" size="heading4">
            Ease of use
          </Heading>
          <p>
            If a system is not easy to use, it will not be used voluntarily.
            Furthermore, if designers and engineers are forced to use tools by
            way of a mandate, the potential for resentment and pushback will be
            high. With that in mind, to foster interest, trust, and curiosity, I
            go out of my way to meet users where they are and provide tools that
            allow for independent discovery and resources that illustrate
            benefits. Through their own exploration, designers and engineers can
            see what it takes to implement and utilize the design system.
          </p>

          <Heading className="mt-8" fontFamily="alt" level="h3" size="heading5">
            Delivery
          </Heading>
          <p>
            Utilizing{" "}
            <Link href="https://figma.com" target="_blank">
              Figma
            </Link>{" "}
            for the visual design side of the Reservoir Design System allows for
            shared design libraries with automated and asynchronous distribution
            of assets, including dynamic components, styles, and design tokens.
            I mentor product designers about Figma functionality and best
            practices to ensure that the design team is comfortable with the
            system and free to focus on design problems, not technical problems.
          </p>
          <p>
            For web app development, the React component library is delivered
            through the ubiquitous{" "}
            <Link
              href="https://www.npmjs.com/package/@nypl/design-system-react-components"
              target="_blank"
            >
              npm public registry
            </Link>
            , making the design system easily accessible. The design system
            utilizes standard semantic versioning to publish updates to the
            React library code base and consuming apps can easily pull in new
            versions of the design system as needed and on their own schedule.
            Developers of consuming apps also have access to the design
            system&apos;s{" "}
            <Link
              href="https://github.com/NYPL/nypl-design-system"
              target="_blank"
            >
              GitHub repo
            </Link>{" "}
            and can contribute updates and improvements as needed.
          </p>

          <Heading className="mt-8" fontFamily="alt" level="h3" size="heading5">
            Resources
          </Heading>
          <p>
            Providing comprehensive documentation empowers designers and
            engineers with the ability and drive to learn about and understand
            the philosophy, guidelines, patterns, and components that make up
            the design system. With that, the design system can be used freely
            and with confidence.
          </p>
          <p>
            End-to-end processes like component creation and QA testing are
            mapped out and described with governance processes that define when
            and how things get done within the design system. Designers and
            engineers, and more importantly leadership teams and indirect
            stakeholders, can quickly see where a project stands and, with
            responsibilities clarified, easily understand how it will move
            forward.
          </p>
          <p>
            <Link href="/download/Example-Governance-Doc.pdf" target="_blank">
              GOVERNANCE DOC EXAMPLE
            </Link>
          </p>
          <p>
            Every component in the design system has a written source of truth
            referred to as a specification document, or spec doc. The spec doc
            is a compilation of UX expectations, accessibility guidance,
            functional specifications, and technical notes detailing the React
            component, including prop definitions and data structures. The spec
            doc is used as a resource for both component visual design and React
            development.
          </p>
          <p>
            <Link href="/download/Example-Spec-Doc.pdf" target="_blank">
              SPEC DOC EXAMPLE
            </Link>
          </p>
          <p>
            The display page for a component in Reservoir&apos;s visual design
            library not only shows all of a component&apos;s variants, it also
            includes specifics from the spec doc to detail use cases and explain
            accessibility. Designers have direct access to a component&apos;s
            intended use and best practices, as well as a direct link to the
            coded version of a component in Storybook, the front-end display for
            Reservoir&apos;s React component library.
          </p>
          <p>
            <Link
              href="https://www.figma.com/design/tolU6cQwZMoP2SpmQQrAcI/Martin-Brutvan-%7C-Design-Technologist?node-id=142-881&t=qtMa4HaPW8HU4dJd-11"
              target="_blank"
            >
              FIGMA DISPLAY PAGE EXAMPLE
            </Link>
          </p>
          <p>
            Similarly, the documentation for each component in the design system
            explains how a component is intended to be used, detailing the UX
            and accessibility standards. It also provides code examples and
            in-depth details about engineering specs to aid developers in
            implementing components in consuming apps.
          </p>
          <p>
            While the docs in Storybook house technical details specific for
            engineering, they are also the home of information that guides the
            overall direction and implementation of the Reservoir Design System,
            including a mission statement and charter, the NYPL web style guide
            and pattern library, and overarching accessibility standards and
            guidelines.
          </p>
          <p>
            <Link
              href="https://nypl.github.io/nypl-design-system/reservoir/v3/?path=/docs/components-feedback-banner--docs"
              target="_blank"
            >
              STORYBOOK EXAMPLE
            </Link>
          </p>

          <Heading className="mt-8" fontFamily="alt" size="heading4">
            Relationships
          </Heading>
          <p>
            Creating relevant components and providing thorough documentation
            creates a strong base for a design system and provides a source of
            truth that an organization can rely on. Nevertheless, what really
            makes a design system excel is the corporate culture around a design
            system and the relationships that develop between the teams that use
            it.
          </p>
          <Heading className="mt-8" fontFamily="alt" level="h3" size="heading5">
            Partnering
          </Heading>
          <p>
            I oversee UX exploration for the design system components, including
            stakeholder interviews, heuristic evaluation, competitive analysis,
            and user research. Partnering with and assisting UX designers allows
            me to guide the UX process and goals, but more importantly, I have
            insight into how designers are working and the unique idiosyncrasies
            of the apps that are using the design system. With these
            perspectives, I tailor Figma components and workflow processes to
            fit the needs of the designers and their projects. I also judge
            comfort level and trust, which aids with planning the schedule and
            scope of larger design system changes that may impact the design
            workflow.
          </p>
          <Heading className="mt-8" fontFamily="alt" level="h3" size="heading5">
            Empathy
          </Heading>
          <p>
            I have a close working relationship with engineers who are using the
            design system in their web apps. Understanding the basic
            architecture of the consuming apps and hearing directly from
            front-end developers about the design patterns they are using or
            possible pain points in implementing design system components boosts
            empathy and sensitivity when considering the specs and intended use
            cases for a new component. For example, extending the level of
            composibility was necessary across the design system as it was
            increasingly being used in an app running React on top of a headless
            CMS.
          </p>
          <Heading className="mt-8" fontFamily="alt" level="h3" size="heading5">
            Feedback
          </Heading>
          <p>
            If a design system is planned and implemented in a vacuum without
            insight into how its elements are ultimately being used, it is
            impossible to know if it is solving the problems or attaining the
            goals that were defined when the decision was made to create the
            design system. Is it making design and development easier? Harder?
            Is it even being used? Is the design system a waste of time? Hearing
            from design system users is vital.
          </p>
          <p>
            The direct relationships I have with the designers and engineers
            throughout NYPL provide one-on-one opportunities for discussions and
            feedback, but that is only one of many methods available for
            evaluations and bug reporting.
          </p>
          <p>
            The Agile ceremonies that I run during a standard sprint lifecycle
            (planning, refinement, standups, retrospective, and demo) offer
            group settings for designers and engineers to speak openly about the
            design system. In addition, the design system team runs
            retrospective meetings after consuming apps have adopted versions of
            the design system that include significant updates. For example,
            major version updates or new components.
          </p>
          <p>
            That being said, having a chat about the design system is not always
            convenient nor applicable for some issues. There are times when it
            is earlier to write out the details. Or perhaps someone is not
            comfortable discussing a problem directly. For those cases, other
            avenues for feedback are provided. Design system stakeholders and
            users are encouraged to utilize our Jira ticketing system as needed.
            Engineers are also asked to submit PRs to the design system&apos;s
            GitHub repo when it is more effective to illustrate an improvement
            or bug with a working example. If anonymous reporting is required, a
            standalone feedback form is available and, if necessary, it is
            understood that leadership may be approached.
          </p>
          <Heading className="mt-8" fontFamily="alt" level="h3" size="heading5">
            Company culture
          </Heading>
          <p>
            I am a proponent of open communication between individuals and
            teams. I work to remove the often unacknowledged wall between
            designers and engineers and I encourage the individuals within the
            two disciplines to work closely and communicate throughout a project
            lifecycle. This open atmosphere fosters the
            qualities&mdash;including communication, respect, and
            trust&mdash;that continuously improve the NYPL Reservoir Design
            System.
          </p>
          <Heading className="mt-8" fontFamily="alt" size="heading4">
            Links
          </Heading>
          <ul className="mt-4">
            <li>
              <Link
                href="https://github.com/NYPL/nypl-design-system"
                target="_blank"
              >
                Reservoir GitHub repo
              </Link>
            </li>
            <li>
              <Link
                href="https://www.npmjs.com/package/@nypl/design-system-react-components"
                target="_blank"
              >
                Reservoir npm package
              </Link>
            </li>
            <li>
              <Link
                href="https://nypl.github.io/nypl-design-system/reservoir/v3"
                target="_blank"
              >
                Reservoir Storybook
              </Link>
            </li>
          </ul>
        </>
      ),
      image: "/work/reservoir.svg",
      skills: [
        "Accessibility",
        "React",
        "Typescript",
        "Documentation",
        "UX design",
        "Visual design",
        "Storybook",
      ],
      slug: "nypl-reservoir-design-system",
      summary:
        "The Reservoir Design System is the base for the UI/UX design and front-end development of the NYPL web application.",
      title: "NYPL Reservoir Design System",
    },
    {
      image: "/work/wes.svg",
      skills: ["HTML", "CSS/SCSS", "JavaScript", "Responsive", "WordPress"],
      slug: "wes-strategic-plan",
      summary:
        "The website for the Washington Episcopal School Strategic Plan was built using the WordPress CMS. The site design is non-traditional and required meticulous implementation of enhanced page builder tools. Custom parallax coding was used to create movement and playfulness throughout the site.",
      title: "WES Strategic Plan",
    },
    {
      image: "/work/baacf.png",
      skills: ["HTML", "CSS/SCSS", "JavaScript", "Responsive", "WordPress"],
      slug: "baacf",
      summary:
        "The Binghamton Arts & Athletics Community Fund needed to move fast to establish brand identity and get an online presence in the form of a website and social media up and running. I worked closely with the BAACF Board members to iterate over logo and branding concepts, finalizing the logo and overall brand and publishing a WordPress driven website within eights weeks.",
      title: "Binghamton Arts & Athletics Community Fund",
    },
    {
      image: "/work/baacf.png",
      skills: ["CSS/SCSS", "HTML", "Javascript", "WordPress"],
      slug: "dreitonal",
      summary:
        "The Dreitonal project required a WordPress multilingual website. To simplify site maintenance, the menu system was enhanced to dynamically create links to the corresponding multilingual pages, allowing site content creators to focus on the content without having to spend extra time maintaining the site navigation.",
      title: "Dreitonal",
    },
    {
      image: "/work/baacf.png",
      skills: ["CSS/SCSS", "Formstack", "HTML", "Javascript", "WordPress"],
      slug: "abortion-defense-network",
      summary:
        "The Abortion Defense Network site is built atop the WordPress CMS and incorporates tight intergration with Formstack, a third party form builder and data management system.",
      title: "Abortion Defense Network",
    },
    {
      image: "/work/baacf.png",
      skills: ["Bonterra", "CSS/SCSS", "HTML", "Javascript", "WordPress"],
      slug: "newark-safety",
      summary:
        "The Newark Safety site is built using the WordPress CMS and incorporates tight intergration with Bonterra, a third party software package focused on data collection and social media engagement for nonprofit organizations.",
      title: "Newark Safety",
    },
    {
      image: "/work/baacf.png",
      skills: [
        "CSS",
        "Database design",
        "HTML",
        "Javascript",
        "PHP",
        "Responsive",
      ],
      slug: "agw-events",
      summary:
        "The AGW platform is a scalable event registration portal. Each event has a dedicated custom website with restricted access. Site administrators can utilize backend utilities to generate reports about each event's registrants.",
      title: "AGW Events",
    },
    {
      image: "/work/baacf.png",
      skills: [
        "CSS",
        "Graphic design",
        "HTML",
        "Javascript",
        "jQuery",
        "SCORM",
        "Streaming video",
      ],
      slug: "elearning-player",
      summary:
        "The eLearning Player is a single page application developed as the primary courseware to delive the core education products for SmartPros, A Kaplan Company. The original application was developed using Adobe Flash and eventually converted to a full native HTML application. The application offers varying course styles with multiple learning components and supports thousands of course titles.",
      title: "eLearning Player",
    },
    {
      image: "/work/baacf.png",
      skills: ["Logo design", "Photography", "Print design", "Social media"],
      slug: "the-count-a-musical",
      summary:
        "Logo design, print materials and event photography for The Count, A Musical.",
      title: "The Count, A Musical",
    },
  ],
};

export default data;
