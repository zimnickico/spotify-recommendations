import React from "react";

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
    <div className="border-[1px] overflow-hidden bg-white rounded-xl absolute mt-2 text-sm flex flex-col">
      {searchResults.map((item: any) => (
        <button
          key={item.id}
          onClick={(e) => handleSet(item)}
          className="hover:bg-gray-50 flex w-[40vw] items-center p-2"
        >
          <img className="w-12 h-12 rounded-lg" src={item.cover}></img>
          <div className="flex flex-col items-start pl-2 overflow-hidden">
            <ul className="overflow-hidden text-left truncate">{item.name}</ul>
            <ul>{item.artist}</ul>
          </div>
        </button>
      ))}
    </div>
  ) : null;
}
