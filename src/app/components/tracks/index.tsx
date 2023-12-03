import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SeeRecommendationsPreview from "./preview";

export function Tracks() {
  const [FetchedTracks, setFetchedTracks] = useState(new Array());
  const [currentIndex, setCurrentIndex] = useState(0);

  const audioRef = useRef(FetchedTracks.at(0)?.preview_url);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % FetchedTracks.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + FetchedTracks.length) % FetchedTracks.length
    );
  };

  const Tracks = FetchedTracks[currentIndex];

  const variants = {
    enter: { opacity: 0, x: 0 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 1200 },
  };

  useEffect(() => {
    const fetchTracks = async () => {
      const tracksParamsSearch = new URLSearchParams(window.location.search);
      const tracksParams = tracksParamsSearch.get("share") as string;

      try {
        const tracksList = await fetch(`api/tracks?share=${tracksParams}`);
        let tracksListJSON = (await tracksList.json()) as string[];
        tracksListJSON.pop();

        setFetchedTracks(tracksListJSON);
      } catch (error) {
        console.error("Error ClientSide");
      }
    };

    fetchTracks();
    console.log(FetchedTracks);
  }, []);

  return Tracks ? (
    <div className="md:flex-row flex flex-col m-auto md:mx-12 lg:mx-auto lg:mt-[24vh] gap-6 lg:gap-12 mt-12">
      <motion.img
        initial="enter"
        animate="center"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", duration: 1 }}
        className="md:hidden rounded-xl mx-12 w-[70vw] lg:w-[25vw] md:w-[40vw]"
        src={Tracks.album.images.at(1)?.url}
      ></motion.img>
      <audio src={Tracks?.preview_url} ref={audioRef}></audio>
      <div>
        <div className="flex flex-col md:h-[32vw] lg:mt-[5vh] lg:h-[16vw] w-[80vw] lg:w-[40vw] md:w-full my-2 mx-6 md:mx-0">
          <p className="uppercase lg:text-lg text-md font-bold">
            {Tracks.artists.at(0)?.name}
          </p>
          <p className="font-normal lg:text-6xl text-4xl md:text-4xl md:w-[32vw] h-24 md:h-auto">
            {Tracks.name}
          </p>
        </div>
        <div className="items-center flex">
          <div className="grow flex gap-4 md:relative top-[60vh] mt-10 mx-6 md:top-0 md:mx-0">
            <button onClick={handlePrev}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="currentColor" d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>
            <SeeRecommendationsPreview
              item={Tracks}
              recommendations={FetchedTracks}
              audioRef={audioRef}
            />
            <button onClick={handleNext}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="m6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"
                />
              </svg>
            </button>
          </div>
          <div className="uppercase font-semibold flex top-[60vh] mt-12 mr-8 md:relative md:top-0 md:left-0">
            {currentIndex + 1}
            <div className="border-t-2 h-[1px] w-12 mx-3 my-3 border-gray-300"></div>
            {10}
          </div>
        </div>
      </div>
      <AnimatePresence>
        <motion.img
          className="hidden md:inline rounded-xl mx-12 w-[70vw] lg:w-[25vw] md:w-[40vw]"
          src={Tracks.album.images.at(1)?.url}
        ></motion.img>
      </AnimatePresence>
      {FetchedTracks.map((items: any) => (
        <motion.img
          key={items?.id}
          animate={{ rotate: Math.floor(Math.random() * 10) }}
          className={`-z-10 absolute rounded-md left-24 md:left-[46vw] lg:left-[58vw] w-[70vw] lg:w-[25vw] md:w-[40vw]`}
          src={items?.album.images.at(1)?.url}
        ></motion.img>
      ))}
    </div>
  ) : (
    <div>Loading</div>
  );
}
