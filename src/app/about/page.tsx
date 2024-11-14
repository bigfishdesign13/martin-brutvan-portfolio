import Image from "next/image";
import Heading from "../../components/Heading";

export default function About() {
  return (
    <>
      <div className="grid grid-cols-about w-full gap-8">
        <Image
          // className="dark:invert"
          alt="Martin Brutvan"
          className="w-full border-2 border-light-border-secondary rounded-full fill-light-heading-secondary"
          height={100}
          priority
          src="/headshot.svg"
          width={100}
        />
        <Heading
          level="h1"
          size="heading4"
          fontFamily="alt"
          className="text-light-heading-secondary mt-4 leading-[1.2]"
        >
          Hi, I&apos;m Martin
        </Heading>
      </div>
    </>
  );
}
