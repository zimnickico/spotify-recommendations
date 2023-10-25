import React from "react";
import SeeRecommendationsPreview from "./preview";
import { motion, AnimatePresence } from "framer-motion";

export default function SeeRecommendationsList({ recommendations }: any) {
  const audioRef = React.useRef(recommendations.at(0)?.preview_url);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % recommendations.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + recommendations.length) % recommendations.length
    );
  };

  const item = recommendations[currentIndex];

  const variants = {
    enter: { opacity: 1, x: 0 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 1, x: 1200 },
  };

  return item ? (
    <div className="z-10 mt-16 m-auto flex gap-20 2xl:gap-64">
      <div className="w-[400px] grow">
        <p className="font-semibold text-xs pb-4">{item?.artist}</p>
        <p className="truncuate leading-tight text-[64px] h-[370px] font-semibold overflow-hidden">
          {item?.name}
        </p>
        <audio src={item?.preview} ref={audioRef}></audio>
        <div className="flex mt-8 items-center gap-6">
        <button onClick={handlePrev}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648L8.09 14.646ZM2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19V5Z"
              />
            </svg>
          </button>
          <SeeRecommendationsPreview
            item={item}
            recommendations={recommendations}
            audioRef={audioRef}
          />
          <button onClick={handleNext}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M16.66 14.647c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033v13.934c0 2.31 2.134 3.769 3.87 2.648l10.79-6.968ZM22.75 5a.75.75 0 0 0-1.5 0v14a.75.75 0 0 0 1.5 0V5Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-[500px] grow shadow-xl">
        <AnimatePresence>
          <motion.img
            key={item.id}
            src={item?.cover}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ type: "linear", duration: 0.5 }}
            className={`z-10 absolute rounded-md w-[500px]`}
          />
        </AnimatePresence>
        <img
          key={item.id}
          src={item?.cover}
          className={`absolute rounded-md w-[500px]`}
        ></img>
        {recommendations.map((items: any) => (
          <motion.img
            key={items?.id}
            animate={{ rotate: Math.floor(Math.random() * 10) }}
            className={`-z-10 absolute rounded-md w-[500px]`}
            src={items?.cover}
          ></motion.img>
        ))}
      </div>
    </div>
  ) : null;
}
