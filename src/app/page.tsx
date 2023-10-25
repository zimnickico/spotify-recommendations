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
    <main className="flex flex-col m-auto overflow-hidden">
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
      <div className="m-auto mt-32 max-w-none">
        <Search
          searchOpen={searchOpen}
          searchFocused={searchFocused}
          setSearchFocused={setSearchFocused}
          setSearchOpen={setSearchOpen}
          setSearchResults={setSearchResults}
          setRecommendations={setRecommendations}
          currentTrack={currentTrack}
        ></Search>
        {!searchFocused ? (
          <div
          className="mt-12 float-right">
            <a
              
              href="https://www.producthunt.com/posts/rects-for-spotify?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-rects&#0045;for&#0045;spotify"
              target="_blank"
            >
              <img
                className="transition-all"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=421792&theme=dark"
                alt="Rects&#0032;for&#0032;Spotify - Get&#0032;tailored&#0032;listening&#0032;recommendations&#0046; | Product Hunt"
                style={{ width: 250, height: 54 }}
                width="250"
                height="54"
              />
            </a>
          </div>
        ) : null}
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
