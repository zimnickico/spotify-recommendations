"use client";

import React from "react";
import { Spotify } from "./components/consts";
import GetRecommendationsBtn from "./components/get-recommendations/button";
import SeeRecommendationsList from "./components/see-recommendations/list";
import TracksList from "./components/tracks/list";
import SearchInput from "./components/search/input";
import SearchList from "./components/search/list";

// Required Params:
// Track Features:

export default function App() {
  const [searchResults, setSearchResults] = React.useState(new Array());

  const [searchOpen, setSearchOpen] = React.useState(false);
  const [recommendations, setRecommendations] = React.useState(new Array());

  const initialCurrentTrack: any[] = [];
  const initialRecommendationParams: any[] = [];

  const [currentTrack, setCurrentTrack] = React.useState(initialCurrentTrack);
  const [recommendationParams, setRecommendationParams] = React.useState(
    initialRecommendationParams
  ) as any;

  return (
    <main className="flex flex-col m-auto">
      <div className="m-auto mt-32">
        <div className="flex items-center flex-col mb-12 gap-4">
          <div className="flex items-center">
            <svg
              width="36"
              height="36"
              viewBox="-7 -1.5 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M7.954 12.87V1.564a1 1 0 0 1 1-1h.028a1 1 0 0 1 1 1V15.63c.197 1.969-1.42 3.99-3.874 4.693c-2.69.772-5.368-.333-5.98-2.468c-.612-2.135 1.073-4.491 3.764-5.263c1.47-.421 2.935-.283 4.062.277z"
              />
            </svg>
            <p className="text-xl font-semibold">rects.app</p>
          </div>
          <p className="text-center text-gray-400">
            spotify-based listenting recommendations
          </p>
        </div>
        <div className="border-[1px] shadow-gray-100 bg-white rounded-xl h-10 w-[40vw] flex items-center">
          <SearchInput
            setSearchOpen={setSearchOpen}
            setSearchResults={setSearchResults}
          />
          <GetRecommendationsBtn
            recommendationParams={recommendationParams}
            currentTrack={currentTrack}
            setRecommendations={setRecommendations}
          />
        </div>
        <SearchList
          searchOpen={searchOpen}
          searchResults={searchResults}
          setCurrentTrack={setCurrentTrack}
          setSearchOpen={setSearchOpen}
          currentTrack={currentTrack}
          setRecommendationParams={setRecommendationParams}
          recommendationParams={recommendationParams}
        />
        <TracksList
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          setRecommendations={setRecommendations}
        />
      </div>
      <SeeRecommendationsList recommendations={recommendations} />
    </main>
  );
}
