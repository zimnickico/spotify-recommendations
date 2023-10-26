import React from "react";
import { motion } from "framer-motion";

export default function SearchList({
  searchOpen,
  searchResults,
  setCurrentTrack,
  setSearchOpen,
  currentTrack,
  setRecommendationParams,
  recommendationParams,
}: any) {
  async function handleSet(track: any) {
    const tracksArray = [
      { id: track.id, name: track.name, cover: track.cover },
    ];

    setCurrentTrack([...currentTrack, ...tracksArray]);
    setSearchOpen(false);

    const trackIds = currentTrack.map((track: any) => ({
      id: track.id,
    }));

    const trackIdsString = trackIds.reduce((result: any, item: any) => {
      return `${result}${item.id},`;
    }, "");

    const averageArray = [
      {
        limit: 10,
        seed_tracks: [trackIdsString],
      },
    ];

    setRecommendationParams([...recommendationParams, ...averageArray]);
  }

  return searchOpen ? (
    <motion.div className="z-20 transition-all pt-10 pb-2 px-2 -mt-9 z-10 overflow-hidden border-[1px] bg-gray-100/40 lg:w-[60vw] w-[95vw] backdrop-blur rounded-xl rounded-b-3xl absolute text-md flex flex-col">
      {searchResults.map((item: any) => (
        <button
          key={item.id}
          onClick={(e) => handleSet(item)}
          className="hover:bg-gray-100 rounded-2xl flex flex-row items-center p-2"
        >
          <img className="w-20 h-20 rounded-xl" src={item.cover}></img>
          <div className="flex flex-col items-start pl-4 overflow-hidden grow">
            <ul className="overflow-hidden text-left truncate">{item.name}</ul>
            <ul className="text-gray-500">{item.artist}</ul>
          </div>
          <button className="grow flex justify-end pr-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12Z"
              />
            </svg>
          </button>
        </button>
      ))}
    </motion.div>
  ) : null;
}
