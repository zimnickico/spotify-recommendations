import { Images } from "./images";

export function Hero() {

  return (
    <div className="flex flex-col max-w-full overflow-visible z-10">
      <h1 className="pt-24 md:pt-32 text-center z-10 m-auto text-4xl lg:text-6xl lg:text-5xl font-[400] leading-normal">
        Find your next <br /> favourite song.
      </h1>
      <p
      className="text-gray-400 z-10 m-auto text-center mt-6 lg:mt-8 text-sm md:text-md lg:text-lg lg:max-w-md max-w-xs">Get spotify backed song recommendations, based on your preference & share them with friends. </p>
      <Images/>
    </div>
  );
}
