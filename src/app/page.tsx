"use client";

import React from "react";
import { SearchForm } from "./components/search-form";
import { Landing } from "./components/landing-elements";

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
    <main className=" flex-col m-auto h-full">
      <Landing/>
      <SearchForm/>
      {/*<Navigation />
      {searchFocused ? ( null
      ) : (
        <div className="opacity-100 relative m-auto flex flex-col z-10">
          <Landing />
        </div>
      )}
      <div className="z-30 lg:h-auto h-[100vh]  relative m-auto mt-32 max-w-none">
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
      <SeeRecommendationsList recommendations={recommendations} />*/}
    </main>
  );
}
