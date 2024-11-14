import Heading from "../components/Heading";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col content-center h-[90%]">
        <div className="flex flex-col ps-16 py-[4rem] border-s-[12px] border-light-border-primary w-min">
          <Heading
            level="h1"
            size="display1"
            // className="font-heading base:text-base sm:text-sm md:text-md lg:text-lg xl:text-xl text-light-heading-primary"
            className="text-light-heading-primary leading-[.72]"
          >
            Martin Brutvan
          </Heading>
          <Heading
            level="h2"
            size="heading4"
            fontFamily="alt"
            className="text-light-heading-tertiary mt-4 leading-[1.2]"
          >
            design technologist
          </Heading>
          <p className="text-light-heading-secondary text-[22px] font-bold">
            developer
            <span className="mx-2 text-light-border-primary">&bull;</span>
            designer
            <span className="mx-2 text-light-border-primary">&bull;</span>
            communicator
          </p>
        </div>
      </div>
    </>
  );
}
