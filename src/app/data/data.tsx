import Heading from "../../components/Heading";
import Image from "next/image";
import Link from "next/link";
import { SkillTypes } from "../../components/SkillsList";

export interface HeroImageProps {
  alt: string;
  src: string;
}

export interface WorkItemProps {
  fullStory: string | JSX.Element;
  heroImage: HeroImageProps;
  introduction?: string | JSX.Element;
  isActive: boolean;
  skills: SkillTypes[];
  slug: string;
  summary: string;
  thumbnail: string;
  title: string;
}

export interface WorkDataProps {
  work: WorkItemProps[];
}

const data: WorkDataProps = {
  work: [
    // Reservoir
    {
      fullStory: (
        <>
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

          <Heading className="mt-8" fontFamily="alt" size="heading4">
            Background
          </Heading>
          <p className="mt-4">
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
        </>
      ),
      heroImage: {
        alt: "NYPL Reservoir Design System",
        src: "/work/reservoir-hero.jpg",
      },
      introduction: (
        <>
          The <strong>NYPL Reservoir Design System</strong> is the base for the
          UI/UX design and front-end development of the NYPL web applications.
          As the sole <strong>design technologist</strong> at NYPL, I organize
          and contribute to all aspects of the design system, including product
          planning, UX and visual design, development, and writing detailed
          documentation.
        </>
      ),
      isActive: true,
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
        "The base for the UI/UX design and front-end development of web applications for the New York Public Library.",
      thumbnail: "/work/reservoir-thumbnail.svg",
      title: "NYPL Reservoir Design System",
    },
    // WES
    {
      fullStory: (
        <>
          <Heading className="mt-8" fontFamily="alt" size="heading4">
            Links
          </Heading>
          <ul className="mt-4">
            <li>
              <Link href="https://wesstrategicplan.com" target="_blank">
                WES Strategic Plan website
              </Link>
            </li>
          </ul>

          <Heading className="mt-8" fontFamily="alt" size="heading4">
            Background
          </Heading>
          <p className="mt-4">
            The designs for this site were provided by a third-party firm. It
            was my responsibility to create the site using WordPress to
            execution the visual designs and site content. I worked closely with
            the design firm to make design recommendations for improved
            aesthetics and accessibility.
          </p>

          <Heading className="mt-8" fontFamily="alt" size="heading4">
            Execution
          </Heading>
          <p>
            The limited scope of the site content was best executed with the
            Total WordPress theme. The granular visual style controls available
            in the page builder tools were perfect for executing the complex
            page designs, allowing for manual placement and treatment of
            elements throughout the layout on each page.
          </p>

          <Heading className="mt-8" fontFamily="alt" level="h3" size="heading5">
            Custom parallax
          </Heading>
          <p>
            Due to the unique treatment of design elements throughout the site,
            a blanket parallax treatment for all of the dynamic elements was not
            possible. To execute the paralax treatment to meet my expectations,
            I employed a custom jQuery plugin and added custom parallax styles
            to each element that was to be set in motion.
          </p>

          <Heading className="mt-8" fontFamily="alt" level="h3" size="heading5">
            Mobile
          </Heading>
          <p>
            The responsive treatment for the mobile viewport required further
            style and parallax customizations for most elements throughout the
            site.
          </p>
        </>
      ),
      heroImage: {
        alt: "The Washington Episcopal School Strategic Plan website",
        src: "/work/wes-hero.jpg",
      },
      introduction: (
        <>
          The Washington Episcopal School Strategic Plan website utilizes a{" "}
          <strong>non-traditional design</strong> to align the site&apos;s look
          and feel with the exciting nature of the message the site aims to
          relay. Built using the <strong>WordPress CMS</strong>, the intricate
          layout required meticulous implementation of enhanced page builder
          tools. To further the sites unique nature, custom{" "}
          <strong>parallax</strong> coding was used to create movement and
          playfulness throughout the site.
        </>
      ),
      isActive: true,
      skills: [
        "HTML",
        "CSS/SCSS",
        "JavaScript",
        "Responsive",
        "WordPress",
        "Accessibility",
      ],
      slug: "wes-strategic-plan",
      summary:
        "A non-traditional site design that required meticulous implementation of enhanced page builder tools.",
      thumbnail: "/work/wes-thumbnail.svg",
      title: "WES Strategic Plan",
    },
    // BAACF
    {
      fullStory: (
        <>
          <Heading className="mt-8" fontFamily="alt" size="heading4">
            Links
          </Heading>
          <ul className="mt-4">
            <li>
              <Link href="https://baacf.com" target="_blank">
                BAACF website
              </Link>
            </li>
          </ul>

          <Heading className="mt-8" fontFamily="alt" size="heading4">
            Deliverables
          </Heading>
          <Heading className="mt-8" fontFamily="alt" level="h3" size="heading5">
            Brand &amp; Logo
          </Heading>
          <Image
            alt="BAACF brand"
            className="p-8 mb-8"
            height={1280}
            src="/work/baacf-logo-specs.svg"
            width={1280}
          />
          <div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-3">
            <Image
              alt="BAACF horizonal color logo"
              className="p-8"
              height={768}
              src="/work/baacf-logo-horizontal-color.svg"
              width={768}
            />
            <Image
              alt="BAACF horizonal black logo"
              className="p-8"
              height={768}
              src="/work/baacf-logo-horizontal-black.svg"
              width={768}
            />
            <Image
              alt="BAACF horizonal white logo"
              className="p-8 bg-black"
              height={768}
              src="/work/baacf-logo-horizontal-white.svg"
              width={768}
            />
            <Image
              alt="BAACF vertical color logo"
              className="p-8"
              height={768}
              src="/work/baacf-logo-vertical-color.svg"
              width={768}
            />
            <Image
              alt="BAACF vertical color logo"
              className="p-8"
              height={768}
              src="/work/baacf-logo-vertical-black.svg"
              width={768}
            />
            <Image
              alt="BAACF vertical color logo"
              className="p-8 bg-black"
              height={768}
              src="/work/baacf-logo-vertical-white.svg"
              width={768}
            />
          </div>

          <Heading className="mt-8" fontFamily="alt" level="h3" size="heading5">
            Templates
          </Heading>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
            <Image
              alt="BAACF vertical color logo"
              className="border border-light-border-tertiary drop-shadow-lg"
              height={768}
              src="/work/baacf-email-template.png"
              width={768}
            />
            <Image
              alt="BAACF vertical color logo"
              className="border border-light-border-tertiary drop-shadow-lg"
              height={768}
              src="/work/baacf-leaders-day-flier-1.jpg"
              width={768}
            />
            <Image
              alt="BAACF vertical color logo"
              className="border border-light-border-tertiary drop-shadow-lg"
              height={768}
              src="/work/baacf-leaders-day-flier-2.jpg"
              width={768}
            />
          </div>

          <Heading className="mt-8" fontFamily="alt" level="h3" size="heading5">
            Social sharing
          </Heading>
          <Image
            alt="BAACF social sharing image"
            className="border border-light-border-tertiary drop-shadow-lg mt-8"
            height={768}
            src="/work/baacf-social-share-image.jpg"
            width={768}
          />
        </>
      ),
      heroImage: {
        alt: "The Binghamton Arts & Athletics Community Fund website",
        src: "/work/baacf-hero.jpg",
      },
      introduction: (
        <>
          The Binghamton Arts &amp; Athletics Community Fund (BAACF) needed to
          move fast to establish brand identity and get an online presence in
          the form of a website and social media up and running. I worked
          closely with the BAACF Board members to iterate over logo and branding
          concepts, finalizing the logo and overall brand and publishing a
          WordPress driven website within eights weeks.
        </>
      ),
      isActive: true,
      skills: [
        "HTML",
        "CSS/SCSS",
        "JavaScript",
        "Logo design",
        "Responsive",
        "WordPress",
      ],
      slug: "baacf",
      summary:
        "A fast moving project that required a large set of deliverables.",
      thumbnail: "/work/baacf-thumbnail.png",
      title: "Binghamton Arts & Athletics Community Fund",
    },
    // Dreitonal
    {
      fullStory: (
        <>
          <Heading className="mt-8" fontFamily="alt" size="heading4">
            Links
          </Heading>
          <ul className="mt-4">
            <li>
              <Link href="https://dreitonal.at" target="_blank">
                Dreitonal website
              </Link>
            </li>
          </ul>

          <Heading className="mt-8" fontFamily="alt" size="heading4">
            Something
          </Heading>
        </>
      ),
      heroImage: {
        alt: "Dreitonal, making sound music",
        src: "/work/dreitonal-hero.jpg",
      },
      introduction: (
        <>
          The Dreitonal project required a{" "}
          <strong>WordPress multilingual</strong> website. To simplify site
          maintenance, the menu system was enhanced to{" "}
          <strong>dynamically</strong> create links to the corresponding
          multilingual pages, allowing site content creators to focus on the
          content without having to spend extra time maintaining the site
          navigation.
        </>
      ),
      isActive: true,
      skills: ["CSS/SCSS", "HTML", "JavaScript", "WordPress"],
      slug: "dreitonal",
      summary:
        "The Dreitonal project required a WordPress multilingual website. To simplify site maintenance, the menu system was enhanced to dynamically create links to the corresponding multilingual pages, allowing site content creators to focus on the content without having to spend extra time maintaining the site navigation.",
      thumbnail: "/work/dreitonal-thumbnail.jpg",
      title: "Dreitonal",
    },
    // ADN
    {
      fullStory: (
        <>
          <p>Content...</p>
        </>
      ),
      heroImage: {
        alt: "Abortion Defense Network",
        src: "/work/adn-hero.jpg",
      },
      introduction: <></>,
      isActive: false,
      skills: ["CSS/SCSS", "Formstack", "HTML", "JavaScript", "WordPress"],
      slug: "abortion-defense-network",
      summary:
        "The Abortion Defense Network site is built atop the WordPress CMS and incorporates tight intergration with Formstack, a third party form builder and data management system.",
      thumbnail: "/work/blank-thumbnail.png",
      title: "Abortion Defense Network",
    },
    // Newark Safety
    {
      fullStory: (
        <>
          <p>Content...</p>
        </>
      ),
      heroImage: {
        alt: "Newark Safety",
        src: "/work/blank-hero.png",
      },
      introduction: <></>,
      isActive: false,
      skills: ["CSS/SCSS", "HTML", "JavaScript", "WordPress"],
      slug: "newark-safety",
      summary:
        "The Newark Safety site is built using the WordPress CMS and incorporates tight intergration with Bonterra, a third party software package focused on data collection and social media engagement for nonprofit organizations.",
      thumbnail: "/work/blank-thumbnail.png",
      title: "Newark Safety",
    },
    // AGW
    {
      fullStory: (
        <>
          <Heading className="mt-8" fontFamily="alt" size="heading4">
            Background
          </Heading>
          <p className="mt-4">
            The designs for this site were provided by a third-party firm. It
            was my responsibility to create the site using WordPress to
            execution the visual designs and site content. I worked closely with
            the design firm to make design recommendations for improved
            aesthetics and accessibility.
          </p>
        </>
      ),
      heroImage: {
        alt: "AGW Events",
        src: "/work/agw-hero.png",
      },
      introduction: (
        <>
          The AGW Events platform was a <strong>scalable</strong> event
          registration portal. Each event had a dedicated custom website with
          restricted access. Site administrators utilized{" "}
          <strong>backend utilities</strong> for site maintenance and to
          generate reports about each event&apos;s registrants.
        </>
      ),
      isActive: true,
      skills: [
        "CSS/SCSS",
        "Database design",
        "HTML",
        "JavaScript",
        "PHP",
        "Responsive",
        "Visual design",
      ],
      slug: "agw-events",
      summary:
        "A scalable event registration portal with backend utilities to site administration and reporting.",
      thumbnail: "/work/agw-thumbnail.png",
      title: "AGW Events",
    },
    {
      fullStory: (
        <>
          <p>Content...</p>
        </>
      ),
      heroImage: {
        alt: "The COunt, A Musical",
        src: "/work/blank-hero.png",
      },
      introduction: <></>,
      isActive: true,
      skills: ["Logo design", "Photography", "Print design", "Social media"],
      slug: "the-count-a-musical",
      summary:
        "Logo design, print materials and event photography for The Count, A Musical.",
      thumbnail: "/work/blank-thumbnail.png",
      title: "The Count, A Musical",
    },
    {
      fullStory: (
        <>
          <p>Content...</p>
        </>
      ),
      heroImage: {
        alt: "AIRC",
        src: "/work/blank-hero.png",
      },
      introduction: <></>,
      isActive: false,
      skills: [
        "CSS/SCSS",
        "Visual design",
        "HTML",
        "JavaScript",
        "jQuery",
        "SCORM",
      ],
      slug: "airc",
      summary: "TBD",
      thumbnail: "/work/blank-thumbnail.png",
      title: "AIRC",
    },
    {
      fullStory: (
        <>
          <p>Content...</p>
        </>
      ),
      heroImage: {
        alt: "SmartPros eLearning Player",
        src: "/work/blank-hero.png",
      },
      introduction: <></>,
      isActive: false,
      skills: [
        "CSS/SCSS",
        "Visual design",
        "HTML",
        "JavaScript",
        "jQuery",
        "SCORM",
        "Streaming video",
      ],
      slug: "elearning-player",
      summary:
        "The eLearning Player is a single page application developed as the primary courseware to delive the core education products for SmartPros, A Kaplan Company. The original application was developed using Adobe Flash and eventually converted to a full native HTML application. The application offers varying course styles with multiple learning components and supports thousands of course titles.",
      thumbnail: "/work/blank-thumbnail.png",
      title: "eLearning Player",
    },
  ],
};

export default data;
