import React from "react";
import { Spotify } from "../consts";

export default function SearchInput({
    setSearchOpen,
    setSearchResults,
    setSearchFocused,
}: any) {

    async function handleChange(searchparams: string) {
        if (!searchparams) {
          setSearchOpen(false);
        } else {
          setSearchOpen(true);
    
          const items = await Spotify.search(searchparams, ["track"], undefined, 5);
    
          setSearchResults(
            items.tracks.items.map((item) => ({
              artist: item.artists.at(0)?.name,
              name: item.name,
              cover: item.album.images.at(1)?.url,
              id: item.id,
            }))
          );
        }
      }

  return (
    <input
      onFocus={() => setSearchFocused(true)}
      placeholder="Search songs"
      className="z-30 relative grow rounded-full focus:placeholder:text-black/0 placeholder:text-black md:text-lg bg-white/0 font-normal pl-4 lg:grow focus:ring-0 focus:outline-0"
      onChange={(e) => handleChange(e.target.value)}
    ></input>
  );
}
