import Heading from "../components/Heading";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-[65vh] justify-center">
        <div className="flex items-start flex-col md:ps-16 py-[4rem] md:border-s-[12px] md:border-light-border-tertiary md:w-min">
          <Heading
            level="h1"
            size="display1"
            // className="font-heading base:text-base sm:text-sm md:text-md lg:text-lg xl:text-xl text-light-heading-primary"
            className="text-light-heading-primary leading-[.72] text-left w-min"
          >
            Martin Brutvan
          </Heading>
          <div className="border-s-[12px] md:border-0 border-light-border-tertiary ps-4 py-4 md:py-0 sm:ps-8 md:ps-0 mt-8 md:mt-4">
            <Heading
              level="h2"
              size="heading4"
              fontFamily="alt"
              className="text-light-heading-tertiary leading-[1.15] text-left w-min md:w-auto"
            >
              design technologist
            </Heading>
            <p className="flex flex-row items-center mt-2 md:mt-0 text-light-heading-secondary text-[14px] sm:text-[18px] md:text-[22px] font-bold">
              <span>designer</span>
              <span className="mx-2 text-light-border-primary">
                &bull;
              </span>
              <span>engineer</span>
              <span className="mx-2 text-light-border-primary">
                &bull;
              </span>
              <span>communicator</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
