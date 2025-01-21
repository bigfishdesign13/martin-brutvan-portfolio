import Heading from "../components/Heading";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-[65vh] justify-center">
        <div className="flex items-center md:items-start flex-col md:ps-16 py-[4rem] md:border-s-[12px] md:border-light-border-tertiary md:w-min">
          <Heading
            level="h1"
            size="display1"
            // className="font-heading base:text-base sm:text-sm md:text-md lg:text-lg xl:text-xl text-light-heading-primary"
            className="text-light-heading-primary leading-[.72] text-center md:text-left"
          >
            Martin Brutvan
          </Heading>
          <Heading
            level="h2"
            size="heading4"
            fontFamily="alt"
            className="text-light-heading-tertiary mt-4 leading-[1.2] text-center md:text-left"
          >
            design technologist
          </Heading>
          <p className="flex flex-col md:flex-row items-center mt-2 md:mt-0 text-light-heading-secondary text-[22px] font-bold">
            <span>designer</span>
            <span className="mx-2 text-light-border-primary hidden md:inline">
              &bull;
            </span>
            <span>engineer</span>
            <span className="mx-2 text-light-border-primary hidden md:inline">
              &bull;
            </span>
            <span>communicator</span>
          </p>
        </div>
      </div>
    </>
  );
}
