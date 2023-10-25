"use client";

import React from "react";
import { Spotify } from "./components/consts";
import GetRecommendationsBtn from "./components/get-recommendations/button";
import SeeRecommendationsList from "./components/see-recommendations/list";
import TracksList from "./components/tracks/list";
import SearchInput from "./components/search/input";
import SearchList from "./components/search/list";
import Search from "./components/search";
import Landing from "./components/landing";
import Navigation from "./components/navbar/navigation";

// Required Params:
// Track Features:

export default function App() {
  const [searchFocused, setSearchFocused] = React.useState(false);

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
      {/*<Navigation />*/}
      {searchFocused ? (
        <div className="opacity-0 z-10 absolute">
          <Landing />
        </div>
      ) : (
        <div className="opacity-100  m-auto flex flex-col">
          <Landing />
        </div>
      )}
      <div className="m-auto mt-32">
        <Search
          searchOpen={searchOpen}
          searchFocused={searchFocused}
          setSearchFocused={setSearchFocused}
          setSearchOpen={setSearchOpen}
          setSearchResults={setSearchResults}
          setRecommendations={setRecommendations}
          currentTrack={currentTrack}
        ></Search>
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
