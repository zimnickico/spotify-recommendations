import React from "react";
import SearchInput from "./input";
import GetRecommendationsBtn from "../get-recommendations/button";
import { LayoutGroup, motion } from "framer-motion";

export default function Search({
  setSearchOpen,
  setSearchResults,
  currentTrack,
  setRecommendations,
  searchFocused,
  setSearchFocused,
  searchOpen,
}: any) {
  return (
    <LayoutGroup>
      {!searchFocused ? (
        <motion.div
          layoutId="search"
          className="z-30 relative lg:mt-[-170px] mt-0 border-[1px] bg-gray-100/40 backdrop-blur rounded-full h-14 lg:w-[60vw] w-[95vw] flex items-center"
        >
          <SearchInput
            setSearchOpen={setSearchOpen}
            setSearchResults={setSearchResults}
            searchFocused={searchFocused}
            setSearchFocused={setSearchFocused}
          ></SearchInput>
          <GetRecommendationsBtn
            currentTrack={currentTrack}
            setRecommendations={setRecommendations}
          ></GetRecommendationsBtn>
        </motion.div>
      ) : searchOpen ? (
        <motion.div
          layoutId="search"
          className="z-30 relative h-14 lg:w-[60vw] w-[95vw] bg-gray-50 border-y-[1px] border-x-[1px] rounded-t-3xl backdrop-blur flex items-center"
        >
          <SearchInput
            setSearchOpen={setSearchOpen}
            setSearchResults={setSearchResults}
            searchFocused={searchFocused}
            setSearchFocused={setSearchFocused}
          ></SearchInput>
          <GetRecommendationsBtn
            currentTrack={currentTrack}
            setRecommendations={setRecommendations}
          ></GetRecommendationsBtn>
        </motion.div>
      ) : (
        <motion.div
          layoutId="search"
          className="z-30 relative rounded-full h-14 lg:w-[60vw] w-[95vw] border-[1px] bg-gray-100/50 backdrop-blur flex items-center"
        >
          <SearchInput
            setSearchOpen={setSearchOpen}
            setSearchResults={setSearchResults}
            searchFocused={searchFocused}
            setSearchFocused={setSearchFocused}
          ></SearchInput>
          <GetRecommendationsBtn
            currentTrack={currentTrack}
            setRecommendations={setRecommendations}
          ></GetRecommendationsBtn>
        </motion.div>
      )}
    </LayoutGroup>
  );
}
